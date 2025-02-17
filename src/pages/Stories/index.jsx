import React, {Fragment, useState} from 'react';
import Layout from '../../layout/main'
import { PlusLg } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import SimpleBar from 'simplebar-react';

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
    hashtag: ["Photoshoot"],
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

function Stories() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout title="Stories" content="tyn-stories tyn-stories-page has-aside-sticky">
      <div className="tyn-aside tyn-aside-sticky">
        <div className="tyn-aside-head">
          <div className="tyn-aside-head-text">
              <h3 className="tyn-aside-title tyn-title">Stories</h3>
              <span className="tyn-subtext">{data.length} Unseen stories</span>
          </div>
          <div className="tyn-aside-head-tools">
              <ul className="tyn-list-inline gap gap-3">
                  <li><Button size="md" variant="light"  className="btn-icon btn-pill"><PlusLg /></Button></li>
              </ul>
          </div>
        </div>
        <SimpleBar className="tyn-aside-body">
          <div className="tyn-aside-row pt-0">
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
          </div>
        </SimpleBar>
      </div>
      <div className="tyn-content-inner d-flex align-items-center">
        <div className="tyn-stories-wrap">
            <Swiper 
              speed={400}
              spaceBetween={0}
              slidesPerView={1}
              effect={"fade"}
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
        </div>
      </div>
    </Layout>
  )
}

export default Stories