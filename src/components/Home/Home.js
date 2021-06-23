import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Curriculum from '../Curriculum/Curriculum';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';
import './Home.scss';
import MyPicture from '../../assets/images/my-picture.png';

class Home extends React.Component
{
  componentDidMount()
  {
    document.title = 'Ivan Lo Greco - Software Developer'
  }

  render()
  {
    return (
      <div>
        <header id="about" className="masthead">
          <Container className="h-100">
            <Row className="justify-content-center about-container">
              <Col lg="10 text-white">
                <Row>
                  <Col sm="12" md="4" className="text-center"><Image src={MyPicture} width="85%" height="auto" className="shadow-lg my-picture" roundedCircle /></Col>
                  <Col sm="12" md="6" className="pt-5 mobile-my-name">
                    <h1 className="font-weight-bold">Ivan Lo Greco</h1>
                    <h2>Software Developer</h2>
                  </Col>
                </Row>
                <hr className="divider my-4" />
                <p>
                  <i>My name is Ivan Lo Greco and I live in Italy. IT was a passion since I was a child, I started with offline 
                    videogames around 2005 and over time I started being more interested in how to make programs and how computer 
                    works rather than just playing. I worked around 2 years in the industry as a Analyst Developer (more details later) 
                    and I'm studying Computer Science at the University of Pisa (Italy).
                  </i>
                </p>
              </Col>
            </Row>
          </Container>
        </header>
        <Curriculum></Curriculum>
        <Projects></Projects>
        <Contacts></Contacts>
      </div>
    );
  }
}

export default Home;