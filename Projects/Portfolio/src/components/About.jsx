import devImage from "../assets/dev.svg";
import SectionTitle from "./UI/SectionTitle";
const About = () => {
  return (
    <section className="bg-black py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-2">
        <img src={devImage} className="w-full p-10 hidden md:block" />
        <article>
          <SectionTitle text="About Me" />
          <div className="shadow text-white rounded-lg mt-8 p-6  bg-gradient-to-r from-fuchsia-700 to-fuchsia-300  ">
            <h3 className="font-semibold text-lg md:text-xl text-gradient">
              Dhayalasamy Mani
            </h3>
            <p className="mb-4 font-light text-black sm:mb-5">
              Senior systems associate at Infosys{" "}
              <span className="text-xs">(2 years+ )</span>
            </p>
            <dl>
              <dt className="mb-2 font-semibold leading-none  text-sky-500">
                Phone Number
              </dt>
              <dd className="mb-4 font-light text-gray-100 sm:mb-5 ">
                +91 99406 97566 / +91 94435 01068
              </dd>
              <dt className="mb-2 font-semibold leading-none  text-sky-500">
                Email Address
              </dt>
              <dd className=" mb-4 font-light text-gray-100 sm:mb-5 ">
                <a
                  href="https://accounts.google.com/v3/signin/identifier?hl=en-gb&ifkv=AYZoVhfjT8IuNTQSptcQIJHVjz9meQ2VHsm5B9rJPGN4hWQSPvrJQKzzSzznFrEABi8TIaW6dkWgRA&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1728435124%3A1694437606613217&theme=glif"
                  className="hover:underline"
                >
                  dhayadhayalan04@gmail.com
                </a>
              </dd>

              <dt className="mb-2 font-semibold leading-none  text-sky-500">
                Available on
              </dt>
              <dd className="mb-4 font-light text-gray-100 sm:mb-5   ">
                <a
                  href="https://www.naukri.com/nlogin/login"
                  className="hover:underline"
                >
                  naukri.com
                </a>{" "}
                {" & "}
                <a
                  href="https://www.linkedin.com/in/dhayalasamy-mani-314147177/"
                  className="hover:underline"
                >
                  linkedin.com
                </a>
              </dd>

              <dt className="mb-2 font-semibold leading-none text-sky-500">
                Biography
              </dt>
              <dd className="mb-4 font-light text-gray-100 sm:mb-5 ">
                Hello, I'm a front-end developer with 1.5+ years experience. I'm
                looking for an opportunity to work in an exciting and
                challenging environment where my skills can be utilized to build
                high quality & user friendly websites.
              </dd>
              <dd className="mb-4  text-gray-100 sm:mb-5 italic ">
                Feel free to contact me on social platforms.
              </dd>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
};
export default About;
