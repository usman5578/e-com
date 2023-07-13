import BASE_PATH_FORAPI from '@/Components/shared/BasePath'
import Hero from '@/Components/views/Hero'
import ProductCarousel from '@/Components/views/ProductCarousel'
import ProductType from '@/Components/views/ProductType'


// async function fetchAllProductsData(){
//   let res = await fetch(`${BASE_PATH_FORAPI}/api/products`)

//   if(!res.ok){
//     throw new Error("Failed to fetch")
//   }
//   return res.json();
// }

export default function Home() {
  // let {response} = await fetchAllProductsData();
  // console.log(response)
  return (
    <>
    <Hero/>
    <ProductType/>
    <ProductCarousel/>
    </>
  )
}
