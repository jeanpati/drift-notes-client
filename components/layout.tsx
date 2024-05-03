import Head from "next/head";
import { AppWrapper } from "../context/state";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AppWrapper>
      <>
        <Head>
          <title>Drift Notes</title>
        </Head>
        <main className="container">{children}</main>
      </>
    </AppWrapper>
  );
}
