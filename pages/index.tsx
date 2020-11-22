import { motion, Variants } from "framer-motion"
import { PropsWithChildren } from "react"

const variants: Variants = {
  initial: {},
  visible: {
    transition: { staggerChildren: 0.1, staggerDirection: 1 }
  }
}

const title: Variants = {
  initial: {
    opacity: 0,
    transform: "scale(1.2)"
  },
  visible: {
    opacity: 1,
    transform: "scale(1)"
  }
}

function A({ children, ...rest }: PropsWithChildren<{ href: string }>) {
  return (
    <a {...rest} target="_blank" rel="noreferrer noopener" className="underline hover:text-gray-300">
      {children}
    </a>
  )
}

function Index() {
  return (
    <div className="bg-gradient-to-r from-fuchsia-800 to-orange-600 w-screen h-screen flex justify-center items-center text-gray-100">
      <motion.div className="pb-8" initial="initial" animate="visible" variants={variants}>
        <motion.h1 className="text-3xl md:text-5xl xl:text-6xl" variants={title}>
          Hello <A href="https://nextjs.org/">Next.js</A>{" "}
          <motion.a
            className="inline-block cursor-pointer"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ rotate: 90, scale: 1.3 }}
            whileTap={{ scale: 0.3 }}
            href="https://giphy.com/gifs/filmeditor-high-five-sacha-baron-cohen-l0ErFafpUCQTQFMSk/fullscreen"
            target="_blank"
            rel="noreferrer noopener"
          >
            👋
          </motion.a>
        </motion.h1>
        <motion.h2 className="text-1xl md:text-2xl xl:text-3xl" variants={title}>
          ...with <A href="https://tailwindcss.com/">tailwindcss</A>,{" "}
          <A href="https://www.framer.com/api/motion">framer-motion</A> and{" "}
          <A href="https://www.typescriptlang.org/">typescript!</A>
        </motion.h2>
      </motion.div>
    </div>
  )
}

export default Index
