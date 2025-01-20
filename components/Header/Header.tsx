"use client";

import { IconSearch } from "@tabler/icons-react";
import { Autocomplete, Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  { link: "#about", label: "About" },
  { link: "#FAQ", label: "FAQ" },
  { link: "#contact", label: "Contact" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </a>
  ));

  return (
    <Container size="xl">
      <header className={classes.header}>
        <div className={classes.inner}>
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
            <Link href="/"><Image src="/logo.svg" alt="Logo" width={150} height={80} /></Link>
          </Group>

          <Group>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              {items}
            </Group>
          </Group>
        </div>
      </header>
    </Container>
  );
}
