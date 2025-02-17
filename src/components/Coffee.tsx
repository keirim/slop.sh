"use client";

import { motion } from "framer-motion";
import { SiBuymeacoffee } from "react-icons/si";
import { Button } from "@/components/ui/button";

const buttonVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
  },
};

export function CoffeeButton() {
  const handleClick = () => {
    window.open("https://www.buymeacoffee.com/keiran", "_blank");
  };

  return (
    <motion.div initial="hidden" animate="show" variants={buttonVariants}>
      <Button
        onClick={handleClick}
        className="bg-background hover:scale-105 text-primary font-semibold transition-all flex items-center gap-2 border border-border shadow-lg rounded-lg p-4"
      >
        <SiBuymeacoffee className="w-6 h-6" />
        <span className="mt-1 text-base">Buy me a coffee</span>
      </Button>
    </motion.div>
  );
}
