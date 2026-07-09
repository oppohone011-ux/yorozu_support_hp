import type { ReactNode } from "react";

/** 中央寄せの最大幅コンテナ。narrow で読み物向けの狭い幅にできる。 */
export function Container({
  children,
  narrow = false,
}: {
  children: ReactNode;
  narrow?: boolean;
}) {
  return (
    <div className={narrow ? "container container--narrow" : "container"}>
      {children}
    </div>
  );
}
