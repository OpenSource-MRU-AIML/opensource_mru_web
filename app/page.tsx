"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="m-10">
      <div className="flex flex-col gap-10">

        <motion.div
          className="flex flex-row justify-between place-items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-row gap-3 place-items-center">
            <motion.div
              className="md:text-5xl text-4xl"
              whileHover={{ scale: 1.1 }}
            >
              <BsCodeSlash />
            </motion.div>
            <div className="md:text-2xl">
              OpenSource<br />MRU
            </div>
          </div>
          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
          >

            <Link href={"https://github.com/OpenSource-MRU-AIML"}>
              <div className="text-2xl mr-10">
                <FaGithub />
              </div>
            </Link>

          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="border border-3 border-gray-800 rounded bg-black w-fit mt-10 md:my-10 mb-4 md:mb-5"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white opacity-80 font-extralight text-xs px-6 py-2">
              Currently in Stealth Mode
            </div>
          </motion.div>
          <div className="flex flex-col gap-2 md:gap-5 text-xl md:text-6xl font-black place-items-center mb-5  md:mb-20">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Learn, Contribute and Enhance
            </motion.div>
            <motion.div
              className="primary-clr-text"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Open Source Projects
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              @MRU.
            </motion.div>
          </div>
          <motion.div
            className="md:text-xl text-white opacity-70 text-center md:w-1/2  w-5/6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We are a community of developers and designers collectively contributing to build products for Malla Reddy University.
          </motion.div>
          <Link href={'https://forms.office.com/r/beYX9bLvPS'}>
            <motion.div
              className="primary-clr h-fit flex flex-row justify-center rounded my-10"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-gray-900 mx-6 my-2">
                Join Now!
              </div>
            </motion.div>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-5 ">
          <div className="h-1 bg-gray-800">
          </div>
          <motion.div
            className="flex md:flex-row flex-col justify-between text-xs font-extralight gap-4 place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              @opensource-mru is a initiative of AIML Branch of Malla Reddy University
            </div>
            <div>
              © 2024 opensource-mru
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
