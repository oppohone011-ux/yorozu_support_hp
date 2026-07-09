"use client";

import { useState } from "react";
import { contact } from "@/data/site";
import { services } from "@/data/services";

/** メールアドレスの形式チェック（実用十分なゆるめの判定） */
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

/**
 * 相談フォーム。
 * サーバー不要の方式：入力内容から件名・本文を組み立てて
 * メールアプリを開く（宛先は data/site.ts の contact.email）。
 * 返信先メールアドレスは必須＋形式バリデーション付き。
 * 将来 Formspree 等の送信サービスに切り替える場合は
 * handleSubmit を form の action POST に置き換えるだけでOK。
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setEmailError("返信先のメールアドレスを入力してください");
      return false;
    }
    if (!isValidEmail(value)) {
      setEmailError("メールアドレスの形式が正しくありません（例：taro@example.com）");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) return;

    const subject = `【ご相談】${category || "その他"}${name ? `（${name}様）` : ""}`;
    const body = [
      "―― 唐津よろずサポート 相談フォーム ――",
      "",
      `お名前：${name || "（未記入）"}`,
      `返信先メール：${email.trim()}`,
      `ご相談の種類：${category || "（未選択）"}`,
      "",
      "▼ ご相談内容",
      message,
    ].join("\n");

    window.location.href = `${contact.email.href}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <h3 className="contact-form__title">✍️ フォームで相談</h3>
      <p className="contact-form__lead">
        LINEを使っていない方はこちら。送信ボタンで内容の入ったメールが作成されます。
      </p>

      <div className="contact-form__row">
        <label className="contact-form__field">
          <span className="contact-form__label">お名前（ニックネームでもOK）</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="例：山田"
            autoComplete="name"
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">ご相談の種類</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">選んでください（任意）</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="その他・わからない">その他・わからない</option>
          </select>
        </label>
      </div>

      <label className="contact-form__field">
        <span className="contact-form__label">
          返信先メールアドレス <em>必須</em>
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) validateEmail(e.target.value);
          }}
          onBlur={(e) => {
            if (e.target.value) validateEmail(e.target.value);
          }}
          placeholder="例：taro@example.com"
          autoComplete="email"
          inputMode="email"
          aria-invalid={emailError ? true : undefined}
          className={emailError ? "is-error" : undefined}
        />
        {emailError && (
          <span className="contact-form__error" role="alert">
            ⚠ {emailError}
          </span>
        )}
      </label>

      <label className="contact-form__field">
        <span className="contact-form__label">
          ご相談内容 <em>必須</em>
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="例：庭の草刈りをお願いしたいです。だいたいの広さは…"
        />
      </label>

      <button type="submit" className="btn btn--accent btn--block">
        ✉️ メールを作成して送る
      </button>
    </form>
  );
}
