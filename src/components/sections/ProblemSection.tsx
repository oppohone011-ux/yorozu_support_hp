import { problems, problemMessage } from "@/data/problems";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** 悩み・共感セクション。「あるある」を並べてから中心コピーで受け止める。 */
export function ProblemSection() {
  return (
    <section className="section" id="problems">
      <Container>
        <SectionHeading
          eyebrow="こんなこと、ありませんか？"
          title="頼み先に迷う“ちょっと困った”"
        />

        <div className="problem-grid">
          {problems.map((problem) => (
            <div className="problem-card" key={problem.voice}>
              <p className="problem-card__voice">{problem.voice}</p>
              <p className="problem-card__desc">{problem.desc}</p>
            </div>
          ))}
        </div>

        <div className="problem-message">
          <p className="problem-message__big">
            {problemMessage.big.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className="problem-message__sub">{problemMessage.sub}</p>
        </div>
      </Container>
    </section>
  );
}
