import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import LineGradient from "../components/LineGradient"

const Skills = () => {
  const mediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="skills" className="pt-10 pb-24" >
      <div className="md:flex md:justify-between md:gap-16 mt-32 " >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" md:w-1/3"
        >
          <p className="font-poppins font-semibold text-4xl mb-5" >
            {`<skills/>`}
          </p>
          <LineGradient width="w-1/3" />

          <p className="mt-10 mb-7" >
            Since beginning my journey as a front-end developer I've improved my soft skills, always trying to be a better professional.
          </p>

        </motion.div>

        <div className="mt-16 md:mt-0">
          {mediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-full
            before:w-full before:max-w-[400px] md:before:max-w-[400px] before:h-full before:border-2 before:border-purple before:z-[-1]"
            >
              <img
                alt="skills vector"
                className="z-10 max-w-[300px] "
                src={require("../assets/skills.png")}
              />
            </div>
          ) : (
            <img
              alt="skills vector"
              className="z-10 max-w-[300px] "
              src={require("../assets/skills.png")}
            />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" md:w-1/3 mt-10"
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-source-code font-semibold text-5xl">01</p>
              <p className="font-source-code font-semibold text-3xl mt-3">non-stop learning</p>
            </div>
            <div className="w-1/2  md:w-3/4 bg-purple absolute right-0 top-0 z-[-1]">
              <br />
            </div>
          </div>
          <p className="mt-5">
            Technology never stops improving, that's why those who works in tech can never stop learning too.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" md:w-1/3 mt-10"
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-source-code font-semibold text-5xl">02</p>
              <p className="font-source-code font-semibold text-3xl mt-3">communicative</p>
            </div>
            <div className="w-1/2  md:w-3/4 bg-pink-two absolute right-0 top-0 z-[-1]">
              <br />
            </div>
          </div>
          <p className="mt-5">
            No matter your profession, communication is always a need in every industry.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" md:w-1/3 mt-10"
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-source-code font-semibold text-5xl">03</p>
              <p className="font-source-code font-semibold text-3xl mt-3">open-minded</p>
            </div>
            <div className="w-1/2  md:w-3/4 bg-blue absolute right-0 top-0 z-[-1]">
              <br />
            </div>
          </div>
          <p className="mt-5">
            When you work for people you've got to accept new ideas from clients or teammates and be able to work on them.
          </p>
        </motion.div>
      </div>

    </section>
  )
}

export default Skills