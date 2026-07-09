import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { CaseSection } from "@/components/sections/CaseSection";
import { BadmintonSection } from "@/components/sections/BadmintonSection";
import { EcSection } from "@/components/sections/EcSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ReasonSection } from "@/components/sections/ReasonSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { PaymentSection } from "@/components/sections/PaymentSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { BlogTeaserSection } from "@/components/sections/BlogTeaserSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { NoticeSection } from "@/components/sections/NoticeSection";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * トップページ（LP本体）。
 * セクションの並び順を変えたい場合はここの順番を入れ替えるだけ。
 * 各セクションの中身は components/sections/ 配下、
 * 文言・データは data/ 配下で管理しています。
 *
 * 流れ：共感 → できること → イメージ → 特集 → 信頼(実績/声) →
 *       選ばれる理由 → 料金 → 地域 → 人物 → 依頼手順 → FAQ →
 *       お知らせ → 仲間募集 → 注意事項 → 問い合わせ
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServiceSection />
      <CaseSection />
      <BadmintonSection />
      <EcSection />
      <WorksSection />
      <TestimonialSection />
      <ReasonSection />
      <PricingSection />
      <PaymentSection />
      <ServiceAreaSection />
      <ExperienceSection />
      <ProfileSection />
      <FlowSection />
      <FaqSection />
      <BlogTeaserSection />
      <CollaborationSection />
      <NoticeSection />
      <ContactSection />
    </>
  );
}
