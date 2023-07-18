'use Client'

import React, { FC} from 'react'
import { ProductType } from '../utils/ProductDataTypes'
import imageUrlBuilder from "@sanity/image-url";
import { client } from '../../../sanity/lib/client';
import Image from 'next/image';


const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetailsCard:FC<{data:ProductType}> = ({data}) => {

  
  return (
    <div>

{/* left  */}
        <div>
            {/* left  */}
            <div>
                {data.image.map((items:any)=>(
                    <div className='w-28 space-y-4'>
                        <Image width={1000} height={1000} alt={items.alt} src={urlFor(items).width(1000).height(1000).url()} />
                    </div>
                ))}
            </div>
            {/* Right */}
            <div>
            </div>
        </div>
        {/* Right  */}
        <div>

        </div>



    </div>
  )
}

export default ProductDetailsCard