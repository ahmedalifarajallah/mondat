"use client";
import { screenSizes } from "@/constants/enums";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

interface IServiceSectionProps {
  isImageOnLeft?: boolean;
  imgSrc: string;
  imgAlt?: string;
  companyName: string;
  text: string;
  buttonLink: string;
}

const ImgDiv = ({ imgSrc, imgAlt }: { imgSrc: string; imgAlt?: string }) => {
  return (
    <div className="relative w-full min-h-[350px] lg:h-full md:h-[450px]">
      <Image
        fill
        src={imgSrc}
        className="absolute h-full w-full object-cover"
        alt={imgAlt || ""}
      />
    </div>
  );
};
const TextDiv = ({
  companyName,
  text,
  buttonLink,
  isLeft
}: {
  companyName: string;
  text: string;
  buttonLink?: string;
  isLeft?: boolean;
}) => {
  return (
    <div className={`w-full h-full flex flex-col justify-center py-4 ${isLeft? "pe-4":"ps-4"}`}>
      <h2 className="font-bold text-xl">{companyName}</h2>
      <p className="my-6 text-justify">{text}</p>
      {/* <Link href={buttonLink || "#"} className="">
        <Button size="large" type="primary" className="bg-primary">
          Learn More
        </Button>
      </Link> */}
    </div>
  );
};

const ServiceSection = ({
  isImageOnLeft,
  imgSrc,
  imgAlt,
  companyName,
  text,
  buttonLink,
}: IServiceSectionProps) => {
  const md = matchMedia(screenSizes.MD).matches;

  return (
    <section className="w-full">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            {!md && isImageOnLeft ? (
              <ImgDiv imgSrc={imgSrc} imgAlt={imgAlt} />
            ) : (
              <TextDiv
                isLeft={md || !isImageOnLeft}
                companyName={companyName}
                text={text}
                buttonLink={buttonLink}
              />
            )}
          </div>
          <div>
            {md || !isImageOnLeft ? (
              <ImgDiv imgSrc={imgSrc} imgAlt={imgAlt} />
            ) : (
              <TextDiv
                isLeft={md || !isImageOnLeft}
                companyName={companyName}
                text={text}
                buttonLink={buttonLink}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;