import { Fragment } from "react";
import UploadProducts from "./UploadProducts";
import ProductItems from "./ProductItems";
import { useNavigation } from "react-router-dom";

const Store = (props) => {
  const data = props.data;
  const random = Math.random() * 100;
  const noData = data.length === 0;
  const navigation = useNavigation()
  const loading = navigation.state === "submitting"

  return (
    <Fragment>
      {props.storeModal && (
        <UploadProducts hideStoreModal={props.hideStoreModal} />
      )}
      <div className="bg-gray-100 h-inherit">
        <div className="justify-between flex px-4 items-center">
          <p className="font-pops text-black/80 font-semibold">Moneta Store</p>
          <div>
            <button
              onClick={props.showStoreModal}
              className=" outline-none text-md font-pops font-semibold text-white bg-green-500 py-2 px-3 rounded-md"
            >
              Upload Product
            </button>
          </div>
        </div>
        {loading &&  <div className="text-green-500 font-semibold font-pops mt-5 py-3 text-center bg-green-200">
            <p>Refresh Page  see your new product</p>
          </div> }
        {noData && (
          <div className="text-green-500 font-semibold font-pops mt-5 py-3 text-center bg-green-200">
            <p>No Product yet</p>
          </div>
        )}

        <div className=" grid gap-3 pl-10 mt-[2rem] py-3">
        {data.map((dat) => (
          <ProductItems
            key={random}
            product={dat.productTitle}
            price={dat.productPrice}
            img={dat.productImage}
            description={dat.ProductDescription}
          />
        ))}
        </div>
        
       
      </div>
    </Fragment>
  );
};

export default Store;
