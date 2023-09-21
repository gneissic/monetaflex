import { Fragment } from 'react'
import { BsArrowRight } from "react-icons/bs";

import PropTypes from 'prop-types'

const MonetaFlexBar = ({title}) => {
  return (
    <Fragment>
        <div className= 'mb-3 bg-title flex items-center justify-between w-[96%] m-auto px-4 h-[3rem] rounded-md'>
            <div className='flex items-center gap-4'>
                <div className='h-3 w-3 border rounded-full bg-primary'></div>
                <p className='text-lg font-nun'>{title}</p>
            </div>
            <BsArrowRight className='font-bold text-black'/>
        </div>
    </Fragment>
  )
}

MonetaFlexBar.propTypes = {
  title: PropTypes.string.isRequired
}
export default MonetaFlexBar
