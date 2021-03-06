import React from "react";
import "./Footer.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <div className="section-line"></div>
      <footer className="footer d-flex ">
        <Container>
          <Row>
            <Col lg={3} sm={12} className="footer-links"></Col>
            <Col lg={6} sm={12} className="social">
              <div>
                <ul className="d-flex justify-content-row space-around">
                  <li className="ml-5">
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        color="blue"
                        size="2x"
                        title="Facebook"
                      />
                    </a>
                  </li>
                  <li className="ml-5">
                    <a
                      href="https://www.instagram.com/cemilabbey/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        color="blue"
                        size="2x"
                        title="Instagram"
                      />
                    </a>
                  </li>
                  <li className="ml-5">
                    <a
                      href="https://twitter.com/fsDevDragonfly"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        color="blue"
                        size="2x"
                        title="Twitter"
                      />
                    </a>
                  </li>
                  <li className="ml-5">
                    <a
                      href="https://www.youtube.com/channel/UCgz0GCgczYA0u7fTAepi2dg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        color="var(--main-bg-color)"
                        size="2x"
                        title="Youtube"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col col={3} >
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
