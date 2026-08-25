type PesoBrandMarkProps = {
  compact?: boolean;
  showTagline?: boolean;
  className?: string;
};

export function PesoBrandMark({ compact = false, showTagline = false, className = "" }: PesoBrandMarkProps) {
  return (
    <div className={`inline-flex flex-col ${className}`} aria-label="PESO Beauty">
      <div className="flex items-baseline gap-2.5">
        <span
          className={`font-black uppercase leading-none tracking-[0.08em] ${
            compact ? "text-xl" : "text-3xl sm:text-4xl"
          } peso-logo-text`}
        >
          PESO
        </span>
        <span
          className={`font-semibold uppercase leading-none text-peso-blush ${
            compact ? "text-[0.7rem] tracking-[0.22em]" : "text-sm tracking-[0.28em] sm:text-base"
          }`}
        >
          Beauty
        </span>
      </div>

      <div
        className={`bg-gradient-to-r from-peso-pink via-peso-rose to-peso-gold ${compact ? "mt-1 h-px" : "mt-2 h-px"}`}
        aria-hidden="true"
      />

      {showTagline ? (
        <div className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/45">
          Confidence, Beauty, Success.
        </div>
      ) : null}
    </div>
  );
}
