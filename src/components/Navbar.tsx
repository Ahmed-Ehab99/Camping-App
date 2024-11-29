"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeLink, setActiveLink] = useState(
    () => window.location.hash.substring(1) || ""
  );
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
    setActiveLink(targetId || "");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) =>
        document.getElementById(link.href.substring(1))
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveLink(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 pt-5">
      <Link href="/" className="focus-visible:outline-none">
        <Image
          src="/hilink-logo.svg"
          alt="Logo"
          width={74}
          height={29}
          loading="lazy"
        />
      </Link>
      <div
        className={`${
          openNavigation ? "flex" : "hidden"
        } fixed inset-0 xl:static xl:flex xl:mx-auto max-xl:bg-white`}
      >
        <ul className="h-full 2xl:gap-12 gap-8 flexCenter relative xl:flex-row flex-col m-auto">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={`regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold hover:text-black`}
                onClick={handleClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="xl:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer xl:hidden z-10"
        onClick={toggleNavigation}
        loading="lazy"
      />
    </nav>
  );
};

export default Navbar;
