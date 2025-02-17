"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import HamburgerMenu from "@/components/HamburgerMenu";
import { links } from "@/lib/links";
import { Button } from "@/components/ui/button";
import { FiMoon, FiSun } from "react-icons/fi";

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
};

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="bg-background/50 backdrop-blur-sm text-foreground flex items-center justify-between h-14 sm:h-16 z-50 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl fixed top-2 sm:top-4 rounded-lg shadow-lg border border-border px-2 sm:px-4"
      >
        <div className="flex items-center gap-8">
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              href="/"
              className="text-2xl font-bold hover:text-primary/80 ml-4 transition-colors"
            >
              slop.sh
            </Link>
          </motion.div>
          {!isMobile && (
            <nav className="hidden md:flex gap-6">
              {links.map(
                (link) =>
                  !link.external && (
                    <motion.div
                      key={link.href}
                      whileHover="hover"
                      variants={linkVariants}
                    >
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ),
              )}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </Button>
          {isMobile && <HamburgerMenu />}
          {!isMobile && (
            <motion.div
              whileHover="hover"
              variants={linkVariants}
              className="hidden md:block"
            >
              {links
                .filter((link) => link.external)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
