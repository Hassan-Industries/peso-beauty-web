import { Flower2 } from "lucide-react";

type DoubleRoseMarkProps = {
  compact?: boolean;
  className?: string;
};

export function DoubleRoseMark({ compact = false, className = "" }: DoubleRoseMarkProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} aria-label="Double Rose Strands">
      <span className="flex -space-x-2 text-peso-rose" aria-hidden="true">
        <Flower2 className={compact ? "h-5 w-5" : "h-7 w-7"} strokeWidth={1.4} />
        <Flower2 className={compact ? "mt-1 h-4 w-4 text-peso-gold" : "mt-1.5 h-6 w-6 text-peso-gold"} strokeWidth={1.4} />
      </span>
      <span className="inline-flex flex-col">
        <span className={`font-[family-name:var(--font-display)] leading-none text-peso-blush ${compact ? "text-lg" : "text-2xl sm:text-3xl"}`}>
          Double Rose
        </span>
        <span className={`mt-1 font-semibold uppercase text-peso-gold ${compact ? "text-[0.48rem] tracking-[0.34em]" : "text-[0.6rem] tracking-[0.42em]"}`}>
          Strands
        </span>
      </span>
    </div>
  );
}
