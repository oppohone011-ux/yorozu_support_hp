"use client";

import { useEffect, useState } from "react";
import { contact } from "@/data/site";

/**
 * LINE相談モーダル。
 * ページ内の a[data-line-cta] のクリックを横取りして、
 * ページ遷移せずにモーダル（QRコード＋LINEを開くボタン）を表示する。
 * JSが無効な環境ではリンクがそのまま動くので安全。
 */
export function LineModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-line-cta]");
      if (target) {
        e.preventDefault();
        setOpen(true);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="line-modal"
      role="dialog"
      aria-modal="true"
      aria-label="LINEで相談"
      onClick={(e) => {
        // 背景クリックで閉じる（中身のクリックは閉じない）
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="line-modal__box">
        <button
          className="line-modal__close"
          onClick={() => setOpen(false)}
          aria-label="閉じる"
        >
          ×
        </button>

        <p className="line-modal__title">💬 LINEで相談する</p>
        <p className="line-modal__lead">
          友だち追加して、そのままメッセージを送ってください。
          <br />
          「これ頼めるかな？」だけでも大丈夫です。
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="line-modal__qr"
          src="/line-qr.png"
          alt="LINE友だち追加のQRコード"
          width={200}
          height={200}
        />
        <p className="line-modal__id">ID検索：{contact.line.value}</p>

        <a
          className="btn btn--line btn--block"
          href={contact.line.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          LINEアプリで開く
        </a>

        <p className="line-modal__note">
          スマホの方は上のボタン、パソコンの方はスマホでQRコードを読み取ってください。
        </p>
      </div>
    </div>
  );
}
