
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { BsCheck } from "react-icons/bs";

const EarnCheck = props => {
  return (
    <Fragment>
        <div className='flex ml-2 items-center gap-2 '>
            <div className='border border-title font-semibold  text-primary bg-title lg:text-lg'>
            <BsCheck/>
            </div>
            <p>{props.check}</p>
        </div>
    </Fragment>
  )
}

EarnCheck.propTypes = {
    check: PropTypes.string.isRequired
}

export default EarnCheck