import Link from "next/link";
import React from "react";
import { Card, CardHeader } from "react-bootstrap";

export default function MobileNav() {
  return (
    <>
      <div className="d-lg-none d-md-block">
        <Link href={"/"} className="nav-link">
          <CardHeader className="display-6 text-uppercase  px-0 py-3 mx-3">
            hush
          </CardHeader>
        </Link>
        <div className="border-bottom"></div>
      </div>
    </>
  );
}
