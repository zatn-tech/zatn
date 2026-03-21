import Image from "next/image";

const Laptop = ({ image, link, title = "Project" }) => {
  const src = typeof image === "string" ? image : image;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full min-w-0 max-w-[min(100%,720px)]"
    >
      <div className="overflow-hidden rounded-xl border border-mono-600/80 bg-mono-900 shadow-[8px_8px_0_rgba(255,255,255,0.04),20px_20px_50px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <div className="relative aspect-[16/10] w-full min-w-0">
          <Image
            src={src}
            alt={`${title} — desktop preview`}
            fill
            className="object-contain object-center p-2 sm:p-3 md:p-5"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 720px"
            priority={false}
          />
        </div>
      </div>
    </a>
  );
};

export default Laptop;
