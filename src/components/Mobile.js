import Image from "next/image";

const Mobile = ({ image, link, title = "Project" }) => {
  const src = typeof image === "string" ? image : image;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group mx-auto block w-full max-w-[200px] sm:max-w-[220px]"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-mono-600/80 bg-mono-950 shadow-[8px_8px_0_rgba(255,255,255,0.04),16px_16px_48px_rgba(0,0,0,0.6)] transition-shadow duration-300 group-hover:shadow-[10px_10px_0_rgba(255,255,255,0.06),20px_20px_56px_rgba(0,0,0,0.65)]">
        <div className="pointer-events-none relative z-10 mx-[32%] mt-2 h-3.5 rounded-full border border-mono-500 bg-mono-950 sm:h-4" />
        <div className="relative aspect-[9/19] w-full">
          <Image
            src={src}
            alt={`${title} — mobile preview`}
            fill
            className="object-contain object-center px-1.5 pb-2.5 pt-0.5 sm:px-2 sm:pb-3 sm:pt-1"
            sizes="(max-width: 640px) 72vw, 220px"
            priority={false}
          />
        </div>
      </div>
    </a>
  );
};

export default Mobile;
