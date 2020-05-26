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

const a: Variants = {
  hover: {
    color: "#ebf8ff"
  }
}

function A({ children, ...rest }: PropsWithChildren<{ href: string }>) {
  return (
    <motion.a {...rest} target="_blank" rel="noreferrer noopener" className="underline" variants={a} whileHover="hover">
      {children}
    </motion.a>
  )
}

function Index() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-900">
      <motion.div className="pb-8" initial="initial" animate="visible" variants={variants}>
        <motion.h1 className="text-3xl md:text-5xl xl:text-6xl text-blue-200" variants={title}>
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
        <motion.h2 className="text-1xl md:text-2xl xl:text-3xl text-blue-200" variants={title}>
          ...with <A href="https://tailwindcss.com/">tailwindcss</A>,{" "}
          <A href="https://www.framer.com/api/motion">framer-motion</A> and{" "}
          <A href="https://www.typescriptlang.org/">typescript!</A>
        </motion.h2>
      </motion.div>
    </div>
  )
}

export default Index
