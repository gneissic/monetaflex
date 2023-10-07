import {   motion } from "framer-motion"
import Banner from "../components/Nav/Banner"


const HomePage = () => {
  
  return (
    <motion.div exit={{x:"-100vw", transition:{delay:1.5, duration:1.5, ease:"easeInOut"}}}>
      <Banner/>
    </motion.div>
  )
}

export default HomePage