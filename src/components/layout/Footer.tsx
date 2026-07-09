import { site, navLinks } from "@/data/site";

/** フッター。屋号・エリア・ナビ・コピーライト。 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">{site.name}</p>
          <p>{site.area}</p>
        </div>

        <nav className="footer__nav" aria-label="フッターナビゲーション">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container">
        <p className="footer__copy">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
