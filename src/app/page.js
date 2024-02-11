'use client'

import Image from "next/image";
import Nav from "@/components/header/Nav";
// import Header from "@/components/header/header";
// import Header from "@/layout/User/MainLayout/index";
export default function Home() {
  return (
    <section>
      {/* <Header /> */}
      <Nav />
      <p> Trang chủ hệ thống</p>
    </section>
  );
}
