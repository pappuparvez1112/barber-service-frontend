/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import featured from "src/app/assets/service.jpg";
const AboutPage = () => {
  return (
    <section className="pb-0 pb-md-5 mt-20 mb-10">
      <div className=" container mb-5">
        <div className=" flex row mb-5 ">
          <div className="col-md-7 mb-4 m-md-0">
            <Image
              className=" img-fluid"
              src={featured}
              width={500}
              height={400}
              alt={"pic"}
            ></Image>
          </div>
          <div className="col-md-5 items-center mt-32 ml-20">
            <h1>About us</h1>
            <p className="text-secondary my-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              efacere amet aperiam non odio. Temporibus, nemo quasi quisquam
              ipsa distinctio saepe sed veniam incidunt, tempora mollitia,
              dignissimos repellendus expedita. Obcaecati minima, reiciendis
              optio aspernatur autem pariatur soluta illum velit, eligendi
              dolorem consequuntur sapiente rerum accusamus aut nulla
              praesentium! Neque autem animi, voluptatem magnam nesciunt officia
              nemo nam, delectus minima velit beatae iste praesentium ad
              repudiandae, similique excepturi sapiente.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
