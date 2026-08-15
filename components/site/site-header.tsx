import Link from "next/link";

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Book", "/book"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="/" className="group min-w-fit">
          <div className="text-xl font-black tracking-[0.24em] text-white transition group-hover:text-peso-blush">
            PESO
          </div>
          <div className="-mt-1 text-[0.58rem] font-semibold tracking-[0.42em] text-peso-pink">
            BEAUTY BAR
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-peso-blush">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/account" className="hidden text-sm text-white/70 transition hover:text-white sm:inline">
            My Account
          </Link>
          <Link
            href="/book"
            className="rounded-full bg-peso-pink px-5 py-2.5 text-sm font-bold text-black transition hover:bg-peso-blush"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
