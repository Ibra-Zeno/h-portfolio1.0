import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { urbanDesign } from "../public/images/urban_design";

const Timeline: React.FC = () => {
  return (
    <section>
      <div className="bg-slate-300 py-8 text-gray-800">
        <div className="mx-auto my-12 flex flex-col items-start lg:container md:my-24 md:flex-row">
          <div className="sticky mx-auto mt-2 flex w-full max-w-[100vw] flex-col px-8 text-center md:top-36 md:mt-12 md:w-1/3 md:text-left">
            <p className="tracking-loose text-base uppercase text-red-800/60 md:text-lg">
              Working Process
            </p>
            <p className="mb-2 text-2xl leading-normal md:text-4xl md:leading-relaxed">
              The Story So Far
            </p>
            <p className="mb-4 text-sm text-gray-800 md:text-base">
              Unlock your potential; it is greater than you think. Trust
              yourself and let your abilities shine.
            </p>
            <Button
              color="primary"
              className="mx-auto rounded-sm bg-red-300 px-6 py-2 text-base"
            >
              Explore Now
            </Button>
          </div>
          <div className="sticky mx-auto md:w-2/3">
            <div className="container mx-auto h-full w-full">
              <div className="wrap relative h-full w-screen overflow-hidden px-2 py-10 sm:w-auto">
                <div
                  className="absolute h-full border-2 border-[#0369a1]"
                  style={{
                    right: "50%",
                    border: "2px solid #0369a1",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="absolute h-full border-2 border-[#0369a1]"
                  style={{
                    left: "50%",
                    border: "2px solid #0369a1",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="text-sm text-red-800/60 md:text-base">
                      London, UK 2023
                    </p>
                    <h6 className="mb-3 text-sm italic text-gray-600 md:text-base">
                      Part Time Job
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Optima Planning Engineering Ltd
                    </h4>
                    <p className="text-sm leading-snug text-gray-800 text-opacity-100 md:text-base">
                      Success often requires faith in yourself that surpasses
                      any doubt. Believe in your abilities, even when the path
                      ahead seems uncertain, for it is in those moments of
                      self-belief that you will discover your true potential.
                    </p>
                  </div>
                </div>
                <div className="right-timeline mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="text-sm text-red-800/60 md:text-base">
                      London, UK 2022
                    </p>
                    <h6 className="mb-3 text-sm italic text-gray-600 md:text-base">
                      Work Placement
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Optima Planning Engineering Ltd
                    </h4>
                    <p className="text-sm leading-snug text-gray-800 text-opacity-100 md:text-base">
                      Dreams are the blueprints of the future. Dream big, but
                      remember that it is the consistent and focused effort you
                      put into realizing those dreams that will turn them into
                      reality.
                    </p>
                  </div>
                </div>
                <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className=" text-sm text-red-800/60 md:text-base">
                      Malaysia 2020
                    </p>
                    <h6 className="mb-3 text-sm italic text-gray-600 md:text-base">
                      Summer Internship
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      KW Associates and Architecture Sdn. Bhd.
                    </h4>
                    <p className="text-sm leading-snug text-gray-800 text-opacity-100 md:text-base">
                      Life is a series of challenges and opportunities. Embrace
                      both, for they shape your unique journey.
                    </p>
                  </div>
                </div>
                <div className="right-timeline mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="text-sm text-red-800/60 md:text-base">
                      6-9 May, 2021
                    </p>
                    <h6 className="mb-3 text-sm italic text-gray-600 md:text-base">
                      Part Time Job
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Participation
                    </h4>
                    <p className="text-sm leading-snug text-gray-800 text-opacity-100 md:text-base">
                      Life is a series of challenges and opportunities. Embrace
                      both, for they shape your unique journey.
                    </p>
                  </div>
                </div>
                <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className=" text-sm text-red-800/60 md:text-base">
                      London, UK 2023
                    </p>
                    <h6 className="mb-3 text-sm italic text-gray-600 md:text-base">
                      Part Time Job
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Optima Planning Engineering Ltd
                    </h4>
                    <p className="text-sm leading-snug text-gray-800 text-opacity-100 md:text-base">
                      Success often requires faith in yourself that surpasses
                      any doubt. Believe in your abilities, even when the path
                      ahead seems uncertain, for it is in those moments of
                      self-belief that you will discover your true potential.
                    </p>
                  </div>
                </div>
                <div className="right-timeline mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="text-sm text-red-800/60 md:text-base">
                      6-9 May, 2021
                    </p>
                    <h6 className="mb-3 text-sm italic text-gray-600 md:text-base">
                      Part Time Job
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Participation
                    </h4>
                    <p className="text-sm leading-snug text-gray-800 text-opacity-100 md:text-base">
                      Life is a series of challenges and opportunities. Embrace
                      both, for they shape your unique journey.
                    </p>
                  </div>
                </div>
                <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="text-sm text-red-800/60 md:text-base">
                      {" "}
                      10 May, 2021
                    </p>
                    <h6 className="mb-3 text-sm italic text-gray-600 md:text-base">
                      Part Time Job
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Result Declaration
                    </h4>
                    <p className="text-sm leading-snug text-gray-800 text-opacity-100 md:text-base">
                      Life is a series of challenges and opportunities. Embrace
                      both, for they shape your unique journey.
                    </p>
                  </div>
                </div>

                <div className="right-timeline mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="text-sm text-red-800/60 md:text-base">
                      12 May, 2021
                    </p>
                    <h6 className="mb-3 text-sm italic text-gray-600 md:text-base">
                      Part Time Job
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      SheCodes
                    </h4>
                    <p className="text-sm leading-snug text-gray-800 text-opacity-100 md:text-base">
                      Life is a series of challenges and opportunities. Embrace
                      both, for they shape your unique journey.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex-start relative mx-auto flex max-h-[400px] w-[300px] justify-center p-6 sm:w-[400px]"
                dangerouslySetInnerHTML={{ __html: urbanDesign }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

/* <section>
    <div class="bg-black text-white py-8">
    <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p class="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
        <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
        <p class="text-sm md:text-base text-gray-50 mb-4">
          Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
          fest.
        </p>
        <a href="#"
        class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
        Explore Now</a>
      </div>
      <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-yellow-555 absolute h-full border"
              style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"></div>
            <div class="border-2-2 border-yellow-555 absolute h-full border"
              style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"></div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Pick your favourite event(s) and register in that event by filling the form corresponding to that
                  event. Its that easy :)
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1  w-5/12 px-1 py-4 text-left">
                <p class="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Participate online. The links for your registered events will be sent to you via email and whatsapp
                  groups. Use those links and show your talent.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-yellow-300"> 10 May, 2021</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
                  announced on the whatsapp groups and will be mailed to you.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>

              <div class="order-1  w-5/12 px-1 py-4">
                <p class="mb-3 text-base text-yellow-300">12 May, 2021</p>
                <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">Prize Distribution</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  The winners will be contacted by our team for their addresses and the winning goodies will be sent at
                  their addresses.
                </p>
              </div>
            </div>
          </div>
          <img class="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
        </div>
      </div>
    </div>
  </div>
  </section> */
