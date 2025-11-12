"use client"

import { motion } from "framer-motion"

const Motion = ({children}:{children: React.ReactNode}) => {
  return (
    <motion.div
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{ duration: .8, ease: "easeOut" }}
      viewport={{once: false}}
    >
      {children}
    </motion.div>
  )
}

export default Motion
