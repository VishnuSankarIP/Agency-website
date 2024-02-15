import React from 'react'
import { Card } from 'react-bootstrap'


function LandingPage() {
  return (
    <>
      <div className="header ">
        <div className="row ">
          <div className="col-lg-5  ">
            <div className="container mt-5">
            <h1 className='mt-5 ms-5 ' style={{ fontSize: '50px' }}>Lessons and insights <br /><span style={{ color: '#4CAF4F' }}>from 8 years</span></h1>
            <p className='mt-3 ms-5 ' >Where to grow your business as a photographer: site or social media?</p>
            <button className='ms-5' style={{ backgroundColor: '#4CAF4F', width: '100px', color: 'white', height: '50px', border: 'none' }}>Register</button>
            </div>
            
          </div>

          <div className="col-lg-6 text-center">
            <img className='mt-5 ms-lg-5 justify-content-center' src='https://www.chinaticket.online/assets/Illustration-a5f0019d.png' style={{ height: '400px' }} ></img>
          </div>

        </div>
      </div>
      <hr />
      <div className="learnMore">
        <div className="row">
          <div className="col-lg-4">
            <img src='https://vdc.cloud/_next/image?url=%2Fimages%2Fcloud-technology.png&w=3840&q=75' style={{ height: '400px', width: '100%' }}></img>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7  mt-5 ">
            <div className="container mt-5">
            <h2 className='ms-5'>The unseen of spending three years at Pixelgrade</h2>
            <p className='ms-5 mt-4 me-5 ' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className='ms-5 mt-3' style={{ backgroundColor: '#4CAF4F', width: '100px', color: 'white', height: '50px', border: 'none' }}>Learn More</button>
            </div>
            
          </div>
        </div>
      </div>
      <div className=" feature container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className='ms-4 mt-5'>Helping a local<br /> <span style={{ color: '#4CAF4F' }}>business reinvent itself</span></h2>
            <p className='ms-4 mt-4'>We reached here with our hard work and dedication</p>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <Card style={{ width: '18rem' }}>

                  <Card.Body>
                    <Card.Title>2,245,341</Card.Title>
                    <Card.Text>
                      Members
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-6">
                <Card style={{ width: '18rem' }}>

                  <Card.Body>
                    <Card.Title>46,328</Card.Title>
                    <Card.Text>
                    Clubs
                    </Card.Text>
                   </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <Card style={{ width: '18rem' }}>

                  <Card.Body>
                    <Card.Title>828,867</Card.Title>
                    <Card.Text>
                    Event Bookings
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-6">
                <Card style={{ width: '18rem' }}>

                  <Card.Body>
                    <Card.Title>1,926,436</Card.Title>
                    <Card.Text>
                    Payments
                    </Card.Text>
                   </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature2 container">
        <div className="row">
          <div className="col-lg-4">
            <img src='https://encashmobile.in/assests/img/sign-in.png' height={'400px'}></img>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <h2 className='mt-5 ms-5'>How to design your site footer like we did</h2>
            <p className='ms-5 me-5' style={{ textAlign: 'justify' }}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className='ms-5 mt-3' style={{ backgroundColor: '#4CAF4F', width: '100px', color: 'white', height: '50px', border: 'none' }}>Learn More</button>
          </div>
        </div>

      </div>
      <div className="feature3 container">
        <div className="row">
          <div className="col-lg-4">
          
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7 ">
          
            <p className='ms-5 me-5' style={{ textAlign: 'justify' }}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna..</p>
            <h5 className='ms-5' style={{color:'#4CAF4F',textAlign: 'justify' }}>Tim Smith</h5>
            <p className='ms-5' style={{fontSize:'10px'}}>British Dragon Boat Racing Association</p>
            <button className='ms-5 mt-3' style={{ color:'#4CAF4F', width: '150px', height: '50px', border: 'none' }}>Meet all customers<i class="fa-solid fa-arrow-right ms-2  "></i></button>
          </div>
        </div>

      </div>
      <div className="demo text-center mt-5 ">
        <h1 className='ms-2 me-2' style={{fontFamily:'fantasy'}}>Pellentesque suscipit fringilla libero eu.</h1>
        <button className='ms-5 mt-3' style={{ backgroundColor: '#4CAF4F', width: '100px', color: 'white', height: '50px', border: 'none' }}>Get a demo</button>
      </div>

    </>
  )
}

export default LandingPage