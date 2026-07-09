"use client";

import { useState } from "react";
import { navLinks, contact } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

/**
 * スマホ用ハンバーガーメニュー。
 * PCではCSSで非表示（.mobile-menu は 720px 以下のみ表示）。
 * リンクを押すと自動で閉じる。
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        className={open ? "mobile-menu__burger is-open" : "mobile-menu__burger"}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <>
          <div
            className="mobile-menu__backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-menu__panel" aria-label="メニュー">
            <ul className="mobile-menu__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn--line btn--block"
              href={contact.line.href}
              data-line-cta=""
              onClick={() => setOpen(false)}
            >
              <Icon name="line" size={18} /> LINEで相談する
            </a>
          </nav>
        </>
      )}
    </div>
  );
}
