import { ComponentProps } from "react";
import { Header } from "../components/Header";
import { BreadCrumb } from "../components/BreadCrumb";

export function RootLayout({ children }: ComponentProps<"div">) {
  return (
    <>
      <Header />
      <main>
        <BreadCrumb />
        {children}
      </main>
    </>
  )
}