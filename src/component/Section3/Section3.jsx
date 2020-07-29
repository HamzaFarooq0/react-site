import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "./LottieS3";
import 'aos/dist/aos.css'
import Aos from "aos";

export default function Section3() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ margin: "120px 0" }}>
      <Container>
        <Row>
          <Col data-aos="fade-right" lg={6}>
            <h1 className="mt-5" style={{ fontSize: "4.0rem" }}>
              Connected to what matters
            </h1>
            <p className="mt-3" style={{ fontSize: "1.2rem" }}>
              Knowledge isn’t static — why should your presentations be? We
              integrate with the tools you rely on every day to keep information
              and conversations up-to-date, turning presentations into living
              documents.
            </p>
          </Col>

          <Col lg={6}>
            <Lottie />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
