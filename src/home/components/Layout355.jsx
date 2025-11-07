import {
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import backgroundVideo from "../../assets/CBL_CC_REEL_v01_30mg.mov";

export function Layout355() {
  return (
    <section id="relume" className="relative">
      <div className="px-page">
        <div className="relative z-10 container max-w-container mx-auto">
          <div className="grid auto-cols-fr grid-cols-1 pb-8 md:grid-cols-[1fr_10rem_1fr] md:pb-0 lg:grid-cols-[1fr_12rem_1fr]">
            <div className="relative md:mt-[100vh]">
              <div className="flex flex-col justify-center py-8 md:h-screen md:py-0">
                <div className="w-full max-w-content-lg">
                  <h1 className="mb-5 font-neue-header text-h1 text-cbl-light md:mb-6">
                    Colour as Language
                  </h1>
                  <p className="font-neue-display text-body-thin text-cbl-light">
                    An independent colorist trusted for both artistic insight
                    and technical mastery, elevating every project through
                    precision and creative depth.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center py-8 md:h-screen md:py-0">
                <div className="w-full max-w-content-lg">
                  <h1 className="mb-5 font-neue-header text-h1 text-cbl-light md:mb-6">
                    Open and human-centered collaboration.
                  </h1>
                  <p className="font-neue-display text-body-thin text-cbl-light">
                    I believe in using color purposefully, sharing knowledge
                    openly, and building respectful, trusting relationships that
                    empower great work.
                  </p>
                </div>
              </div>
            </div>
            <div className="static top-0 order-first flex h-[50vh] items-center justify-center md:sticky md:order-none md:h-screen">
              <Dialog>
                <DialogTrigger className="absolute z-20 flex items-center justify-center text-white">
                  <span className="flex size-20 flex-col items-center justify-center">
                    <FaCirclePlay className="absolute z-20 size-16 text-white" />
                  </span>
                </DialogTrigger>
                <DialogContent>
                  <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative md:pt-[150vh]">
              <div className="flex flex-col justify-center py-8 md:h-screen md:py-0">
                <div className="w-full max-w-content-lg">
                  <h1 className="mb-5 font-neue-header text-h1 text-cbl-light md:mb-6">
                    Creativity with Purpose
                  </h1>
                  <p className="font-neue-display text-body-thin text-cbl-light">
                    I see color as a creative force — not just to beautify, but
                    to support the story, the emotion, and the intent behind
                    every frame.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[-100vh]" />
        </div>
      </div>
      <div className="sticky bottom-0 z-0 h-screen w-screen">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="sticky bottom-0 h-screen w-screen overflow-hidden object-cover">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className="absolute -top-full -right-full -bottom-full -left-full m-auto size-full bg-cover [background-position:50%] object-cover"
          >
            <source
              src={backgroundVideo}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
