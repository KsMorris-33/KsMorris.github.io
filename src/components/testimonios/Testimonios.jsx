import React from 'react'
import './testimonios.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti dignissimos hic dolorum accusantium ratione blanditiis quaerat placeat ex quidem nesciunt corporis odio asperiores, inventore, qui et ea, aut quod., ',
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti dignissimos hic dolorum accusantium ratione blanditiis quaerat placeat ex quidem nesciunt corporis odio asperiores, inventore, qui et ea, aut quod., ',
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti dignissimos hic dolorum accusantium ratione blanditiis quaerat placeat ex quidem nesciunt corporis odio asperiores, inventore, qui et ea, aut quod., ',
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti dignissimos hic dolorum accusantium ratione blanditiis quaerat placeat ex quidem nesciunt corporis odio asperiores, inventore, qui et ea, aut quod., ',
  }
]


const Testimonios = () => {
  return (
    <section id='testimonios'>
      <h5> Referencias </h5>
      <h2>Personales y laborales</h2>

      <Swiper className="container testimonios__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}> 
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonio">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
        
       
      </Swiper>

      
    </section>
  )
}

export default Testimonios