import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section
      id="getApp"
      className="flexCenter w-full flex-col pb-[100px] capitalize"
    >
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="xs:bold-32 md:bold-40 xl:bold-64 lg:bold-52 xl:max-w-[550px]">
            Get for Free Now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
