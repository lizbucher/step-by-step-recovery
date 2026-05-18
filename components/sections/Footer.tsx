import Link from "next/link";
import nav from "@/content/navigation.json";

export default function Footer() {
  return (
    <footer className="bg-section-dark text-section-dark-text mt-24">
      <div className="container-prose py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="inline-block h-10 w-10 rounded-full bg-clay flex items-center justify-center">
                <span className="font-display font-bold text-section-dark text-base leading-none">S</span>
              </span>
              <span className="font-display font-bold text-section-dark-text text-xl tracking-tight leading-none">
                Step by Step
              </span>
            </Link>
            <p className="mt-6 max-w-md text-section-dark-text/75 text-body-long font-light">
              {nav.footer_address_block.brand}. A boutique-scale sober living residence in St. Louis,
              Missouri — founder-led, by design.
            </p>
            <div className="mt-8 space-y-1.5">
              {nav.footer_address_block.lines.map((line) => (
                <p key={line} className="text-section-dark-text/65 text-sm">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            {nav.footer_columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-eyebrow uppercase font-semibold text-clay">{col.heading}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-section-dark-text/85 hover:text-section-dark-text transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-section-dark-text/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-section-dark-text/55">
          <p>© {new Date().getFullYear()} {nav.footer_address_block.legal_entity}. All rights reserved.</p>
          <div className="flex gap-6">
            {nav.footer_legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-section-dark-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
