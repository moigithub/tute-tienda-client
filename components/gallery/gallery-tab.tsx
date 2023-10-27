import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'

interface GalleryTabProps {
  image: ImageType
}
export const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
      {({ selected }) => (
        <div className='p-4'>
          <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
            {!image.url ? (
              <div className='w-full h-full bg-slate-600 border-4 border-red-500'></div>
            ) : (
              <Image fill src={image.url} alt='' className='object-cover object-center' />
            )}
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          ></span>
        </div>
      )}
    </Tab>
  )
}
