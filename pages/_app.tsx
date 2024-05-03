import "../globals.css";
import { ReactNode } from "react";
import { AppProps } from "next/app";
import { NextComponentType } from "next";

//declares a new type that combines NextComponentType(the base type provided by Next)
//and the additional property which is getLayout, which is an optional property (?)
type PageWithLayout = NextComponentType & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function DriftNotes({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  const getLayout =
    (Component as PageWithLayout).getLayout || ((page: ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}
