"use client";
import { Carousel, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import BarberOne from "src/app/assets/carosel2.jpg";
import BarberTwo from "src/app/assets/carosel3.jpg";
import BarberThree from "src/app/assets/carusel1.jpg";
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "600px",
  width: "800px",
};
// const content-overlay:React.CSSProperties= {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: rgba(0, 0, 0, 0.5);
//   color: #fff;
//   padding: 20px;
//   text-align: center;
// }

const HeroSection = () => {
  // const onChange = (currentSlide: number) => {
  //   console.log(currentSlide);
  // };

  return (
    <div className="heroBlock">
      <Row>
        <Col lg={34}>
          <Carousel
            autoplay

            // afterChange={onChange}
          >
            <div>
              <h3 style={contentStyle}>
                <Image
                  src={BarberOne}
                  width={1550}
                  height={800}
                  alt="login image1"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    // background: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <h1>Welcome to our Service 1</h1>
                  <p>We have a excellent Emvironment</p>
                </div>
              </h3>
            </div>

            <div>
              <h3 style={contentStyle}>
                <Image
                  src={BarberTwo}
                  width={1550}
                  height={800}
                  alt="login image2"
                />
                {/* <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    // background: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <h1>Welcome to our Service2</h1>
                  <p>We have a excellent Emvironment</p>
                </div> */}
              </h3>
            </div>

            <div>
              <h3 style={contentStyle}>
                <Image
                  src={BarberThree}
                  width={1550}
                  height={800}
                  alt="login image3"
                />
                {/* <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    // background: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <h1>Welcome to our Service3</h1>
                  <p>We have a excellent Emvironment</p>
                </div> */}
              </h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
