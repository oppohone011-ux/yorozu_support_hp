import { contact } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

/**
 * スマホ表示時に画面下部へ常に追従する相談CTA（LINE・メール）。
 * PC では CSS(.sticky-cta)で非表示。
 */
export function StickyCta() {
  return (
    <div className="sticky-cta">
      <a
        className="btn btn--line"
        href={contact.line.href}
        target="_blank"
        rel="noopener noreferrer"
        data-line-cta=""
      >
        <Icon name="line" size={18} /> LINEで相談
      </a>
      <a className="btn btn--accent" href="/#contact-form">
        <Icon name="doc" size={18} /> フォームで相談
      </a>
    </div>
  );
}
