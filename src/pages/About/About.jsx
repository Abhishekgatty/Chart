// import React from 'react'
// import Layout from '../../layout/main';
// import { Accordion } from 'react-bootstrap'
// import { Section } from '../../layout/global';
// import './About.css';

// const About = () => {
//   return (

//     <Layout title="Faq" content="tyn-content-page" footer={true} >
//       <div className="tyn-main ">
//         <Section  >
//           <Section.Head center>
//             <h2 style={{ color: "#9333ea" }}>About Us</h2>

//           </Section.Head>
//           <div className="ms-3 mt-3 text-start">
//             <Accordion defaultActiveKey="0" className="d-flex flex-column gap-2">
//               <Accordion.Item eventKey="0" className="rounded">
//                 <Accordion.Body className="tyn-text-block pt-0 mt-3">
//                   <p>You can ask the chatbot any question related to our products or services. Some common questions include.</p>
//                   <ol>
//                     <li>How do I place an order?</li>
//                     <li>What is your return policy?</li>
//                     <li>How do I track my shipment?</li>
//                     <li>Can I change my order after it has been placed?</li>
//                   </ol>
//                 </Accordion.Body>
//               </Accordion.Item>
//             </Accordion>

//           </div>
//         </Section>
//       </div>
//     </Layout>



//   )
// }

// export default About


import React from 'react';
import { Accordion } from 'react-bootstrap';
import Layout from '../../layout/main';
import { Section } from '../../layout/global';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import

const FaqPage = () => {
  return (
    <Layout title="Faq" content="tyn-content-page" footer={true}>
      <div className="tyn-main">
        <Section>
          <Section.Head center>
            <h2 style={{ color: "#9333ea" }}>About Us</h2>
          </Section.Head>

          <div className="container-fluid p-0 ms-2">
            <div className="row ">
              {/* This is where the width is controlled by the grid system */}
              <div className="col-12 col-md-8 col-lg-6">
                <div className="ms-0 mt-3 text-start">
                  <Accordion defaultActiveKey="0" className="d-flex flex-column gap-2">
                    <Accordion.Item eventKey="0" className="rounded">
                      <Accordion.Body className="tyn-text-block pt-0 mt-2">
                        <p>
                          PMHS Tech Solutions is a leading technology company specializing in creating innovative digital solutions that empower businesses to thrive in the modern digital landscape.
                        </p>

                        <p>
                          With a team of experienced developers, designers, and strategists, we're dedicated to delivering exceptional results that exceed expectations and drive business growth.
                        </p>
                        <p>
                          Prestige Medical Health Sciences (PMHS), established in 2016, is a premier institution in Bangalore dedicated to providing top-notch education in allied health sciences. Affiliated with Rajiv Gandhi University of Health Sciences.
                        </p>
                        <div className="container mt-4">
                          <div className="row mb-3">
                            <div className="col-12 col-md-6">
                              <div className="p-3 bg-light text-center rounded-3">
                                <h3>1+</h3>
                                <p>year of experience</p>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="p-3 bg-light text-center rounded-3">
                                <h3>5+</h3>
                                <p>Projects Completed</p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12 col-md-6">
                              <div className="p-3 bg-light text-center rounded-3">
                                <h3>5+</h3>
                                <p> Team Members</p>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="p-3 bg-light text-center rounded-3">
                              <h3>3+</h3>
                               <p>Countries Served</p>

                              </div>
                            </div>
                          </div>
                        </div>


                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default FaqPage;
