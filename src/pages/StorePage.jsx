
import {  useLoaderData } from "react-router-dom";
import Store from "../components/account/Store";


const StorePage = (props) => {
   const data =  useLoaderData()
  
  return (
    <div>
    
      <Store
      data={data}
        storeModal={props.storeModal}
        showStoreModal={props.showStoreModal}
        hideStoreModal={props.hideStoreModal}
      />
    </div>
  );
};

export default StorePage;

// export async function action(request) {
//   const data = await request.FormData();
//   const formData = {
//     productTitle: data.get("product-title"),
//     phoneNumber: data.get("phone-number"),
//     productPrice: data.get("product-price"),
//     productDescription: data.get("product-description"),
//   };
//   const response = await fetch(
//     "https://hostinf-demo-default-rtdb.firebaseio.com/formData.json",
//     {method: 'POST', 
//     headers:{"Content-Type" : "applcation/json"},
//     body:JSON.stringify(formData)
//     }
//   )
//   if (!response.ok) {
//     throw json
//   }
// }
// export async function action({request}) {
//     const data =  await request.formData()
//     const form = {
//         productTitle: data.get("product-title"),
//         phoneNumber: data.get("phone-number"),
//              productPrice: data.get("product-price"),
//             productDescription: data.get("product-description"),
//     }
//     const response = await fetch("https://air-bnb-e0098-default-rtdb.firebaseio.com/userData/form.json", {
//       method: "POST",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(form)
//     })
    
//     if (!response.ok) {
//      throw json({message: "something went wrong, data not processed"}, {status:500})
//     }
    
//   }
