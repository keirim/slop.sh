import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HomeCard from "@/components/HomeCard";
import GitHubActivity from "@/components/GitHubActivity";
import MozartGallery from "@/components/MozartGallery";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const loadingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

function LoadingFallback() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={loadingVariants}
      className="flex items-center justify-center h-screen"
    >
      <div className="text-2xl font-semibold">Loading...</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <ScrollArea className="h-screen">
      <Navbar />
      <main className="container mx-auto px-4 space-y-24 py-40">
        <Suspense fallback={<LoadingFallback />}>
          <HomeCard />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <GitHubActivity />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <MozartGallery />
        </Suspense>
      </main>
    </ScrollArea>
  );
}
