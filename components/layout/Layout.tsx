import React, { Fragment, ReactNode } from "react";
import Navbar from "../navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
    </Fragment>
  )
}

export default Layout;