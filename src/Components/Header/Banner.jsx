import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , EffectFlip } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const Banner = () => {
    return (
        <div className='mx-6 my-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y , EffectFlip]}
                spaceBetween={50}
                slidesPerView={1}
                effect="flip"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/9cCGCrC/photorealistic-wedding-venue-with-intricate-decor-ornaments-23-2151481468.jpg
                    " alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/db5dK5Q/decorated-banquet-hall-with-flowers-8353-10058.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/dkpyPWr/photorealistic-wedding-venue-with-intricate-decor-ornaments-23-2151481465.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide >
                    <img src="https://i.ibb.co/cCDvr8B/elegant-wedding-reception-area-160672-6143.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Banner;