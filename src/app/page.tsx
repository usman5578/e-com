import BASE_PATH_FORAPI from '@/Components/shared/BasePath'
import Hero from '@/Components/views/Hero'
import ProductCarousel from '@/Components/views/ProductCarousel'
import ProductType from '@/Components/views/ProductType'


async function fetchAllProductsData(){
//   let res = await fetch(`${BASE_PATH_FORAPI}/api/products`)

//   if(!res.ok){
//     throw new Error("Failed to fetch")
//   }
//   return res.json();
return {response:"Hi"} 
}

export default async function Home() {
  let {response} = await fetchAllProductsData();
 
  return (
    <>
    <Hero/>
    <ProductType/>
    <ProductCarousel/>
    </>
  )
}
