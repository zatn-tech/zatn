import { Resend } from "resend";
import { NextResponse } from "next/server";

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
}

export async function POST(request) {
  try {
    const text = await request.text();
    let body = {};
    if (text.trim()) {
      try {
        body = JSON.parse(text);
      } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
      }
    }
    const { name, email, phone, message, website } = body;

    // Honeypot — bots fill this; humans never see the field
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const nameTrim = String(name || "").trim();
    const emailTrim = String(email || "").trim();
    const messageTrim = String(message || "").trim();
    const phoneTrim = String(phone || "").trim();

    if (!nameTrim || !emailTrim || !messageTrim) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 },
      );
    }
    if (!isValidEmail(emailTrim)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (nameTrim.length > 200 || messageTrim.length > 8000) {
      return NextResponse.json({ error: "Message too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email is not configured. Set RESEND_API_KEY on the server." },
        { status: 503 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "zatn.business@gmail.com";
    const from =
      process.env.CONTACT_FROM || "Zatn Website <onboarding@resend.dev>";

    const resend = new Resend(apiKey);

    const html = `
      <h2>New message from zatn site</h2>
      <p><strong>Name:</strong> ${escapeHtml(nameTrim)}</p>
      <p><strong>Email:</strong> ${escapeHtml(emailTrim)}</p>
      ${phoneTrim ? `<p><strong>Phone:</strong> ${escapeHtml(phoneTrim)}</p>` : ""}
      <p><strong>Project:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(messageTrim)}</pre>
    `;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: emailTrim,
      subject: `[Zatn] ${nameTrim.slice(0, 60)}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send email. Try again later." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API:", e);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (ch) => map[ch] || ch);
}
