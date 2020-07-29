import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Lottie from './Lottie'
import 'aos/dist/aos.css'
import Aos from "aos";

export default function Section2() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  return (
    <div style={{margin: '120px 0'}}>
      <Container>
        <Row>
          <Col lg={6} data-aos="fade-right">
            <h1 className="mt-5" style={{fontSize: '4.0rem'}}>Workflow that just works</h1>
            <p className="mt-3" style={{fontSize: '1.2rem'}}>Collaboration should be simple, straightforward, and effective. With Pitch, it is. Discuss current activities, manage tasks, and stay productive as a team. Create on any device, online or offline, and get great work done faster.</p>
          </Col>

          <Col lg={6}>
            <Lottie />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
