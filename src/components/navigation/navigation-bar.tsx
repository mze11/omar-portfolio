import { Divider, Stack } from "@mui/material";
import { NAV_LINKS } from "./types";
import Image from "next/image";
import Link from "next/link";

import LOGO from "../../../public/OZ.svg";
import { usePathname } from "next/navigation";

export const NavigationBar = () => {
  const path = usePathname();

  const isActive = (route: string) => path === route;

  const navLinks = [
    {
      title: "home",
      route: NAV_LINKS.HOME,
    },
    {
      title: "about",
      route: NAV_LINKS.ABOUT,
    },
    {
      title: "projects",
      route: NAV_LINKS.PROJECTS,
    },
  ];

  return (
    <Stack
      position={"fixed"}
      zIndex={100}
      width={"100%"}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px={8}
      py={1}
      sx={{ background: "#fff" }}
    >
      <Stack flexDirection="row" gap={8}>
        {navLinks.map((navLink) => (
          <Link
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
            }}
            href={navLink.route}
            key={navLink.route}
          >
            {navLink.title}
            {isActive(navLink.route) && (
              <Divider sx={{ mt: 1, borderColor: "#222" }}></Divider>
            )}
          </Link>
        ))}
      </Stack>
      <Image src={LOGO} alt="O/Z" width={24} height={24} />
    </Stack>
  );
};
