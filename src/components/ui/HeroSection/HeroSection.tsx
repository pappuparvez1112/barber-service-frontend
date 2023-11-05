"use client";
import { Carousel } from "antd";
import Image from "next/image";
import BarberOne from "src/app/assets/carosel2.jpg";
import BarberTwo from "src/app/assets/carosel3.jpg";
import BarberThree from "src/app/assets/carusel1.jpg";
// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: "600px",
//   width: "800px",
// };
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
    <div className="container md:container sm:container lg:container mx-auto  items-center relative">
      <Carousel className="" autoplay>
        <div>
          <h3>
            <Image
              className="object-cover w-full h-full"
              src={BarberOne}
              alt="login image1"
            />
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                Welcome to our Service 1
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                We have an excellent environment
              </p>
            </div> */}
          </h3>
        </div>

        <div>
          <h3>
            <Image
              className="object-cover w-full h-full"
              src={BarberTwo}
              alt="login image2"
            />
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                Welcome to our Service 2
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                We have an excellent environment
              </p>
            </div> */}
          </h3>
        </div>

        <div>
          <h3>
            <Image
              className="object-cover w-full h-full"
              src={BarberThree}
              alt="login image3"
            />
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                Welcome to our Service 3
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                We have an excellent environment
              </p>
            </div> */}
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
