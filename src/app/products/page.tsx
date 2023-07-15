import AllProductsCompo from "@/Components/AllProducts";
import BASE_PATH_FORAPI from "@/Components/shared/BasePath"


async function fetchAllProductsData(){
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
    if(!res.ok){
        throw new Error("Failed to fetch")
      }
      return res.json();
}

const Products = async () => {
    const ProductData = await fetchAllProductsData();
  return (
    <div>
        <AllProductsCompo ProductData={ProductData}/>
    </div>
  )
}

export default Products