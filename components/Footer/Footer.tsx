"use client";

import { Anchor, Container, Group } from "@mantine/core";
import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const links = [
  { link: "/legal-terms", label: "Legal Terms" }
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
        component={Link}
      c="black"
      key={link.label}
      href={link.link}
      size="md"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={150} height={80} />
        </Link>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
