import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/links";
import { FiX } from "react-icons/fi";

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground focus:outline-none"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="absolute top-14 -right-6 w-full bg-background/50 backdrop-blur-sm text-foreground flex flex-col items-start pr-16 pl-4 py-2 shadow-lg border border-border rounded-lg transform"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-2 w-full"
            onClick={() => setIsOpen(false)}
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
