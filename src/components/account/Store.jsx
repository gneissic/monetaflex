import { Fragment } from "react"
import UploadProducts from "./UploadProducts"

const Store = () => {
  return (
    <Fragment>
    <UploadProducts/>
        <div className="bg-gray-100 h-[90vh]">
        <div className="justify-between flex px-4 items-center">
        <p className="font-pops text-black/80 font-semibold">Moneta Store</p>
        <div><button className="text-md font-pops font-semibold text-white bg-green-500 py-2 px-3 rounded-md">Upload Product</button></div>
    </div>
    <div className="text-green-500 font-semibold font-pops mt-5 py-3 text-center bg-green-200"><p>No Product yet</p></div>
    
        </div>
   </Fragment>
    
  )
}

export default Store