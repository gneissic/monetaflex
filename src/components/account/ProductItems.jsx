
const ProductItems = (props) => {
  return (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs ">
        {/* <img src="product-image.jpg" alt="Product Image" className="w-full rounded-t-lg"> */}
        <img src={props.img} alt=""  />
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{props.product}</h2>
            <p className="text-gray-700 mb-2">{props.description}</p>
            <p className="text-red-500 text-xl font-semibold">${props.price}</p>
        </div>
    </div>
  )
}

export default ProductItems