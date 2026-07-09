import { flowSteps } from "@/data/flow";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 依頼の流れ。4ステップをイラスト（public/flow/step1〜4.webp）で見せる。
 * イラスト内に番号・タイトル・説明文が描かれているため、
 * テキストは alt に持たせてアクセシビリティ・SEOを担保する。
 * 文言を変える場合はイラストの作り直しが必要（data/flow.ts は alt の元データ）。
 */
export function FlowSection() {
  return (
    <section className="section" id="flow">
      <Container>
        <SectionHeading
          eyebrow="はじめてでも安心"
          title="依頼の流れ"
          lead="まずは相談だけでも大丈夫です。"
        />

        <ol className="flow-gallery">
          {flowSteps.map((step, i) => (
            <li className="flow-gallery__item" key={step.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/flow/step${i + 1}.webp`}
                alt={`ステップ${i + 1}「${step.title}」：${step.desc}`}
                loading="lazy"
                width={880}
                height={587}
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
