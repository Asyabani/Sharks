import React,{useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'carousel-react-rcdev'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay,Scrollbar } from "swiper";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">

      {/* Navbar */}
      <Container >
      <Navbar className='px-3 rounded-bottom shadow-sm' bg="light" expand="lg">
        <Navbar.Brand href="#home" >
        <img
          src="../assets/Logo.png"
          className="d-inline-block align-top"
          alt="Sharks Logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#benefit">Benefit</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <Image className='px-3 d-none d-md-flex' src="../assets/line-vertikal.png"  />
          <Button  variant="warning">Call Us Now</Button>
        </Navbar.Collapse>
    </Navbar>
      </Container>

    {/* Content 1 */}
    <Container className='my-4 pb-5'>
      <Row className=' d-flex align-items-center flex-column-reverse flex-md-row'>
        <Col xs={12} md={12} lg={6} data-aos="fade-right" className='text-start d-block d-md-none d-lg-block'>
          <h2 className='fw-bolder'>Maximise Visibility through Customer <span className='text-warning'>Reviews.</span></h2>
          <p className='my-4'>Unlock the Power of Product Reviews and Drive Your Sales to New Heights</p>
          <span className='d-none d-md-block'>
          <Button className='px-3 fw-semibold' variant="warning me-3 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold px-3' variant="outline-secondary">Schedule a meeting</Button>
          </span>
          <span className='d-block d-md-none '>
          <Button className='px-3 fw-semibold w-100 mb-2' variant="warning me-3 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold px-3 w-100' variant="outline-secondary">Schedule a meeting</Button>
          </span>
        </Col>
        <Col xs={12} md={12} lg={6}data-aos="fade-right" className='text-center d-none d-md-block d-lg-none'>
          <h2 className='fw-bolder'>Maximise Visibility through Customer <span className='text-warning'>Reviews.</span></h2>
          <p className='my-4'>Unlock the Power of Product Reviews and Drive Your Sales to New Heights</p>
          <span className='d-none d-md-block my-3'>
          <Button className='px-3 fw-semibold' variant="warning me-3 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold px-3' variant="outline-secondary">Schedule a meeting</Button>
          </span>
          <span className='d-block d-md-none '>
          <Button className='px-3 fw-semibold w-100 mb-2' variant="warning me-3 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold px-3 w-100' variant="outline-secondary">Schedule a meeting</Button>
          </span>
        </Col>

        <Col  xs={12} md={12} lg={4} className='position-relative d-none d-md-block' >
          <Image className='cover-testi' src="../assets/80 NEW REVIEWS (11) 1.svg" data-aos="fade-left" data-aos-delay="200" />
          <Image className='testi-1 position-absolute' src="../assets/testi-1.png"data-aos="fade-left" data-aos-delay="400" />
          <Image className='testi-2 position-absolute' src="../assets/testi-2.png"data-aos="fade-left" data-aos-delay="600" />
          <Image className='testi-3 position-absolute' src="../assets/testi-3.png"data-aos="fade-left" data-aos-delay="800" />
          <Image className='testi-4 position-absolute' src="../assets/testi-4.png"data-aos="fade-left" data-aos-delay="1000" />
        </Col>
        <Col  xs={10} md={4} className='position-relative d-block d-md-none '>
          <Image className='w-100' src="../assets/3d-mobile.svg"  />
        </Col>
      </Row>
    </Container>
    <Container fluid className='bg-dark py-2'>
      <Row className='p-4 d-flex justify-content-center '>
        <Col xs={6} md={3}>
          <Image  src="../assets/Logo Container.png"  />
        </Col>
        <Col xs={6} md={3}>
          <Image  src="../assets/Logo Container (1).png"  />
        </Col>
        <Col xs={6} md={3}>
          <Image  src="../assets/Logo Container (2).png"  />
        </Col>
        <Col xs={6} md={3}>
          <Image  src="../assets/Logo Container (3).png"  />
        </Col>
      </Row>
    </Container>

    {/* Content 3 */}
    <Container className='my-5' >
      <Row className=' d-flex align-items-center gy-3'>
        <Col xs={12} md={12} className='text-center my-4' data-aos="fade-down" data-aos-delay="800">
          <h2 className='fw-bolder'>Maximize Your Success: Explore the Benefits</h2>
        </Col>
        <Col xs={12} md={6} lg={8} data-aos="fade-up" data-aos-delay="800">
          <Image  className='custom-img w-100' src="../assets/Frame 80.png" />
        </Col>
        <Col xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="800">
          <Image className='custom-img w-100' src="../assets/Frame 79.png"  />
        </Col>
        <Col xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="800">
          <Image className='custom-img w-100' src="../assets/Frame 78.png"  />
        </Col>
        <Col xs={12} md={6} lg={8} data-aos="fade-up" data-aos-delay="800">
          <Image className='custom-img w-100' src="../assets/Frame 81.png"  />
        </Col>
        <Col xs={12} md={6} lg={8} data-aos="fade-up" data-aos-delay="800">
          <Image  className='custom-img w-100' src="../assets/Frame 82.png" />
        </Col>
        <Col xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="800">
          <Image className='custom-img w-100' src="../assets/Frame 77.png"  />
        </Col>
      </Row>
    </Container>
   
    {/* Content 4 */}
    <Container className='my-5 pt-5' >
      <Row className='d-flex align-items-center gy-3'>
        <Col xs={12} md={12} className='text-center my-md-4 ' data-aos="fade-up" data-aos-delay="800">
          <h2 className='fw-bolder'>How does the system work?</h2>
        </Col>
        <Col md={12} className='d-none d-md-none d-lg-flex 'data-aos="fade-up" data-aos-delay="1000">
          <Image  className='w-100  ' src="../assets/Frame 15.png" />
        </Col>

        <Col md={12} className='d-none d-md-block d-lg-none '>
          <Image  className='w-100   ' src="../assets/_Feature Item (6).png" />
        </Col>
        <Col md={12} className='d-none d-md-block d-lg-none '>
          <Image  className='   me-4' style={{width:'94%'}} src="../assets/_Feature Item (9).png" />
        </Col>
        <Col md={12} className='d-none d-md-block d-lg-none '>
          <Image  className='w-100  ' src="../assets/_Feature Item (8).png" />
        </Col>

        <Col md={12} className='d-block d-md-none'>
          <Image  className='w-100  ' src="../assets/_Feature Item (3).png" />
        </Col>
        <Col md={12} className='d-block d-md-none'>
          <Image  className='w-100  ' src="../assets/_Feature Item (4).png" />
        </Col>
        <Col md={12} className='d-block d-md-none'>
          <Image  className='w-100  ' src="../assets/_Feature Item (5).png" />
        </Col>
      </Row>
    </Container>

    {/* Content 5 */}
    <Container className='my-5' >
      <Row className='d-flex align-items-center'>
        <Col xs={12} lg={6} className='text-start'data-aos="fade-left" data-aos-delay="800">
          <h2 className='fw-bold'>Win-Win for Brands and Reviewers</h2>
          <p>Empower your brand with Sharks Marketing. Generate positive reviews, enhance product visibility, and drive sales growth on E-commerce Platforms. Reach your target audience effortlessly through targeted reviewers, manage reputation effectively, and foster customer loyalty. </p>
          <p> Reviewers benefit by receiving free or exclusive discounted high-quality products in exchange for their honest and unbiased reviews.</p>
        </Col>
        <Col xs={12} lg={6} data-aos="fade-right" data-aos-delay="800">
          <Image className='w-100' src="../assets/group 2 1.png"  />
        </Col>
      </Row>
    </Container>

    {/* Content 6 */}
    <Container className='my-5'>
      <Row className='d-flex align-items-center d-none d-md-flex'>
        <Col xs={12} md={5} className='text-start mx-auto'data-aos="fade-right" data-aos-delay="800">
          <h2 className='fw-bolder'>Empowering Brands with Reviews</h2>
          <p>Unveiling Our Remarkable Achievements</p>
          <Button className='px-3 fw-semibold m-1' variant="warning me-3 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold px-3 m-1' variant="outline-secondary">Schedule a meeting</Button>
        </Col>
        <Col xs={12} md={5} className=' mx-auto' data-aos="fade-left" data-aos-delay="800">
          <Image className='w-100' src="../assets/Content.png"  />
        </Col>
      </Row>
      <Row className='d-flex justify-content-center gy-5 d-block d-md-none'>
        <Col xs={12} md={5} className='text-center mx-auto'>
          <h2 className='fw-bolder'>Numbers Speak Louder</h2>
          <p>Our proven track record is not just a claim but delivered with evidence</p>
         
        </Col>
        <Col xs={12} md={5} >
          <Image className='w-100 mt-1' src="../assets/_Metric item.png"  />
          <Image className='w-100 mt-1' src="../assets/_Metric item (1).png"  />
          <Image className='w-100 mt-1' src="../assets/_Metric item (2).png"  />
          <Image className='w-100 mt-1' src="../assets/_Metric item (3).png"  />
        </Col>
        <Col xs={12} md={5} className="d-none d-md-flex" >
        <Button className='px-3 fw-semibold w-100 mb-2' variant="warning me-3 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold px-3 w-100' variant="outline-secondary">Leave a message</Button>
        </Col>
        <Col xs={12} md={5} className="d-block d-md-none" >
        <Button className='p-3 fw-semibold w-50 ' variant="warning m-2 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold p-3 w-50' variant="outline-secondary">Leave a message</Button>
        </Col>
      </Row>
    </Container>

    {/* Content 7 */}
    <Container fluid className='my-5 bg-dark py-5' >
      <Row className='d-none d-md-none d-lg-flex align-items-center gy-3'>
        <Col xs={12} md={12} className='text-center my-4 text-light pt-5'>
          <h2>Showcasing Reviews from Successful Product Launches</h2>
          <p>Discover the Success Stories from Our Previous Product Launches</p>
        </Col>
        <Col xs={12} md={12}>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
          </Swiper>
        </Col>
        <Col xs={12} md={12}>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
          </Swiper>
        </Col>
        <Col xs={12} md={12}>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
          </Swiper>
        </Col>
      </Row>
      
      <Row className='d-none d-md-flex d-lg-none align-items-center gy-3'>
        <Col xs={12} md={12} className='text-center my-4 text-light pt-5'>
          <h2>Showcasing Reviews from Successful Product Launches</h2>
          <p>Discover the Success Stories from Our Previous Product Launches</p>
        </Col>
        <Col xs={12} md={12}>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={10}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
          </Swiper>
        </Col>
        <Col xs={12} md={12}>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={10}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
          </Swiper>
        </Col>
        <Col xs={12} md={12}>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={10}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
          </Swiper>
        </Col>
      </Row>

      <Row className='d-flex d-md-none align-items-center gy-3'>
        <Col xs={12} md={12} className='text-center my-4 text-light pt-5' data-aos="fade-up" data-aos-delay="800">
          <h2>Not Just Another Review</h2>
          <p>Our Customer Reviews Actually Convert Leads Into Customers.</p>
        </Col>
        <Col xs={12} md={12}>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
            <SwiperSlide><img src='../assets/Link.png'  /></SwiperSlide>
          </Swiper>
        </Col>
        </Row>
    </Container>

    {/* Content 8 */}
    <Container className='my-5' id="benefit">
      <Row className='d-flex align-items-center'>
        <Col xs={12} md={12} lg={6} className='text-start mx-auto' data-aos="fade-right" data-aos-delay="800">
          <h2>Who Can Benefit?</h2>
          <p>Our service is designed to deliver maximum value for businesses with specific criteria. If your product is priced above ₹1000, have decent branding, and has a substantial inventory, we have the perfect solution for you.</p>
            <p>While we support a diverse range of product categories, please note that our service is not suitable for businesses in the pet care, supplements, and skincare sectors.</p>
            <p>Additionally, we prioritize unique and non-generic products, avoiding short-lived trendy items that may not align with our long-term value-driven approach. </p>
        </Col>
        <Col xs={12} md={12} lg={6} className=' mx-auto' data-aos="fade-left" data-aos-delay="1000">
          <Image className='w-100' src="../assets/3d.png"  />
        </Col>
      </Row>
    </Container>
   
    {/* Content 9 */}
    <Container className='my-5  '>
      <Row className='d-flex align-items-center flex-column-reverse flex-lg-row'>
  
      <Col xs={12} md={12} lg={6} className=' mx-auto' data-aos="fade-right" data-aos-delay="1000">
          <Image className='w-100' src="../assets/3d(2).png"  />
      </Col>
      <Col xs={12} md={12} lg={6} className='text-start mx-auto' data-aos="fade-left" data-aos-delay="1500">
        <h2>Choose a Partner, not an agency</h2>
        <p>By choosing us, you can have peace of mind knowing that your business is in safe hands. With Sharks Marketing, you can trust that we have the expertise and systems in place to deliver exceptional results while keeping your business compliant and risk-free. Unlike other agencies, we prioritize your long-term success and take proactive measures to ensure that your review generation efforts remain within the boundaries set by the platforms. Our clients have entrusted us with their seller accounts, and we are proud to say that they have never received any policy violation warnings or faced unnecessary risks</p>
      </Col>
     
      </Row>
    </Container>

    {/* Content 9 */}
    <Container className='my-5 '>
      <Row className='d-flex align-items-center'>
      <Col className=' mx-auto'>
          <Image className='w-100' src="../assets/Quote Section.png"  />
      </Col>
      </Row>
    </Container>

     {/* Content 10 */}
     <Container fluid className='my-5' id="faq" >
     <Row className=' d-none d-md-flex justify-content-between   ' >
        <Col xs={6} md={6} className='position-relative' data-aos="fade-down"data-aos-easing="linear"  data-aos-duration="1500" >
          <Image className=' position-absolute start-0 left-question'  src="../assets/3l.png"  />
        </Col>
        <Col xs={6} md={6} className="position-relative" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <Image className=' position-absolute end-0' src="../assets/3r.png"  />
        </Col>
      </Row>
      <Row className=' d-flex align-items-center gy-3'>
        <Col xs={12} md={12} className='text-center my-4'>
          <h2 className='fw-bolder'>Frequently Asked Questions</h2>
          <p>This is where all the answers to your questions are.</p>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
            <Alert className='border-warning rounded-4 ' variant='light' dismissible>
            <Alert.Heading className='text-warning p-3'>What happens to products after the Campaign?</Alert.Heading>
            <p className='p-3'>
            After the campaign, the products remain with the shoppers who have purchased them. As part of the agreement, shoppers agree to provide a review in exchange for a discount/rebate on the product.
            </p>
          </Alert>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>What are the process steps?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>How long does it take to post a review?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>How much does it cost to run a campaign on Sharks Marketing? Will you charge any commission for orders?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>How many shoppers are active in your Community, Who are they?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>Which marketplaces do you support? I’m located outside India can I still create a campaign?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>My products are expensive. Do I have to Give Products Free of Charge?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>Are There any Restrictions On product Categories to run campaigns?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>Will my brand have control over the review content generated through the campaigns?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>What kind of reporting and analytics will I receive regarding the review campaigns?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>Does Sharks Marketing offer any additional services or support for brand building on Amazon?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>How does Sharks Marketing handle negative reviews or competitor attacks?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>What happens if a shopper provides a fake order number, cancels, or returns their order after the Campaign?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
        <Col xs={12} md={10} lg={8} className=' mx-auto text-start'>
          <Accordion >
          <Accordion.Item  className='rounded-4' eventKey="0">
            <Accordion.Header ><span className='fw-semibold p-3'>Can you put negative reviews on my competitor's Products?</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Col>
      </Row>
    </Container>
   
     {/* Content 11 */}
     <Container className='my-5 py-md-5 ' >
     {/* <Row className=' d-flex justify-content-between ' >
        <Col xs={6} md={6} >
          <Image className='start-0'  src="../assets/Left Side CTA.png"  />
        </Col>
        <Col xs={6} md={6}>
          <Image className='end-0' src="../assets/Right Side CTA.png"  />
        </Col>
      </Row> */}
      <Row className='d-none d-lg-flex align-items-center gy-3 ' >
        <Col xs={12} md={12} className='text-center my-4  '>
          <h2 className='fs-bolder'>Skyrocket Your Brand to New Heights</h2>
          <p>Harness the power of reviews to dominate your market</p>
          <Button className='px-3 fw-semibold' variant="warning me-3 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold px-3' variant="outline-secondary">Schedule a meeting</Button>
        </Col>
      </Row>
      <Row className='d-flex d-lg-none align-items-center  ' >
        <Col xs={12} md={12} className='text-center '>
          <Card className='rounded-4'>
          <Card.Body className='py-5'>
          <h2 className='fs-bolder'>Launch Winning Products From The Get-Go</h2>
          <p>Rank Your Products Higher on Amazon by Securing High-Quality Customer Reviews</p>
          <Button className='p-3 fw-semibold w-50' variant="warning m-2 ">Call Us Now <Image src="../assets/Icon.png" style={{height:8}}   /></Button>
          <Button className='fw-semibold p-3 w-50' variant="outline-secondary">Leave a message</Button>
          </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
      
    {/* Content 7 */}
    <Container fluid className='mt-5 bg-dark d-none d-lg-block bottom-0  ' >
      <Row className='text-start text-light p-4 gy-4'>
        <Col xs={12}>
          <Image src="../assets/Logo(2).png" />
        </Col>
        <Col xs={12} className='d-flex gap-3 ms-4'>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
        </Col>
        <Col xs={12} className=' ms-4'>
          <p className='mb-0'>hello@sharksmarketing.com</p>
          <p className='mt-0'>+91 86996 99866</p>
        </Col>
        <Col xs={12} className=' ms-4'>
          <p className='mb-0'>Sharks Marketing ®</p>
          <p className='mt-0'>2023 All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
    <Container  className=' d-block d-lg-none ' >
      <Row className='text-center p-4 gy-4'>
        <Col xs={12}>
          <Image src="../assets/Sharks-foot.svg" />
        </Col>
        <Col xs={12} className='d-flex justify-content-center gap-3'>
          <p className='fw-bold' >About Us</p>
          <p className='fw-bold'>Privacy Policy</p>
        </Col>
        <Col xs={12} className=''>
          <p className='mb-0'>Sharks Marketing ® 2023 All Rights Reserved</p>
        </Col>
      </Row>
    </Container>




    </div>


  );
}

export default App;
