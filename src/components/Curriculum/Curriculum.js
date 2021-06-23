import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './Curriculum.scss';

class Curriculum extends React.Component
{
  constructor()
  {
    super();
    
    this.state = {
      languages: [
        { name: 'C#/.NET', level: 5, description: 'Very Good' },
        { name: 'Typescript', level: 5, description: 'Very Good' },
        { name: 'Java', level: 4, description: 'Good' },
        { name: 'Javascript', level: 4, description: 'Good' },
        { name: 'Dart', level: 4, description: 'Good' },
        { name: 'C++', level: 3, description: 'Decent (Work in Progress)' },
        { name: 'C', level: 2, description: 'Basic-Decent' },
        { name: 'HTML5', level: 5, description: 'Very Good' },
        { name: 'CSS3/SCSS', level: 5, description: 'Very Good' }
      ],
      frameworks: [
        { name: 'Android Studio', level: 4, description: 'Good' },
        { name: 'JSP MVC/API', level: 4, description: 'Good' },
        { name: 'ASP.NET Api', level: 3, description: 'Decent' },
        { name: 'Node JS', level: 4, description: 'Good' },
        { name: 'Angular 5+', level: 4, description: 'Good' },
        { name: 'React JS', level: 2, description: 'Basic-Decent (Work In Progress)' },
        { name: 'Bootstrap 4', level: 5, description: 'Very Good' },
        { name: 'JQuery', level: 5, description: 'Very Good' },
        { name: 'Material Design', level: 3, description: 'Decent' },
        { name: 'Jasper Studio', level: 4, description: 'Good' },
        { name: 'JSTL', level: 3, description: 'Decent' },
        { name: 'Flutter', level: 2, description: 'Basic-Decent' },
        { name: 'Dialogflow', level: 4, description: 'Good' },
        { name: 'OpenGL', level: 3, description: 'Decent' },
        { name: 'Unity 3D', level: 4, description: 'Good' },
        { name: 'Unreal Engine 4', level: 3, description: 'Good (Work In Progress)' }
      ],
      others: [
        { name: 'Git', level: 5, description: 'Very Good' },
        { name: 'SVN', level: 4, description: 'Good' },
        { name: 'OOP', level: 5, description: 'Very Good' },
        { name: 'Google Cloud', level: 3, description: 'Decent' },
        { name: 'Design Pattern', level: 4, description: 'Good' },
        { name: 'Tomcat/JBoss', level: 3, description: 'Decent' },
        { name: 'JHipster', level: 5, description: 'Very Good' },
      ]
    };
  }

  render()
  {
    return (
      <div id="curriculum" className="curriculum-container">
        <Container>
            <Row>
              <Col><h2 className="font-weight-bold">Curriculum</h2></Col>
            </Row>
            <Row className="py-3 curriculum-introduction">
              <Col>
                  <p>I have been programming since around 2012/2013, I started with C# and made my long way through other languages,
                  learning about <i><u>design patterns</u></i>, <i><u>optimization</u></i>, <i><u>data structure</u></i> and various framework/technology. My knowledge goes from classic <b>Standalone Applications</b>, <b>Mobile Applications</b> and <b>Web Development</b> to <b>Backend Development</b>, <b>Chat-Bot Development</b> and <b>Game Development</b>.</p>
                  <p>Other than doing some gigs on <u>Fiverr</u> as a freelance I started my first job experience in an IT company called <b><a target="_blank" rel="noopener noreferrer" href="https://www.arancia-ict.it/">Arancia ICT (Palermo, Italy)</a></b> and I got hired as an Analyst Developer.
                  In that period of time I worked with different organized teams in multiple project, at first maintaining and adding new functionalities to an older project, then moved to new projects using Angular 8 + Java Spring API [More Informations in my <i><a href="#about">Curriculum</a></i>].
                  </p>                    
              </Col>
            </Row>
            <Row>
              <Col className="col-12 pb-2"><h3>Summary</h3></Col>
              <Col md="6" className="col-12">
                <Row>
                  <Col>
                    <Card className="curriculum-card shadow-lg">
                      <Card.Header>Languages</Card.Header>
                      <Card.Body className="text-center">
                        {this.state.languages.map((language, index) => 
                          <Row key={index}>
                            <Col className="col-4">{language.name}</Col>
                            <Col className="col-2">{language.level}/5</Col>
                            <Col className="col-4"><Badge pill className={'badge-level-' + language.level}>{language.description}</Badge></Col>
                            <Col className="col-12"><hr className="divider my-2" /></Col>
                          </Row>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Card className="curriculum-card shadow-lg">
                      <Card.Header>Other</Card.Header>
                      <Card.Body className="text-center">
                        {this.state.others.map((other, index) => 
                          <Row key={index}>
                            <Col className="col-4">{other.name}</Col>
                            <Col className="col-2">{other.level}/5</Col>
                            <Col className="col-4"><Badge pill className={'badge-level-' + other.level}>{other.description}</Badge></Col>
                            <Col className="col-12"><hr className="divider my-2" /></Col>
                          </Row>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md="6" className="col-12 mobile-mt-3">
                <Card className="curriculum-card shadow-lg h-100">
                  <Card.Header>Frameworks</Card.Header>
                  <Card.Body className="text-center">
                    {this.state.frameworks.map((framework, index) => 
                        <Row key={index}>
                          <Col className="col-4">{framework.name}</Col>
                          <Col className="col-2">{framework.level}/5</Col>
                          <Col className="col-4"><Badge pill className={'badge-level-' + framework.level}>{framework.description}</Badge></Col>
                          <Col className="col-12"><hr className="divider my-2" /></Col>
                        </Row>
                      )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Curriculum;
