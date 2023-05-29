import React from 'react'
import './testimonials.css'
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
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo temporibus deserunt dicta nostrum ipsam officia ad accusantium placeat nemo, impedit ducimus sit modi distinctio alias totam quibusdam laboriosam nisi eius non autem ut? Suscipit laudantium officiis eos incidunt, harum dolore.'
  },
  {
    avatar: AVTR2,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ante ac erat facilisis cursus. Quisque dignissim consectetur massa, vitae congue sapien malesuada vel. Morbi at aliquet turpis. Fusce pellentesque libero nec neque congue, et finibus lacus eleifend. Nam feugiat bibendum.'
  },
  {
    avatar: AVTR3,
    name: 'Alice Smith',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet varius nisi, a commodo sem ullamcorper ac. Integer eu leo nec nulla lobortis viverra. Aliquam luctus mauris id scelerisque eleifend. Suspendisse non neque non elit laoreet euismod at id dui. Curabitur non fringilla lacus.'
  },
  {
    avatar: AVTR4,
    name: 'Michael Johnson',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat nisi et pellentesque pellentesque. Nulla id tortor et lacus iaculis rhoncus. Integer sed nunc libero. Suspendisse ac est quis dui vestibulum venenatis eu vitae turpis. In eleifend metus vitae ligula accumsan,  bibendum.'
  }
];


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials