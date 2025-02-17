import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="pt-4 space-y-4"
    >
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-muted-foreground leading-relaxed">
        I&apos;m a full-stack developer from the UK and I just write 
        stuff for fun. This site serves as a hub for my various projects 
        and experiments in web development, software
        development and other topics that interest me. I have been learning how
        to develop software for the past 2 years or so, and have recently began
        to take web development more seriously in the last 2 months or so. I am
        currently working on a few projects primarily in the web development
        space, and am really happy with the progress I have made so far.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        I enjoy working with modern web technologies like React, Next.js, and Tailwind CSS. 
        I am also interested in exploring backend development with Node.js and Express. 
        In my free time, I like to experiment with new tools and frameworks, and contribute 
        to open-source projects.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Feel free to check out my projects and get in touch if you have any questions or 
        collaboration ideas. I am always open to learning new things and connecting with 
        fellow developers.
      </p>
    </motion.div>
  );
}
