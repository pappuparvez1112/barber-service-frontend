/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import featured from "src/app/assets/service.jpg";
const AboutPage = () => {
  return (
    <div className="container mx-auto mb-5 mt-24 lg:max-w-[1020px] md:max-w-[900px] sm:max-w-[700px] ">
      <div className="lg:flex lg:mb-5 my-auto gap-4 ">
        <div className="lg:w-7/12 mb-4 lg:mb-0 ">
          <Image
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            src={featured}
            alt="pic"
          />
        </div>
        <div className="lg:w-5/12 lg:items-center  mt-5 sm:ml-6 lg:ml-4  ">
          <h1 className="text-[#FEF9EC] text-2xl lg:text-3xl font-bold mb-3">
            About Us
          </h1>
          <p className="text-secondary mb-5 text-[#FEF9EC]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa
            distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos
            repellendus expedita. Obcaecati minima, reiciendis optio aspernatur
            autem pariatur soluta illum velit, eligendi dolorem consequuntur
            sapiente rerum accusamus aut nulla praesentium! Neque autem animi,
            voluptatem magnam nesciunt officia nemo nam, delectus minima velit
            beatae iste praesentium ad repudiandae, similique excepturi
            sapiente.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
