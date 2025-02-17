import React, { Fragment, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Pagination, EffectFade, Autoplay } from 'swiper/modules';

const data = [
  {
    title: "Boating on ohio lake",
    hashtag: ["boating","ohio"],
    thumb: "images/stories/thumb-1.jpg",
    image: "images/stories/1.jpg",
  },
  {
    title: "Wonderful evening with myself",
    hashtag: ["evening"],
    thumb: "images/stories/thumb-2.jpg",
    image: "images/stories/2.jpg",
  },
  {
    title: "Autumn holidays in australia",
    hashtag: ["Autumn","australia"],
    thumb: "images/stories/thumb-3.jpg",
    image: "images/stories/3.jpg",
  },
  {
    title: "Ptotoshoot with Evelyn Martin",
    hashtag: ["Ptotoshoot"],
    thumb: "images/stories/thumb-4.jpg",
    image: "images/stories/4.jpg",
  },
  {
    title: "My beautifull sister",
    hashtag: ["sister","goal"],
    thumb: "images/stories/thumb-5.jpg",
    image: "images/stories/5.jpg",
  },
  {
    title: "Frances Arnold's awesome Ptotoshoot",
    hashtag: ["ptotoshoot"],
    thumb: "images/stories/thumb-6.jpg",
    image: "images/stories/6.jpg",
  },
]

const ProfileStories = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="tyn-profile-stories">
        <Row>
            <Col lg="4" xl="3">
                <div className="d-flex justify-content-between pb-3">
                    <h5 className="mb-0">Stories</h5>
                    <a className="link" href="#">Expires Soon</a>
                </div>
            </Col>
        </Row>
        <Row className="flex-lg-row-reverse g-gs">
            <Col lg="8" xl="9">
                <Swiper 
                  speed={400}
                  spaceBetween={0}
                  slidesPerView={1}
                  effect="fade"
                  grabCursor={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    waitForTransition:false
                  }}
                  loop={true}
                  thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                  modules={[FreeMode, Navigation, Thumbs, Pagination, EffectFade, Autoplay]}
                className="tyn-stories-slider">
                  {data.map((item,index)=> {
                    return(
                      <SwiperSlide key={index}>
                          <div className="tyn-stories-item">
                              <img src={item.image} className="tyn-image" alt=""/>
                              <div className="tyn-stories-content">
                                  <h5 className="tyn-stories-title text-white">{item.title}</h5>
                                  <p className="text-white">
                                    {item.hashtag.map((hitem,index) => 
                                      <Fragment key={index}>
                                        #{hitem}
                                        {item.hashtag.length > index + 1 ? ', ': ''}
                                      </Fragment>
                                    )}
                                  </p>
                              </div>
                          </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
            </Col>

            <Col lg="4" xl="3">
                <Swiper 
                  onSwiper={setThumbsSwiper}
                  slidesPerView={2}
                  freeMode={true}
                  cssMode={true}
                  spaceBetween={0}
                  grid={{
                    rows: Math.round(data.length/2),
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                className="tyn-stories-thumb">
                  {data.map((item,index)=> {
                    return(
                      <SwiperSlide key={index}>
                        <img src={item.thumb} className="tyn-image" alt="" />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
            </Col>

        </Row>
    </div>
  )
}

export default ProfileStories