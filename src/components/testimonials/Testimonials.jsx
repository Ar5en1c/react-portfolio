import React from 'react'
import './testimonials.css'

import {FaUserTie} from 'react-icons/fa'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    pos: 'Director, Digital @Pactiv',
    name: 'Marcus Clark',
    review: 'During my internship program Kuldeep developed comprehensive reporting to assist with data governance objectives, report concepts for our business units and data cleansing for data predictive modeling. I believe that Kuldeep displays a massive amount of drive and potential. I look forward to seeing how his career unfolds in the next coming years.'
  },
  {
    pos: 'Co Founder and CEO @Humourbaba',
    name: 'Shivang Slathia',
    review: 'Dear Kuldeep, I want to take the time to thank you for the fantastic job you have been doing for our company lately. We achieved our goals without a second of downtime which sets an example for the company about how a project should be handled for maximum benefits. You did a really good job by training your team members/interns in your field which made huge differences, and I am certain that they feel rewarded and recognized under your guidance. I am sure that you will continue to do these kinds of things in the future as well.'
  },
  {
    pos: '',
    name: 'Pactiv Evergreen Inc.',
    review: 'We are lucky to have you on the Pactiv Evergreen team Kuldeep Singh! Good luck with your graduation and future endeavors.'
  },
  {
    pos: "Data Scientist @Pactiv",
    name: 'Sakshi Raghuvanshi',
    review: ' It was really nice working with you as well! Stay in touch :)'
  },
  
];


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({pos, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <FaUserTie/>
              </div>
              <h5 className='client__name'>{name}<br/><small>{pos}</small></h5>
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