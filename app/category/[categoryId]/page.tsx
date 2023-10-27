import { getCategory } from '@/actions/get-category'
import { getColors } from '@/actions/get-colors'
import { getProducts } from '@/actions/get-products'
import { getSizes } from '@/actions/get-sizes'
import { Billboard } from '@/components/billboard'
import { Container } from '@/components/container'
import { Filter } from '@/components/filter'
import { NoResults } from '@/components/no-results'
import { ProductCard } from '@/components/product-cart'
import { MobileFilter } from './_components/mobile-filter'

export const revalidate = 0

interface CategoryPageProps {
  params: { categoryId: string }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  console.log('servr param', params)
  console.log('server category', category)

  return (
    <div className='bg-white'>
      <Container>
        <Billboard data={category.billboard} />

        <div className='px-4 sm:px-6 lg:px-8 pb-24'>
          <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
            {/* mobile filters */}
            <MobileFilter sizes={sizes} colors={colors} />
            <div className='hidden lg:block'>
              <Filter valueKey='sizeId' name='Sizes' data={sizes} />
              <Filter valueKey='colorId' name='Colors' data={colors} />
            </div>
            <div className='mt-6 lg:col-span-4 lg:mt-0'>
              {products.length === 0 && <NoResults />}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {products.map(product => (
                  <ProductCard key={product.id as string} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
