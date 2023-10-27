import { getProduct } from '@/actions/get-product'
import { getProducts } from '@/actions/get-products'
import { Container } from '@/components/container'
import { Gallery } from '@/components/gallery'
import { Info } from '@/components/info'
import { ProductsList } from '@/components/product-list'

interface ProductPageProps {
  params: { productId: string }
}
export const revalidate = 0

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId)

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id
  })

  if (product.images.length === 0) {
    product.images = [
      { id: '1', url: '' },
      { id: '2', url: '/vercel.svg' }
    ]
  }

  console.log({ product, suggestedProducts })
  return (
    <div className='bg-white'>
      <Container>
        <p>{product.name}</p>
        <p>categ: {product?.category?.id}</p>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            <Gallery images={product.images} />
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              <Info data={product} />
            </div>
          </div>
          <hr className='mt-10' />
          <ProductsList title='Related items' items={suggestedProducts} />
        </div>
        product page
      </Container>
    </div>
  )
}
