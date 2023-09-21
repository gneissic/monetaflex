
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <div className='pt-[2rem] bg-gradient-2'>
            <button className="font-pops bg-primary py-3 px-5 text-white font-semibold rounded-md  ml-5 text-lg">{props.reg}</button>
        </div>
  )
}

Button.propTypes = {
    reg: PropTypes.string.isRequired
}

export default Button