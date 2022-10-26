import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'

import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'

import imgProductNext from '@/assets/images/icon-next.svg'
import imgProductPrev from '@/assets/images/icon-previous.svg'
import { useState } from 'react'

const ARRAY_IGMS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]

export default () => {

    const [index, setIndex] = useState(0);

    const handleClickNext = () => (index === ARRAY_IGMS.length - 1) ? setIndex(0) : setIndex(index + 1);
    const handleClickPrev = () => index === 0 ? setIndex(ARRAY_IGMS.length - 1) : setIndex(index - 1);

    return (
        <section className="grid md:grid-cols-4 md:gap-5">
            <div className="col-span-4 relative">
                <img src={ARRAY_IGMS[index]} className="aspect-[16/13] w-100" alt="Imagen Producto" />
                <div className='md:hidden absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4'>
                    <button
                        className=' bg-white rounded-full w-10 h-10 grid place-items-center'
                        onClick={handleClickPrev}
                    ><img src={imgProductPrev} alt="" /></button>
                    <button
                        className=' bg-white rounded-full w-10 h-10 grid place-items-center'
                        onClick={handleClickNext}
                    ><img src={imgProductNext} alt="" /></button>
                </div>
            </div>
            <img src={imgProductSmall1}
                className="rounded-md hidden md:block" alt="" />
            <img src={imgProductSmall2}
                className="rounded-md hidden md:block" alt="" />
            <img src={imgProductSmall3}
                className="rounded-md hidden md:block" alt="" />
            <img src={imgProductSmall4}
                className="rounded-md hidden md:block" alt="" />
        </section>
    );
}
