import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "line" | "outline";

/**
 * リンク兼ボタン。基本は <a> として動作（CTA用途）。
 * variant で色、block で全幅にできる。
 * 外部リンク（http〜）は自動で新しいタブで開く（LINE等でページ遷移して迷わないように）。
 */
export function Button({
  href,
  children,
  variant = "primary",
  block = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  block?: boolean;
}) {
  const classes = ["btn", `btn--${variant}`, block ? "btn--block" : ""]
    .filter(Boolean)
    .join(" ");

  const isExternal = href.startsWith("http");
  // LINEリンクはページ遷移せずモーダルを開く（LineModal が横取り）
  const isLine = href.includes("line.me");

  return (
    <a
      className={classes}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      data-line-cta={isLine ? "" : undefined}
    >
      {children}
    </a>
  );
}
