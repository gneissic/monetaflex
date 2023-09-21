import PropTypes from 'prop-types'
const FooterLinks = (props) => {
  return (
    <div>
         <div>
                <ul>
                    <li className='text-white'>{props.link}</li>
                </ul>
            </div>
    </div>
  )
}
FooterLinks.propTypes = {
    link: PropTypes.string.isRequired
  }
export default FooterLinks