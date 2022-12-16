import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NetflixKids from '../NetflixKids.png'
import NetflixLaptop from '../NetflixLaptop.png'
import Movies from '../movies.webp'
import StrangerThings from '../NetflixStrangerthings.jpg'
import TedLasso from '../TedLasso.webp'
import MorningShow from '../MorningShow.webp'
import See from '../See.webp'
import BeerRun from '../BeerRun.webp'
import BadSisters from '../BadSisters.webp'
import Wolfboy from '../Wolfboy.webp'
import Severance from '../Severance.webp'
import JonStewart from '../JonStewart.webp'
import HelloJack from '../HelloJack.webp'
import DaysMemorial from '../DaysMemorial.webp'
import Grizzy from '../Grizzy.jpg'
import SpongeBob from '../SpongeBob.jpg'
import KungFu from '../KungfuPanda.jpg'
import SonicBoom from '../SonicBoom.jpg'
import PeppaPig from '../PeppaPig.jpg'
import Bridgerton from '../Bridgerton.jpg'
import You from '../You.jpg'
import DarkDesire from '../DarkDesire.jpg'
import ToyBoy from '../ToyBoy.jpg'
import Gumiho from '../Gumiho.jpg'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './IntroStyles.css'
const Intro = () => {
    return (
        <div className='intro'>

<div className='hello'>
            <h1 className='unlimited'>Unlimited Movies,<br /> TV Shows and MORE.</h1>
            <p className='watch'>Watch anywhere. Cancel at any time.</p>
            <div className='placeholder1'>
            <center><input className='text' type="text" placeholder="Enter your E-Mail" /><Link to='/' className='btn1'>Get Started</Link></center> 
            </div>
         
        </div>
        <Container className='secondintro'>
            <Row>
                <Col lg={6} sm={12}>
                    <h1 className='enjoy'>Great Entertainment</h1>
                    <p className='enjoy2'>Enjoy a large collection of movies, series in 4k HDR anytime, anywhere</p>

                </Col>
                <Col lg={6} sm={12}>
                    <img className='img' src={Movies}></img>
                </Col>
            </Row>

        </Container>
        <Container className='thirdintro'>
            <Row>
                <Col lg={6} sm={12}>
                    <img className='img1' src={StrangerThings}></img>
                </Col>
                <Col lg={6} sm={12}>
                    <h1 className='enjoy'>Download and Go</h1>
                    <p className='enjoy2'>Watch offline when you download to your iPhone, iPad, Tablet, or Android device.</p>
                </Col>
            </Row>
        </Container>
        
        <Container className='fourthintro'>
            <Row>
                <Col lg={6} sm={12}>
                    <h1 className='enjoy'>Watch Anywhere</h1>
                    <p className='enjoy2'>Enjoy from the web or with the Lionmoviemania app on your phone, tablet, or Smart TVs — on up to 3 devices at once.</p>
                </Col>
                <Col lg={6} sm={12}>
                   <img className='img2' src={NetflixLaptop}></img>
                </Col>
            </Row>
        </Container>
        <Container className='fifthintro'>
            <Row>
                <Col lg={6} sm={12}>
                   <img className='img' src={NetflixKids}></img>
                </Col>
                <Col lg={6} sm={12}>
                    <h1 className='enjoy'>Create Profiles For Children.</h1>
                    <p className='enjoy2'>Send children on adventures with their favourite characters in a space made just for them – free with your membership.</p>

                </Col>
            </Row>
        </Container>
        <div className='list1'>
                <h3 className='most'>Most popular</h3>
                <Row>
                <Col sm={6} lg={2} xs={6}>
                <img className='img3' src={TedLasso}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={MorningShow}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={See}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={BeerRun}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={BadSisters}></img>
                </Col>
            </Row>
            
        </div>
        <div className='list1'>
        <h3 className='most'>Latest shows</h3>
                <Row>
                <Col sm={6} lg={2} xs={6}>
                <img className='img3' src={DaysMemorial}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={HelloJack}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={Severance}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={Wolfboy}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={JonStewart}></img>
                </Col>
            </Row>
            
        </div>
        <div className='list1'>
        <h3 className='most'>Kiddie's shows</h3>
                <Row>
                <Col sm={6} lg={2} xs={6}>
                <img className='img3' src={Grizzy}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={PeppaPig}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={SpongeBob}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={SonicBoom}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={KungFu}></img>
                </Col>
            </Row>
        </div>
        <div className='list1'>
        <h3 className='most'>Romance shows</h3>
                <Row>
                <Col sm={6} lg={2} xs={6}>
                <img className='img3' src={Bridgerton}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={DarkDesire}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={You}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={Gumiho}></img>
                </Col>
                <Col sm={6} lg={2} xs={6}>
                <img className='img4' src={ToyBoy}></img>
                </Col>
            </Row>
        </div>
        <div className='footer'>
           <center> <h1 className='lion'>LIONMOVIEMANIA</h1> 
           <Link to='/' className='btn3'>Join Now</Link></center>
        </div>
        <div>
            <center>
            <Row  className='plans'>
                <Col className='subscription1' lg={4} sm={12}>
                   <h1 className='monthly'> $1.2 monthly</h1><br />
                    <p className='parafeatures'>Download your favourite movies, series and animes in 480p Watch offline anywhere,anytime</p>
                </Col>
                
                <Col className='subscription1' lg={4} sm={12}>
                    
                </Col>
            </Row>
            </center>
        </div>
        </div>
    )
}


export default Intro