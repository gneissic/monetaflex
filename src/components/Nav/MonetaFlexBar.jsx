import { motion, useTransform, useScroll } from 'framer-motion';
import { Fragment } from 'react'
import { BsArrowRight } from "react-icons/bs";


const MonetaFlexBar = ({title}) => {
  const {scrollY} = useScroll()
  const transformLists = useTransform(scrollY, [350, 370, 400, 410, 420, 550, 700], [-1000, -800, -600, -400, -200, -100, 0])
  const opacityLists = useTransform(scrollY, [350, 550,], [0, 1])
  return (
    <Fragment>
        <motion.div
        style={{translateX:transformLists, opacity:opacityLists, transitionDuration:5, transitionTimingFunction:"ease-in"}}
        className= 'mb-3 bg-title flex items-center justify-between w-[96%] m-auto px-4 h-[3rem] rounded-md'>
            <div className='flex items-center gap-4'>
                <div className='h-3 w-3 border rounded-full bg-primary'></div>
                <p className='text-lg font-nun'>{title}</p>
            </div>
            <BsArrowRight className='font-bold text-black'/>
        </motion.div>
    </Fragment>
  )
}

export default MonetaFlexBar
