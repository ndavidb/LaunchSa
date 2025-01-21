"use client";

import {IconChevronDown, IconSearch} from "@tabler/icons-react";
import {
  Autocomplete,
  Box,
  Burger, Button,
  Center, Collapse,
  Container, Divider,
  Drawer,
  Group,
  Menu,
  ScrollArea, Stack,
  UnstyledButton, useMantineTheme
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const links = [
  // { link: "/", label: "Home" },
  { link: "/#about", label: "About" },
  { link: "/#FAQ", label: "FAQ" },
  { link: "/#contact", label: "Contact" },
  { link: "/legal-terms", label: "Legal Terms" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

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
    <Container size="xl" pos="sticky">
      <header className={classes.header}>
        <div className={classes.inner}>
          <Group>
            <Link href="/"><Image src="/logo.svg" alt="Logo" width={150} height={80}/></Link>
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
