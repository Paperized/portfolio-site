import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contacts.scss';

class Contacts extends React.Component
{
    render()
    {
        return (
            <div id="contacts" className="contacts-container py-3">
                <Container className="my-5">
                    <Row>
                        <Col><h2 className="font-weight-bold">Contacts</h2></Col>
                    </Row>
                    <Row className="py-3">
                        <Col><p>Here are some contacts that might be usefull:</p></Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="email-icon mr-3"></div>
                            <a href="mailto:ivanlogreco99@outlook.it">ivanlogreco99@outlook.it</a>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <div className="linkedin-icon mr-3"></div>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ivan-lo-greco-557b38147/">LinkedIn Profile</a>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <div className="github-icon mr-3"></div>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/paperized">GitHub Profile</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contacts;