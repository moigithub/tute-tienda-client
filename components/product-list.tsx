import { Product } from '@/types'
import { NoResults } from './no-results'
import { Key } from 'react'
import { ProductCard } from './product-cart'

interface ProductListProps {
  items: Product[]
  title: string
}

export const ProductsList = ({ items, title }: ProductListProps) => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {items.map(item => (
          <ProductCard key={item.id as Key} data={item} />
        ))}
      </div>
    </div>
  )
}
