import { BsCodeSlash } from "react-icons/bs";

export default function Home() {
  return (
    <main className="m-10">
      <div className="flex flex-col gap-10">

        <div className="flex flex-row justify-between place-items-center">
          <div className="flex flex-row gap-3 place-items-center">
            <div className="md:text-5xl text-4xl">
              <BsCodeSlash />
            </div>
            <div className="md:text-2xl">
              OpenSource<br />MRU
            </div>
          </div>
          <div className="primary-clr h-fit flex flex-row justify-center rounded">
            <div className="text-gray-900 mx-6 my-2">
              Join Now!
            </div>
          </div>
        </div>

        <div className="flex flex-col place-items-center">
          <div className="border border-3 border-gray-800 rounded bg-black w-fit mt-10 md:my-10 mb-4 md:mb-5">
            <div className="text-white opacity-80 font-extralight text-xs px-6 py-2">
              Currently in Stealth Mode
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 text-xl md:text-6xl font-black place-items-center mb-5  md:mb-20">
            <div>
              Learn, Contribute and Enhance
            </div>
            <div className="primary-clr-text">
              Open Source Projects
            </div>
            <div>
              @MRU.
            </div>
          </div>
          <div className="md:text-xl text-white opacity-70 text-center md:w-1/2  w-5/6 text-sm">
            We are a community of developers and designers collectively contributing to build products for Malla Reddy University.
          </div>
          <div className="primary-clr h-fit flex flex-row justify-center rounded my-10">
            <div className="text-gray-900 mx-6 my-2">
              Join Now!
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <div className="h-1 bg-gray-800">
          </div>
          <div className="flex md:flex-row flex-col justify-between text-xs font-extralight gap-4 place-items-center">
            <div className="text-center">
              @opensource-mru is a initiative of AIML Branch of Malla Reddy University
            </div>
            <div>
              © 2024 opensource-mru
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
