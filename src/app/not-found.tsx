import Link from "next/link";
import { Container } from "@/components/ui/Container";

/** カスタム404。迷子になった人をやさしくトップへ案内する。 */
export default function NotFound() {
  return (
    <section className="section">
      <Container narrow>
        <div className="notfound">
          <p className="notfound__code">404</p>
          <h1 className="notfound__title">ページが見つかりませんでした</h1>
          <p className="notfound__lead">
            お探しのページは、移動したか削除された可能性があります。
            <br />
            お手数ですが、トップページからご覧ください。
          </p>
          <div className="notfound__actions">
            <Link className="btn btn--primary" href="/">
              トップページへ戻る
            </Link>
            <Link className="btn btn--outline" href="/blog">
              ブログを見る
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
