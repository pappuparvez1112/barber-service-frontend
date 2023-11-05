"use client";
import { Carousel } from "antd";
import Image from "next/image";
import BarberOne from "src/app/assets/carosel2.jpg";
import BarberTwo from "src/app/assets/carosel3.jpg";
import BarberThree from "src/app/assets/carusel1.jpg";
// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: "600px",
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
        <div className="w-full relative pt-[50%]">
          <Image
            // width={1024}
            // height={400}
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            src={BarberOne}
            alt="login image1"

            // fill={true}
          />
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                Welcome to our Service 1
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                We have an excellent environment
              </p>
            </div> */}
        </div>

        <div className="w-full relative pt-[50%]">
          <Image
            // width={1024}
            // height={400}
            // fill={true}
            // className="object-cover w-full h-full "
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
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
        </div>

        <div className="w-full relative pt-[50%]">
          <Image
            // width={1024}
            // height={400}
            // fill={true}
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
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
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
