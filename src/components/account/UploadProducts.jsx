import { Fragment } from "react";
import { Form } from "react-router-dom";
import { BsCircle } from "react-icons/bs";

const UploadProducts = () => {
  return (
    <Fragment>
      <div className="bg-black/80 inset-0 fixed z-10"></div>
      <div className=" pt-5  bg-white relative z-10 -top-[5rem] w-[95%] left-3 rounded-md h-[35rem]">
        <p className="text-xl font-serif py-3 pl-4">Upload to Moneta Store</p>
        <Form>
          <div className="grid gap-5">
            <div className="flex ml-2 w-[95%] border rounded-md border-gray-300">
              <div className="h-[3rem] flex items-center justify-center text-white w-[3rem] bg-gray-300">
                <BsCircle className="text-black font-bold" />
              </div>
              <input
                className="pl-3 w-[80%] py-[6px] outline-none"
                type="text"
                placeholder="Product Title"
              />
            </div>
            <div className="flex ml-2 w-[95%] border rounded-md border-gray-300">
              <div className="h-[3rem] flex items-center justify-center text-white w-[3rem] bg-gray-300">
                <BsCircle className="text-black font-bold"/>
              </div>
              <input
                className="pl-3 w-[80%] py-[6px] outline-none"
                type="number"
                placeholder="Phone number"
              />
            </div>
            <div className="flex ml-2 w-[95%] border rounded-md border-gray-300">
              <div className="h-[3rem] flex items-center justify-center text-white w-[3rem] bg-gray-300">
                <BsCircle className="text-black font-bold"/>
              </div>
              <input
                className="pl-3 w-[80%] py-[6px] outline-none"
                type="text"
                placeholder="Price"
              />
            </div>
            <div className="flex ml-2 w-[95%] border rounded-md border-gray-300">
              <div className="h-[3rem] flex items-center justify-center text-white w-[3rem] bg-gray-300">
              <BsCircle className="text-black font-bold"/>
              </div>
              <input
                className="pl-3 w-[80%] py-[6px] outline-none"
                type="text"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="flex justify-end px-5 mt-[4rem]">

          <button className="bg-primary py-2 px-3  font-serif font-semibold text-gray-200">Upload</button>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default UploadProducts;
