type PesoBrandMarkProps = {
  compact?: boolean;
  showTagline?: boolean;
  className?: string;
};

export function PesoBrandMark({ compact = false, showTagline = false, className = "" }: PesoBrandMarkProps) {
  return (
    <div className={`inline-flex flex-col ${className}`} aria-label="PESO Beauty Bar">
      <div className="flex items-start gap-2">
        <span
          className={`font-black uppercase leading-none tracking-[0.08em] ${
            compact ? "text-xl" : "text-3xl sm:text-4xl"
          } peso-logo-text`}
        >
          PESO
        </span>
        <span
          className={`mt-0.5 inline-flex items-center justify-center rounded-full border border-peso-rose/40 bg-peso-pink/10 text-peso-rose ${
            compact ? "h-4 w-4 text-[0.55rem]" : "h-5 w-5 text-[0.65rem]"
          }`}
          aria-hidden="true"
        >
          ✦
        </span>
      </div>

      <div className={`flex items-center ${compact ? "mt-0.5 gap-1.5" : "mt-1 gap-2"}`}>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-peso-pink to-peso-pink" aria-hidden="true" />
        <span
          className={`font-[family-name:var(--font-display)] uppercase text-peso-pink ${
            compact ? "text-[0.58rem] tracking-[0.34em]" : "text-xs tracking-[0.46em] sm:text-sm"
          }`}
        >
          Beauty Bar
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-peso-pink to-peso-pink" aria-hidden="true" />
      </div>

      {showTagline ? (
        <div className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/45">
          Confidence · Beauty · Success
        </div>
      ) : null}
    </div>
  );
}
