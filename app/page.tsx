import { getBillboard } from '@/actions/get-billboard'
import { getProducts } from '@/actions/get-products'
import { Billboard } from '@/components/billboard'
import { Container } from '@/components/container'
import { ProductsList } from '@/components/product-list'

export const revalidate = 0 //prevent cache

export default async function Home() {
  const billboard = await getBillboard('8ba45f3d-c93e-4b92-8d5d-c125f5267149')
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px- lg:px-8'>
          <ProductsList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  )
}
