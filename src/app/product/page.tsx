import Container from "@/components/Container";
import { getSingleProduct, getTrendingProduct } from "@/helpers";
import ProductData from "@/components/ProductData";
import type { Products } from "../../../type";
import SingleProducts from "@/components/SingleProducts";

interface Props{
    searchParams:{[key:string]:string | string[] | undefined}
}

const productPage = async({searchParams}:Props) => {
 const _idString = searchParams?._id;
 const _id = Number(_idString)
 const product = getSingleProduct(_id);
 const data = await getTrendingProduct()
 
  return (
    <div>
        <Container>
            <SingleProducts product={product}/>
            <div>
                <p className="text-xl py-1 font-semibold ">Trending Products</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    
            {
                data?.map((item:Products)=>(
                    <ProductData key={item._id} item={item}/>
                ))
            }
                </div>
            </div>
        </Container>
    </div>
  )
}

export default productPage
