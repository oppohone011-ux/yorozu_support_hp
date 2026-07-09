import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "唐津よろずサポートにおける個人情報の取り扱いについてのご案内です。",
};

/** プライバシーポリシー（個人情報の取り扱い）。文言は運営者確認済み（2026-07）。 */
export default function PrivacyPage() {
  const items = [
    {
      icon: "doc" as const,
      title: "取得する情報",
      body: "お問い合わせやご相談の際に、お名前・メールアドレス・電話番号などの個人情報をご提供いただく場合があります。",
    },
    {
      icon: "star" as const,
      title: "利用目的",
      body: "取得した個人情報は、お問い合わせへの回答、ご依頼への対応、サービス提供のために利用し、それ以外の目的では利用いたしません。",
    },
    {
      icon: "pin" as const,
      title: "第三者への提供",
      body: "取得した個人情報は適切に管理し、法令に基づく場合を除き、ご本人の同意なく第三者へ提供することはありません。",
    },
    {
      icon: "recycle" as const,
      title: "管理・廃棄",
      body: "個人情報は、利用目的の達成後、適切な方法で管理・廃棄いたします。",
    },
  ];

  return (
    <section className="section">
      <Container narrow>
        <SectionHeading
          eyebrow="プライバシーポリシー"
          title="個人情報の取り扱いについて"
          lead="唐津よろずサポート（以下、「当サービス」）は、個人情報を次の方針で取り扱います。"
        />

        <div className="policy-list">
          {items.map((item) => (
            <article className="policy-card" key={item.title}>
              <h2 className="policy-card__title">
                <Icon
                  name={item.icon}
                  color="var(--color-primary)"
                  boxed
                  size={18}
                />
                {item.title}
              </h2>
              <p className="policy-card__body">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="policy-contact">
          <p>
            個人情報の取り扱いに関するお問い合わせは、
            <Link href="/#contact-form">お問い合わせフォーム</Link>
            よりご連絡ください。
          </p>
          <p className="policy-contact__date">
            制定日：2026年7月9日
            <br />
            唐津よろずサポート
          </p>
        </div>

        <p className="article__back">
          <Link href="/">← トップページへ戻る</Link>
        </p>
      </Container>
    </section>
  );
}
