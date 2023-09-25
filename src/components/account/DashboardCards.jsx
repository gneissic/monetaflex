import { Fragment } from "react"


const DashboardCards = (props) => {
  return (
    <Fragment>
      
      <div className="w-[90%] bg-white rounded-md pb-2">
        <div className="font-pops text-black/80 grid place-items-center mt-4 gap-2">
          <h1>{props.title}</h1>
          <p className="font-pops font-bold tracking-wider">{props.num}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default DashboardCards