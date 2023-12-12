"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = (
    <>
      <NavbarItem>
        <Link
          color="foreground"
          href="/contact"
          className="text-gray-500 hover:text-blue-600 text-lg font-semibold"
        >
          About Me
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          color="foreground"
          href="/projects"
          className="text-gray-500 hover:text-blue-600 text-lg font-semibold"
        >
          Projects
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          color="foreground"
          href="/contact"
          className="text-gray-500 hover:text-blue-600 text-lg font-semibold"
        >
          Contact Me
        </Link>
      </NavbarItem>
    </>
  );

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gradient-to-bl from-gray-900 to-gray-600 h-20 "
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-gray-500 text-lg hover:text-blue-600">
            Pallab
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links}
      </NavbarContent>
      <NavbarMenu>{links}</NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;