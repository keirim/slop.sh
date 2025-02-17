import Link from "next/link";
import GridPattern from "@/components/ui/grid-pattern";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <GridPattern
        className="fixed inset-0 text-primary/10 z-0"
        height={50}
        width={50}
        style={{ opacity: 0.1 }}
      />
      <div className="flex flex-col items-center justify-center h-screen text-foreground">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl mb-8"
        >
          Page Not Found
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground mb-8"
        >
          The page you are looking for does not exist. It may have been moved,
          or is under construction.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            className="text-lg font-bold hover:bg-primary/10 rounded transition-colors duration-200 ease-in-out px-8 py-2 select-none"
            href="/"
          >
            Go back home
          </Link>
        </motion.div>
      </div>
    </>
  );
}
