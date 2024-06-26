import Router from "next/router";
import { Button } from "@nextui-org/react";
import { urbanDesign } from "../public/images/urban_design";

const Timeline: React.FC = () => {
  const handleCvClick = () => {
    setTimeout(() => {
      window.open("/HY-CV.pdf", "_blank");
    }, 400);
  };
  return (
    <section>
      <div className="bg-lightBg py-8 text-lightText dark:bg-darkBg dark:text-dark1">
        <div className="relative mx-auto my-12 flex flex-col items-start lg:container md:my-24 md:flex-row">
          <div className="relative mx-auto mt-2 flex h-fit w-full max-w-[100vw] flex-col px-8 text-center md:sticky md:top-36 md:mt-12 md:w-1/3 md:text-left">
            <div className="relative z-10">
              <p className="tracking-loose text-sm uppercase text-light2/80 dark:text-dark2 md:text-base">
                Success Moments
              </p>
              <p className="mb-2 text-2xl leading-normal md:text-4xl md:leading-relaxed">
                The Story So Far
              </p>
              <p className="mb-4 text-sm text-lightText dark:text-dark1 md:text-base lg:max-w-[40ch]">
                Reflections on my journey, providing insights into my past
                roles, contributions, and aspirations.
              </p>
              <Button
                className="mx-auto mt-3 w-fit rounded border-2 border-light3 bg-lightBg px-6 py-2 tracking-wide text-lightText transition-all duration-400 ease-soft-spring hover:border-light3/80 hover:bg-light3 hover:text-dark1 dark:border-dark3 dark:bg-darkBg dark:text-dark1 dark:hover:border-dark3/80 dark:hover:bg-dark3 md:mx-0 "
                onClick={handleCvClick}
              >
                View CV
              </Button>
            </div>
          </div>
          {/* polygon(42% 8%, 72% 14%, 53% 30%, 16% 27%, 34% 57%, 51% 53%, 78% 54%, 69% 71%, 61% 61%, 39% 65%, 9% 66%, 26% 80%, 50% 82%, 70% 90%, 51% 96%, 35% 94%, 40% 99%, 64% 99%) */}
          <div className="sticky mx-auto md:w-2/3">
            <div className="container mx-auto h-full w-full">
              <div className="relative h-full w-screen overflow-hidden px-2 py-10 sm:w-auto">
                <div className="pointer-events-none absolute inset-0 z-0 h-full blur-2xl">
                  <div
                    className=" z-0 mx-auto h-full w-[15rem] transform-gpu overflow-hidden bg-gradient-to-tr from-lGrad1 to-lGrad2 opacity-30 dark:from-dGrad1 dark:to-dGrad2 dark:opacity-[0.14] lg:w-[40rem]"
                    style={{
                      clipPath: "ellipse(7% 50% at 50% 50%)",
                    }}
                  ></div>
                </div>
                <div className="absolute right-1/2 h-full translate-x-[1px] rounded-full border-2 border-light3 dark:border-dark3"></div>
                <div className="absolute left-1/2 h-full -translate-x-[1px] rounded-full border-2 border-light3 dark:border-dark3"></div>
                <div className="z-10 mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-[45%]"></div>
                  <div className="order-1 w-[45%] px-1 py-4 text-right">
                    <p className="text-sm text-light1 dark:text-dark2 md:text-base">
                      London, UK 2017
                    </p>
                    <h6 className="mb-3 text-xs italic tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">
                      Access to Architecture Summer Course
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      University of Westminster
                    </h4>
                    <p className="text-xs leading-snug text-lightText text-opacity-100 dark:text-dark1 md:text-sm">
                      Completed a collaborative course on tension structures,
                      small-scale models and large-scale project design
                    </p>
                  </div>
                </div>
                <div className="right-timeline z-10 mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-[45%]"></div>
                  <div className="order-1  w-[45%] px-1 py-4 text-left">
                    <p className="text-sm text-light1 dark:text-dark2 md:text-base">
                      London, UK 2017
                    </p>
                    <h6 className="mb-3 text-xs italic tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">
                      Work Placement
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Eco Chic
                    </h4>
                    <p className="text-xs leading-snug text-lightText text-opacity-100 dark:text-dark1 md:text-sm">
                      Managed Eco Chic&apos;s online expansion, including
                      website development, product catalog setup, and
                      environmental commitment articles.
                    </p>
                  </div>
                </div>
                <div className="left-timeline z-10 mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-[45%]"></div>
                  <div className="order-1 w-[45%] px-1 py-4 text-right">
                    <p className=" text-sm text-light1 dark:text-dark2 md:text-base">
                      London, UK 2019
                    </p>
                    <h6 className="mb-3 text-xs italic tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">
                      Summer Internship
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Farrow Silverton Architects
                    </h4>
                    <p className="text-xs leading-snug text-lightText text-opacity-100 dark:text-dark1 md:text-sm">
                      Received training in SketchUp and AutoCAD, applied to
                      create a digital model of a modern residence. Client
                      visits enhanced essential communication architectural
                      skills.
                    </p>
                  </div>
                </div>
                <div className="right-timeline z-10 mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-[45%]"></div>
                  <div className="order-1  w-[45%] px-1 py-4 text-left">
                    <p className="text-sm text-light1 dark:text-dark2 md:text-base">
                      Malaysia, 2020
                    </p>
                    <h6 className="mb-3 text-xs italic tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">
                      Summer Internship
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      KW Associates and Architecture Sdn Bhd
                    </h4>
                    <p className="text-xs leading-snug text-lightText text-opacity-100 dark:text-dark1 md:text-sm">
                      Converted AutoCAD floorplans into SketchUp models,
                      adapting designs for new clients. Developed strong remote
                      communication skills during the COVID-19 pandemic.
                    </p>
                  </div>
                </div>
                <div className="left-timeline z-10 mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-[45%]"></div>
                  <div className="order-1 w-[45%] px-1 py-4 text-right">
                    <p className=" text-sm text-light1 dark:text-dark2 md:text-base">
                      London, UK 2022
                    </p>
                    <h6 className="mb-3 text-xs italic tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">
                      Work Placement
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Optima Planning Engineering Ltd
                    </h4>
                    <p className="text-xs leading-snug text-lightText text-opacity-100 dark:text-dark1 md:text-sm">
                      Focused on client consultations and surveys for an
                      extension project. Gained insights into large-scale
                      projects and project management responsibilities,
                      contributing to both house extensions and broader
                      projects, optimising design discussions and planning
                      applications.
                    </p>
                  </div>
                </div>
                <div className="right-timeline z-10 mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-[45%]"></div>
                  <div className="order-1  w-[45%] px-1 py-4 text-left">
                    <p className="text-sm text-light1 dark:text-dark2 md:text-base">
                      London, UK 2022
                    </p>
                    <h6 className="mb-3 text-xs italic tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">
                      Coding Course
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      SheCodes
                    </h4>
                    <p className="text-xs leading-snug text-lightText text-opacity-100 dark:text-dark1 md:text-sm">
                      Took an introductory course in HTML, CSS, and JavaScript,
                      currently enrolled in a front-end developer course,
                      demonstrating a commitment to continuous learning and
                      skill diversification.
                    </p>
                  </div>
                </div>
                <div className="left-timeline z-10 mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-[45%]"></div>
                  <div className="order-1 w-[45%] px-1 py-4 text-right">
                    <p className="text-sm text-light1 dark:text-dark2 md:text-base">
                      London, UK 2023
                    </p>
                    <h6 className="mb-3 text-xs italic tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">
                      Part Time Job
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Optima Planning Engineering Ltd
                    </h4>
                    <p className="text-xs leading-snug text-lightText text-opacity-100 dark:text-dark1 md:text-sm">
                      Given the remote nature of the role, prioritised improving
                      communication and time management skills while balancing
                      work and school. Adapted creative techniques for remote
                      training and addressing various situations.
                    </p>
                  </div>
                </div>
                <div className="right-timeline z-10 mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-[45%]"></div>
                  <div className="order-1  w-[45%] px-1 py-4 text-left">
                    <p className="text-sm text-light1 dark:text-dark2 md:text-base">
                      London, UK 2023 - Present
                    </p>
                    <h6 className="mb-3 text-xs italic tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">
                      Draftsman
                    </h6>
                    <h4 className="mb-3 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Peter Pendleton And Associates Ltd
                    </h4>
                    <p className="text-xs leading-snug text-lightText text-opacity-100 dark:text-dark1 md:text-sm">
                      Oversaw the full development of a residential extension,
                      handling everything from planning to contractor
                      management. Maintained strong communication with clients,
                      ensuring their vision was met within time and budget
                      constraints. Coordinated with various professionals to
                      resolve issues quickly, demonstrating strong project
                      management skills. Also designed a project converting an
                      abandoned building into a profitable hotel, focusing on
                      space efficiency and safety compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex-start relative mx-auto flex max-h-[400px] w-[300px] justify-center p-6 sm:w-[400px] lg:px-6 lg:py-0"
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
