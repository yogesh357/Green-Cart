import React from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from './ProductCard'


function BestSeller() {

    const { products } = useAppContext()

    return (
        <div className='mt-16'>
            <h1 className='text-2xl md:text-3xl font-bold'>Best Seller </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
                {products.filter((product) => product.inStock).slice(0, 5).map((product, index) => (
                    <ProductCard key={index} product={product} />

                ))}

            </div>
        </div>
    )
}

export default BestSeller
