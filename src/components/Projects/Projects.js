import React from 'react';
import { Container, Card, Row, Col, Collapse, Button, Badge, Carousel, Image } from 'react-bootstrap';
import InstantImage1 from '../../assets/images/projects/instant-1.jpg';
import JobMatchImage1 from '../../assets/images/projects/jobmatch-1.PNG';
import JobMatchImage2 from '../../assets/images/projects/jobmatch-2.PNG';
import JobMatchImage3 from '../../assets/images/projects/jobmatch-3.PNG';
import JobMatchImage4 from '../../assets/images/projects/jobmatch-4.PNG';
import './Projects.scss';

class Projects extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            projects: [
                {
                    name: 'Instant',
                    category: 'Web Development',
                    type: 'Arancia ICT',
                    languages: ['Angular 8', 'Java Spring Boot', 'JPA (Hibernate)', 'Mapstruct', 'Thymeleaf', 'Liquibase', 'Jasper Studio', 'Lombok', 'MySQL', 'Git', 'Maven/NPM', 'Tomcat', 'JHipster', 'Bootstrap 4', 'HTML', 'SCSS'],
                    images: [InstantImage1],
                    short_description: 'Website (and app) that allow users to take pictures of point of interests and via artificial intelligence retrieve information about them also based on the user age.',
                    description: <p><i>Instant is a platform that allow users to retrieve informations about a point of interest in real time by using a specialized AI backend (Made by another company).
                                During the registration the user can select the age and retrieved informations will depend also on it's age for example giving a less detailed and easier description for young childs 
                                and giving a more detailed one to adults.
                                This project was a collaboration between 3 parties: Arancia ICT (backend + website), an University (Application) and another company (AI Backend).
                                </i></p>,
                    link: 'http://www.instantinnovation.it/',
                    open: false
                },
                { 
                    name: 'JobMatch 2020',
                    category: 'Web Development',
                    type: 'Arancia ICT',
                    languages: ['Angular 7', 'Java Spring Boot', 'JPA (Hibernate)', 'Mapstruct', 'Thymeleaf', 'Liquibase', 'Jasper Studio', 'Lombok', 'MySQL', 'Git', 'Maven/NPM', 'Tomcat', 'JHipster', 'Bootstrap 4', 'HTML', 'SCSS'],
                    images: [JobMatchImage1, JobMatchImage2, JobMatchImage3, JobMatchImage4],
                    short_description: 'Similar to LinkedIn aimed for people from Sicily (Italy) and Malta (UK) to allow people in these areas to find jobs and connect with companies.',
                    description: <p><i>JobMatch 2020 intends to fight the effects of the loss of competitiveness of the area 
                        (flight of human capital, weakening of the productive fabric and increase of low value added activities) by stemming the causes that determined them. 
                        This will be done through the creation of a "Cross-border Consultancy Center" to support cross-border mobility and employment and strengthen the entrepreneurial 
                        system which will benefit from the different tools and services (information, coaching, tutoring, internships, etc.) offered by the project, to allow them to increase their competitiveness.
                                </i></p>,
                    link: 'http://www.jobmatch2020.eu/accedi-jobmatch2020/',
                    open: false
                },
                {
                    name: 'SRA',
                    category: 'Web Development',
                    type: 'Arancia ICT',
                    languages: ['Angular 8', 'Java Spring Boot', 'JPA (Hibernate)', 'Thymeleaf', 'Liquibase', 'Jasper Studio', 'Lombok', 'MySQL', 'Git', 'Maven/NPM', 'Tomcat', 'JHipster', 'Bootstrap 4', 'HTML', 'CSS'],
                    images: [],
                    short_description: 'Information system created for car removal provided in collaboration between AMAT and the municipality of Palermo.',
                    description: <p><i>SRA is a managment responsive website that allows workers to keep track of each car added to the system and add
                                work shifts eventually exporing a PDF with all informations or sending emails to workers. 
                                </i></p>,
                    link: null,
                    open: false
                },
                {
                    name: 'Pharmaceutical Application',
                    category: 'Web Development',
                    type: 'Arancia ICT',
                    languages: [],
                    images: [],
                    short_description: 'Pharmaceutical Application to manage the management, sale and prescription of medicines.',
                    description: <p><i>This Project was already up and running when I entered it, here I refactored and updated a specific decent-size system.
                                </i></p>,
                    link: null,
                    open: false
                },
                {
                    name: 'InstantLoad',
                    category: 'Web Development',
                    type: 'Personal',
                    languages: ['Angular 9', 'Node JS (Typescript) Rest', 'Instagram API', 'Bootstrap 4', 'HTML', 'SCSS'],
                    images: [],
                    short_description: 'Website to download and view Instagrams Medias in a friendly way.',
                    description: <p><i>It is a website that aims to give a better user experience to the user similar to the original platform btu with the additional feature to download Images, Videos and other possible medias including stories.<br/>
                                    It was designed to work entirely (or the major of the things) server side but due to Instagram systems I moved pretty much everything client side leaving some small functionalities server-side.<br/>
                                    The API used to fetch datas are the public one from the webapp, any other funcionalities is execute on the browser.
                                    Since I needed to indicize this website and Angular doesn't provide a way to provide scrappable html I had to implement it with the help of the package Angular Universal.
                                </i></p>,
                    link: null,
                    open: false
                },
                { 
                    name: 'ChonkyNumber',
                    category: 'C++ Library',
                    type: 'Personal',
                    languages: ['C++'],
                    images: [],
                    short_description: 'Mathematical library (Integer Only) to compute operations with very big numbers that would overflow with classic variable types.',
                    description: <p><i>I made this big number library to learn more about C++.<br/>
                                       The library works and has a good documentation on github.<br/>
                                       It's NOT an optimized library, the computation is very slow with operations like multiplication/pow/division/module, the main goal was to release a library to learn C++ and adding meaningful documentation.
                                </i></p>,
                    link: 'https://github.com/Paperized/ChonkyNumber',
                    open: false
                },
                {
                    name: 'Spaceship Run (WIP)',
                    category: 'Game Development (Unity3D)',
                    type: 'Personal',
                    languages: ['Unity 3D', 'C#'],
                    images: [],
                    short_description: 'Endless vertical runner, the character have to escape from an unkown planet with a vehicle and come back home.',
                    description: <p><i>Its a 3D vertical endless runner but with 2D view for Mobile, throught the game the player have to collect coins, dodge enemies or shoot them
                                and eventually a checkpoint with a boss to keep on flying (like space invader I believe). The development is currently suspended due to more important
                                projects.
                                </i></p>,
                    link: null,
                    open: false
                },
                { 
                    name: 'RTS (WIP)',
                    category: 'Game Development (UE4)',
                    type: 'Personal',
                    languages: ['Unreal Engine 4', 'C++'],
                    images: [],
                    short_description: 'Multiplayer RTS that takes inspiration from older RTS and Starcraft II to provide a unique experience.',
                    description: <p><i>3D RTS, I started this project for the sake to learn Unreal Engine 4. Things went well and as I gained more experience I opened a <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCn3i_08IaGKbgS1rEnfuZrg?view_as=subscriber">youtube channel</a>
                                dedicated to development updates and a <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/paperizedgames/">instagram channel</a> (Even though the content is almost the same). This game is still actively in development and recently switched
                                from single player sandbox to a multiplayer online game and lot of things are changing continously. 
                                </i></p>,
                    link: 'https://www.instagram.com/paperizedgames/',
                    open: false
                }
            ]
        };
    }

    toggleCollapseProject(projects, index)
    {
        let projects_copy  = [...projects];
        let project = {...projects_copy[index]};
        project.open = !project.open;
        projects_copy[index] = project;
        return projects_copy;
    }

    onCollapseProject(index)
    {
        this.setState((state) => ({
            projects: this.toggleCollapseProject(state.projects, index)
        }));
    }

    render()
    {
        return (
            <div id="projects" className="projects-container py-3">
                <Container className="my-5">
                    <h1 className="text-white">Projects</h1>
                    <Row className="mt-4">
                        {this.state.projects.map((project, index) => 
                            <Col key={index} md="6" className='mb-4 col-12'>
                                    <Card className="shadow-lg" style={{backgroundColor: 'rgba(255, 226, 212, 0.78)'}}>
                                        <Card.Header>
                                            <span className="project-name" style={{verticalAlign: 'super'}}>{project.name}</span>
                                            <div style={{display: 'inline-block'}}>
                                                <Badge variant="secondary" style={{display: 'block'}}>{project.category}</Badge>
                                                <Badge variant="secondary">{project.type}</Badge>
                                            </div>
                                            {project.link && 
                                                <a className="btn project-btn-see-more float-right" target="_blank" rel="noopener noreferrer" href={project.link}>Link</a>
                                            }
                                        </Card.Header>
                                        <Card.Body>
                                            <p>{project.short_description}</p>
                                            <Collapse in={project.open}>
                                                <div id={'collapse-project-' + index}>
                                                    {project.description}
                                                    {project.images && project.images.length > 0 &&
                                                        <Carousel className="project-carousel">
                                                            {project.images.map((image, index_image) => (
                                                                <Carousel.Item key={index_image}>
                                                                    <Image style={{border: '1px black solid'}} src={image} width="100%">

                                                                    </Image>
                                                                </Carousel.Item>
                                                            ))}
                                                        </Carousel>
                                                    }
                                                    {project.languages && project.languages.length > 0 &&
                                                        <p><i><u>Technologies used</u></i>: {project.languages.join(', ')}.</p>
                                                    }
                                                </div>
                                            </Collapse>
                                        </Card.Body>
                                        <Card.Footer className="text-muted p-0">
                                            <Button
                                                variant="outline-light"
                                                className={'project-detail-button' + (project.open ? ' project-detail-button-expanded' : '')}
                                                onClick={() => this.onCollapseProject(index)}
                                                aria-controls={'collapse-project-' + index}
                                                aria-expanded={project.open} />
                                        </Card.Footer>
                                    </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Projects;