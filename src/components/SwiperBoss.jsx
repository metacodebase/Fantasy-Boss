import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import './SwiperBoss.css';

const SwiperBoss = () => {
  // Mock data for slider
  const sliderImages = [
    { id: 1, image: "/assets/images/likeaboss2.jpg", alt: "Like a Boss 1" },
    { id: 2, image: "/assets/images/likeaboss2.jpg", alt: "Like a Boss 2" },
    { id: 3, image: "/assets/images/likeaboss2.jpg", alt: "Like a Boss 3" },

  ]

  return (
    <div>
       <Swiper 
        pagination={true} 
        modules={[Pagination]} 
        className="mySwiper custom-swiper"
        spaceBetween={16}
        slidesPerView={1}
    
       >
        {sliderImages.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.alt} className="w-full h-full rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperBoss
