import { useEffect, useState } from "react"
import ProductCard from "../components/ProductsCard";
import { axiosInstance } from "../config/axiosInstance";

const ProductPages = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async ()=>{
    try {
      const res = await axiosInstance.get("/products");
      console.log("Product api response", res);
      setProducts(res.data);
      setIsLoading(false)
    } catch (error) {
      console.log("error", error)
    }
  }

   useEffect(()=>{ 
      getProducts()

     }, [])

     if(isLoading){
      return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

      <p className="animate-pulse text-lg font-semibold text-gray-600">
        Products Are Loading...
      </p>
    </div>
  );
     }

  return (
   <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  })}
</div>
  )
}

export default ProductPages