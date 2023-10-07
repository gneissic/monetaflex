import { json, redirect} from "react-router-dom"

export async function action({request}) {
    const data =  await request.formData()
    const formData = {
        productTitle: data.get("product-title"),
        phoneNumber: data.get("phone-number"),
             productPrice: data.get("product-price"),
            productDescription: data.get("product-description"),
            productImage: data.get("product-image"),
    }
    const response = await fetch("https://hostinf-demo-default-rtdb.firebaseio.com/store-form.json", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    
    if (!response.ok) {
     throw json
    }   
        return redirect("/account/store")
  }
  
  export async function loader() {
    const response = await fetch(
      "https://hostinf-demo-default-rtdb.firebaseio.com/store-form.json"
    );
    if (!response.ok) {
      throw json
    } else {
      const data = await response.json();
      return data
      
      // const responseData = [];
      // for (const key in data) {
      //   responseData.push({
      //     phoneNumber: data[key].phoneNumber,
      //     productTitle: data[key].productTitle,
      //     productPrice: data[key].productPrice,
      //     productDescription: data[key].productDescription,
      //     productImage: data[key].productImage
      //   });
      // }
      // return responseData;
    }
  }
  
