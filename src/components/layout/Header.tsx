import { site, navLinks } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

/**
 * 上部の追従ヘッダー。屋号 + ナビのみ。
 * CTAボタンは置かない（ナビの「お問い合わせ」と重複するため。
 * LINE導線はヒーロー・お問い合わせ・スマホ下部CTAに十分ある）。
 */
export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="/">
          <span className="header__brand-mark" aria-hidden="true">
            <Icon name="leaf" size={20} color="#fff" />
          </span>
          {site.name}
        </a>

        <nav className="header__menu" aria-label="サイト内ナビゲーション">
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
