import React from 'react'
import first from '../../assets/img/leec.jpg'
import second from '../../assets/img/dav.jpeg'
import third from '../../assets/img/kar.jpg'
const About = () => {
  return (
    <div className='ay'>
      <div>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
        <h2 style={{textAlign: 'center'}}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={first} alt="Jane" style={{"width": '100%', "height": "400px"}} />
              <div className="container">
                <h2>Lee Child</h2>
                <p className="title">Author</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>lee@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={second} alt="Mike" style={{"width": '100%', "height": "400px"}} />
              <div className="container">
                <h2>David Baldacci</h2>
                <p className="title">Author</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>david@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={third} alt="John" style={{"width": '100%', "height": "400px"}} />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Author</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
</div>
  )
}

export default About