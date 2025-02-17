import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
const ProfileGallery = ({user}) => {
  return (
    <Row className="g-3">
        <Gallery>
            {user.gallery?.map((item,index) => 
                <Col xxl="2" xl="3" lg="4" xs="6" key={index}>
                    <Item
                        original={item.src}
                        thumbnail={item.src}
                        width={item.width}
                        height={item.height}
                        cropped
                    >
                        {({ ref, open }) => (
                        <a href="#" 
                            onClick={(e) => {
                                e.preventDefault()
                                open(e)
                            }} ref={ref} className="tyn-thumb">
                            <img src={item.thumb} className="tyn-image" alt="" /> 
                        </a>
                        )}
                    </Item>
                </Col>
            )}
        </Gallery>
    </Row>
  )
}

export default ProfileGallery