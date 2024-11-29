import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backGroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backGroundImage,
  title,
  subTitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full lg:min-w-[1000px] min-w-[500px] ${backGroundImage} bg-cover bg-no-repeat rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="Map"
              width={28}
              height={28}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="Person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
                loading="lazy"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section
      id="camp"
      className="max-container padding-container relative flex flex-col py-10 mb-10 lg:py-20 xl:mb-20"
    >
      <div className="hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto xl:h-[600px] h-[400px]">
        <CampSite
          backGroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backGroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="xl:flexEnd flexCenter mt-10 px-6 xl:-mt-60 xl:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That&apos;s why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
