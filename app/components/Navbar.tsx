"use client";

import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React, { useState } from "react";
import styles from "../../public/css/navbar.module.css";
export default function Navbar() {
  const [options, SetOptions] = useState(false);

  return (
    <>
    <section className={styles.navbar}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/svgs/logo.svg"
          alt="a"
          width={50}
          height={50}
          className={styles.image}
        />
      </Link>
      <ul>
        <li>
          {" "}
          <Link href="/">Izrada Websajtova</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/">Video Editing</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/">SEO Optimizacija</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/">Kontakt</Link>{" "}
        </li>
      </ul>
      <img src="/svgs/options.svg" alt="options" className={styles.options} />
    </section>
    <ul className={styles.ulMobile}>
        <li>
          {" "}
          <Link href="/">Izrada Websajtova</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/">Video Editing</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/">SEO Optimizacija</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/">Kontakt</Link>{" "}
        </li>
      </ul>
    </>
  );
}
  