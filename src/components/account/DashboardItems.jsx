import { Fragment } from "react"

const DashboardItems = (props) => {
  return (
    <Fragment>
<div className="bg-white w-[88%] m-auto py-5 rounded-md h-[10rem]">
<h1 className="ml-2 font-semibold">{props.title}</h1>
    <p className=" pt-5 text-center font-pops font-semibold text-black/80">{props.products}</p>
</div>
    </Fragment>
  )
}

export default DashboardItems