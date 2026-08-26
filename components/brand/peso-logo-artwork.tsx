import Image from "next/image";

type PesoLogoArtworkProps = {
  salon?: boolean;
  priority?: boolean;
  className?: string;
};

export function PesoLogoArtwork({ salon = false, priority = false, className = "" }: PesoLogoArtworkProps) {
  return (
    <Image
      src={salon ? "/brand/peso-beauty-bar.png" : "/brand/peso-beauty.png"}
      alt={salon ? "PESO Beauty Bar" : "PESO Beauty"}
      width={1254}
      height={1254}
      priority={priority}
      sizes="(min-width: 1024px) 19rem, 15rem"
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}
