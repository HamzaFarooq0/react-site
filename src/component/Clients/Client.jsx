import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClientCard from "./ClientCard";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import 'aos/dist/aos.css'
import Aos from 'aos'

export default function Client() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <Container data-aos='fade-up'>
          <Row>
              <h1 style={{ fontSize:"4.7rem", margin:'70px auto 70px auto'}}>
                What other's are Saying
                <hr width='80px' color='red'/><hr width='20px' color='red'/>
              </h1>
          </Row>
        <Row>
          <Col sm={6} lg={4} className="p-2">
            <ClientCard
              description="I make presentations all day long, and I could not imagine doing it without Pitch. It’s the best of Slides, Keynote, and PowerPoint all in one — plus things that none of these have!"
              title="Linux Torvalds"
              subtitle="Founder of Linux"
              avatar={avatar1}
            />
          </Col>

          <Col sm={6} lg={4} className="p-2">
            <ClientCard
              description="Collaboratively building and sharing beautiful presentations has always been a nightmare. With Pitch, it’s a dream. If you work in a modern team, this product is indispensable."
              title="Mark Zuckerberg"
              subtitle="Founder of Facebook"
              avatar={avatar2}
            />
          </Col>

          <Col sm={6} lg={4} className="p-2">
            <ClientCard
              description="Pitch makes all of my presentations look like I have a full-time design team supporting me.When someone is not a good fit, it’s better to let go sooner rather than later."
              title="Adi Tatarko"
              subtitle="CEO and co-founder of Houzz"
              avatar={avatar3}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
