import BreadCrumbs from "@/components/UI/BreadCrumbs";
import HomeExpCard from "@/components/UI/HomeExpCard";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import { companies, companies2 } from "@/_staticData/basicDetails";

export const metadata: Metadata = {
  title: "Modad - About us",
  description: "About Modad",
};
const AboutUsPage = () => {
  return (
    <>
      <BreadCrumbs
        title="About us"
        items={[
          { title: "Home", path: "/" },
          { title: "About us", path: "/about-us" },
        ]}
      />

      <main className="py-12 px-4 lg:px-12 z-[-3] bg-primary w-full h-full relative min-h-[45vh]">
        <Image
          src="/imgs/About-Us-BG"
          alt=""
          fill
          className="object-cover absolute h-full w-full top-0 left-0 z-[-2]"
          // loading="lazy"
        />

        <div className="z-[2]">
          <div className="text-white pb-4 w-full">
            <h4 className="text-xl lg:text-2xl font-bold mb-4 uppercase">
              Welcome to MODAD Group
            </h4>
            <p className="text-lg text-justify lg:leading-8">
              A dynamic conglomerate built on the pillars of passion,
              innovation, and excellence. Since our inception in 2011, we have
              been at the forefront of the Construction, Real Estate
              Development, MEP services, and Smart solutions industries, shaping
              a better tomorrow for communities worldwide. Led by visionary
              Founder and Chairman, Engineer Mohamed El-Haddad, our group is
              driven by a steadfast commitment to delivering exceptional
              engineering solutions and infrastructure development. With over 12
              years of expertise and a growing portfolio of successful projects,
              we have earned the trust of clients and investors alike. From Real
              Estate Development, Construction & Engineering Solutions,
              Electromechanical Services, Fine Finishing, to Smart Solutions,
              our diverse range of companies provides comprehensive solutions
              tailored to the unique needs of our clients. Join us on a
              remarkable journey of engineering excellence, sustainable
              development, and meaningful contributions to society. At MODAD
              Group, we are more than just a conglomerate; we are a force
              shaping a brighter, more prosperous future for generations to
              come.
            </p>
          </div>
        </div>
      </main>

      <section className="bg-black">
        <div className="py-24 px-4 lg:px-12">
          <p className="mb-16 text-justify text-white">
            An inspiring vision. A clear mission. And meaningful values. That’s
            what drives the success of the MODAD Group. We believe in harnessing
            our collective power to work together towards a unified goal.
          </p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <div className="border-primary border-4 p-5 sm:p-12">
              <div className="flex mb-6">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-primary text-8xl me-4"
                />
                <h3 className="text-5xl font-bold uppercase">
                  <span className="block text-white">Our</span>
                  <span className="block text-primary">Vision</span>
                </h3>
              </div>
              <div>
                <p className="text-justify text-white">
                  We envision a future where engineering brilliance meets human
                  potential, creating a better world for generations to come.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 p-5 sm:p-12">
              <div className="flex mb-6">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-primary text-8xl me-4"
                />
                <h3 className="text-5xl font-bold uppercase">
                  <span className="block text-white">Our</span>
                  <span className="block text-primary">Mission</span>
                </h3>
              </div>
              <div>
                <p className="text-justify text-white">
                  We are driven to build a brighter, more prosperous future,
                  leaving an indelible mark of excellence on the world stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="py-16 px-0 lg:px-8">
          <h3 className="text-xl sm:text-3xl font-bold text-center uppercase">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 text-justify">
            <div className="flex flex-col gap-2 p-4">
              <Image
                src="/icons/quality.svg"
                alt=""
                width={50}
                height={50}
                className="object-contain w-[50px] h-[50px]"
              />
              <h4 className="text-lg font-bold">Quality</h4>
              <p className="text-sm text-gray-700">
                Quality is the cornerstone of MODAD Group. All of the Group’s
                executive departments coordinate and collaborate - for every
                project, for every client. This dynamic approach helps us
                develop innovative solutions that meet global standards, achieve
                project objectives, and ensure client satisfaction.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <Image
                src="/icons/credibility.svg"
                alt=""
                width={50}
                height={50}
                className="object-contain w-[50px] h-[50px]"
              />
              <h4 className="text-lg font-bold">Credibility</h4>
              <p className="text-sm text-gray-700">
                MODAD Group is synonymous with transparency and reliability. We
                understand that integrity and trust are crucial for long-term
                business success. So, whether it’s an agreement with clients, a
                negotiation with suppliers, a contract with an employee, or a
                commitment to our stakeholders, we are always true to our word.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <Image
                src="/icons/honesty.svg"
                alt=""
                width={50}
                height={50}
                className="object-contain w-[50px] h-[50px]"
              />
              <h4 className="text-lg font-bold">Honesty</h4>
              <p className="text-sm text-gray-700">
                Openness and honesty make for the best relationships - in
                business and in life. It’s how we build trust with our
                stakeholders and nurture successful client partnerships that
                stand the test of time.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <Image
                src="/icons/diversity.svg"
                alt=""
                width={50}
                height={50}
                className="object-contain w-[50px] h-[50px]"
              />
              <h4 className="text-lg font-bold">Diversity and Respect</h4>
              <p className="text-sm text-gray-700">
                People are at the heart of our success. Appreciating differences
                and celebrating individuals is second nature to us. Not only is
                it the right thing to do, it sets us apart in business. Respect
                for people keeps us connected, helping build long-lasting
                relationships - with one another and with our clients - that
                deliver synergies in our work.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <Image
                src="/icons/commitment.svg"
                alt=""
                width={50}
                height={50}
                className="object-contain w-[50px] h-[50px]"
              />
              <h4 className="text-lg font-bold">Commitment</h4>
              <p className="text-sm text-gray-700">
                From the first sketch of a design to the last bolt during
                assembly, we are driven by a commitment to exceptional quality.
                Our dedicated team takes the time to understand your specific
                needs, so we can develop tailored solutions that exceed your
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-16 px-4 lg:px-12">
          <h2 className="text-primary text-xl sm:text-3xl font-bold text-center">
            OUR GROUP
          </h2>
          <p className="text-justify mt-4 text-sm max-w-[1024px] mx-auto">
            Welcome to MODAD Group, a dynamic conglomerate built on the pillars
            of passion, innovation, and excellence. Since our inception in 2011,
            we have been at the forefront of the construction, real estate, MEP
            services, and smart solutions industries, shaping a better tomorrow
            for communities worldwide. MODAD Group is divided into 6
            subsidiaries and a charity foundation, in which each is specialized
            or serves in a different yet crossed sector:
          </p>
          <div className="grid gap-y-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 py-12 gap-4">
            {/* <HomeExpCard
              title="MODAD Group"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            /> */}
            {companies2.map((company) => (
              <HomeExpCard
                key={company.path}
                imgSrc={
                  company.img.startsWith("/")
                    ? company.img
                    : `/imgs/companiesImgs/${company.img}`
                }
                title={company.name}
              />
            ))}
          </div>
        </div>
      </section>
      {/* services section */}
      {/* <section className="bg-black">
        <div className="container mx-auto py-12">
          <h2 className="text-white text-xl sm:text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="px-8">
            <Carousel
              responsive={[{ breakpoint: 1024, settings: { slidesToShow: 1 } }]}
              slidesToShow={2}
              dots={false}
              arrows
              prevArrow={
                <CXALeft left={-5} iconClassName="text-xl select-none" />
              }
              nextArrow={
                <CXARight right={-5} iconClassName="text-xl select-none" />
              }
            >
              <div className="p-4">
                <ServiceCard
                  imgLink="/imgs/shutterstock_697100377.jpg"
                  title="CONSULTING"
                  description="Our consulting services offer you ease of mind, as we oversee the entire process. Beginning with the documentation and paperwork to the creation of a project plan, we can get it done from start to finish. Meeting our clients’ needs and exceeding their expectations."
                />
              </div>
              <div className="p-4">
                <ServiceCard
                  imgLink="/imgs/shutterstock_707662543.jpg"
                  title="ARCHITECTURE"
                  description="An idea cannot become reality unless it is designed properly. Our skilled and experienced architects are talented, highly trained, and equipped with the latest technology. They are the ones that turn your vision into reality by transforming your ideas into tangible plans and designs."
                />
              </div>
              <div className="p-4">
                <ServiceCard
                  imgLink="/imgs/shutterstock_1067925506.jpg"
                  title="CONSTRUCTION"
                  description="MODAD Construction stands as your comprehensive solution for construction requirements, adept at handling projects of various scales. Whether it's a small-scale initiative or a large corporate complex, our expertise extends to diverse construction needs. From intricate roadwork to the development of expansive corporate complexes, MODAD Construction ensures excellence and precision in every facet of the construction process."
                />
              </div>
              <div className="p-4">
                <ServiceCard
                  imgLink="/imgs/shutterstock_1411133069.jpg"
                  title="RENOVATIONS"
                  description="We can deliver renovation projects of any scale, at the highest standards of quality. We offer a full service starting from planning, architecture, tiling, painting, woodwork, and stonework. We can work hand in hand with our clients every step of the way."
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutUsPage;
