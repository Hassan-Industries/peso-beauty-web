type PesoBrandMarkProps = {
  compact?: boolean;
  showTagline?: boolean;
  className?: string;
};

export function PesoBrandMark({ compact = false, showTagline = false, className = "" }: PesoBrandMarkProps) {
  return (
    <div className={`inline-flex flex-col ${className}`} aria-label="PESO Beauty">
      <div className="inline-flex flex-col items-center">
        <span
          className={`font-black uppercase leading-none tracking-[0.08em] ${
            compact ? "text-xl" : "text-3xl sm:text-4xl"
          } peso-logo-text`}
        >
          PESO
        </span>
        <span
          className={`font-[family-name:var(--font-display)] uppercase leading-none text-peso-rose ${
            compact ? "mt-1 text-[0.52rem] tracking-[0.38em]" : "mt-1.5 text-xs tracking-[0.48em] sm:text-sm"
          }`}
        >
          Beauty
        </span>
        <span
          className={`w-full bg-gradient-to-r from-peso-pink via-peso-rose to-peso-gold ${compact ? "mt-1 h-px" : "mt-2 h-px"}`}
          aria-hidden="true"
        />
      </div>

      {showTagline ? (
        <div className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/45">
          Confidence, Beauty, Success.
        </div>
      ) : null}
    </div>
  );
}
