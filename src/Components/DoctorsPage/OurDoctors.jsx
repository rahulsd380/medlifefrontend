import Rectangle from "../../Assests/Rectangle 19194.png"
import { IoBagAdd } from "react-icons/io5";
import { BiSolidUserPin } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const OurDoctors = () => {

  return (
    <div className="py-10 px-5">
      <div>
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-bold text-center mb-10">
          Our Doctors
        </h1>

        {/* Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
              <div className="bg-white shadow-md p-2 rounded-md">
            <div className="grid grid-cols-3 gap-0 md:gap-5 lg:gap-0 mb-4">
              <img
                className="w-28 md:w-full lg:w-28 h-full rounded-lg border-teal-500"
                src={Rectangle}
                alt=""
              />

              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-2">
                  <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
                  Dr. Sahajanad Prasad
                  </h1>
                  <p className="text-[#17324A]">
                    {" "}
                    MBBS, MS-{" "}
                    <span className="text-teal-500">General sergery</span>
                  </p>
                </div>

                <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                  Specialization
                </h3>

                <div className="flex justify-between gap-3 items-center mb-3">
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">General surgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Neurosurgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Orthopedic Surgeon</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <IoBagAdd></IoBagAdd>13yr+ 
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <BiSolidUserPin></BiSolidUserPin> 2K
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <HiLocationMarker></HiLocationMarker> Patna
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <button className="w-full border border-[#00a0aa] px-4 py-2 rounded-lg text-[#00a0aa] text-sm">
                Call now +98 765 432 10
              </button>
              <button className="w-full bg-[#00a0aa] px-4 py-2 rounded-lg text-white border border-[#00a0aa] text-sm">
                Book Your Appoinment
              </button>
            </div>
          </div>
              <div className="bg-white shadow-md p-2 rounded-md">
            <div className="grid grid-cols-3 gap-0 md:gap-5 lg:gap-0 mb-4">
              <img
                className="w-28 md:w-full lg:w-28 h-full rounded-lg border-teal-500"
                src={Rectangle}
                alt=""
              />

              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-2">
                  <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
                  Dr. Sahajanad Prasad
                  </h1>
                  <p className="text-[#17324A]">
                    {" "}
                    MBBS, MS-{" "}
                    <span className="text-teal-500">General sergery</span>
                  </p>
                </div>

                <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                  Specialization
                </h3>

                <div className="flex justify-between gap-3 items-center mb-3">
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">General surgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Neurosurgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Orthopedic Surgeon</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <IoBagAdd></IoBagAdd>13yr+ 
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <BiSolidUserPin></BiSolidUserPin> 2K
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <HiLocationMarker></HiLocationMarker> Patna
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <button className="w-full border border-[#00a0aa] px-4 py-2 rounded-lg text-[#00a0aa] text-sm">
                Call now +98 765 432 10
              </button>
              <button className="w-full bg-[#00a0aa] px-4 py-2 rounded-lg text-white border border-[#00a0aa] text-sm">
                Book Your Appoinment
              </button>
            </div>
          </div>
              <div className="bg-white shadow-md p-2 rounded-md">
            <div className="grid grid-cols-3 gap-0 md:gap-5 lg:gap-0 mb-4">
              <img
                className="w-28 md:w-full lg:w-28 h-full rounded-lg border-teal-500"
                src={Rectangle}
                alt=""
              />

              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-2">
                  <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
                  Dr. Sahajanad Prasad
                  </h1>
                  <p className="text-[#17324A]">
                    {" "}
                    MBBS, MS-{" "}
                    <span className="text-teal-500">General sergery</span>
                  </p>
                </div>

                <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                  Specialization
                </h3>

                <div className="flex justify-between gap-3 items-center mb-3">
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">General surgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Neurosurgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Orthopedic Surgeon</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <IoBagAdd></IoBagAdd>13yr+ 
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <BiSolidUserPin></BiSolidUserPin> 2K
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <HiLocationMarker></HiLocationMarker> Patna
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <button className="w-full border border-[#00a0aa] px-4 py-2 rounded-lg text-[#00a0aa] text-sm">
                Call now +98 765 432 10
              </button>
              <button className="w-full bg-[#00a0aa] px-4 py-2 rounded-lg text-white border border-[#00a0aa] text-sm">
                Book Your Appoinment
              </button>
            </div>
          </div>
              <div className="bg-white shadow-md p-2 rounded-md">
            <div className="grid grid-cols-3 gap-0 md:gap-5 lg:gap-0 mb-4">
              <img
                className="w-28 md:w-full lg:w-28 h-full rounded-lg border-teal-500"
                src={Rectangle}
                alt=""
              />

              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-2">
                  <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
                  Dr. Sahajanad Prasad
                  </h1>
                  <p className="text-[#17324A]">
                    {" "}
                    MBBS, MS-{" "}
                    <span className="text-teal-500">General sergery</span>
                  </p>
                </div>

                <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                  Specialization
                </h3>

                <div className="flex justify-between gap-3 items-center mb-3">
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">General surgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Neurosurgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Orthopedic Surgeon</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <IoBagAdd></IoBagAdd>13yr+ 
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <BiSolidUserPin></BiSolidUserPin> 2K
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <HiLocationMarker></HiLocationMarker> Patna
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <button className="w-full border border-[#00a0aa] px-4 py-2 rounded-lg text-[#00a0aa] text-sm">
                Call now +98 765 432 10
              </button>
              <button className="w-full bg-[#00a0aa] px-4 py-2 rounded-lg text-white border border-[#00a0aa] text-sm">
                Book Your Appoinment
              </button>
            </div>
          </div>
              <div className="bg-white shadow-md p-2 rounded-md">
            <div className="grid grid-cols-3 gap-0 md:gap-5 lg:gap-0 mb-4">
              <img
                className="w-28 md:w-full lg:w-28 h-full rounded-lg border-teal-500"
                src={Rectangle}
                alt=""
              />

              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-2">
                  <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
                  Dr. Sahajanad Prasad
                  </h1>
                  <p className="text-[#17324A]">
                    {" "}
                    MBBS, MS-{" "}
                    <span className="text-teal-500">General sergery</span>
                  </p>
                </div>

                <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                  Specialization
                </h3>

                <div className="flex justify-between gap-3 items-center mb-3">
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">General surgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Neurosurgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Orthopedic Surgeon</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <IoBagAdd></IoBagAdd>13yr+ 
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <BiSolidUserPin></BiSolidUserPin> 2K
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <HiLocationMarker></HiLocationMarker> Patna
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <button className="w-full border border-[#00a0aa] px-4 py-2 rounded-lg text-[#00a0aa] text-sm">
                Call now +98 765 432 10
              </button>
              <button className="w-full bg-[#00a0aa] px-4 py-2 rounded-lg text-white border border-[#00a0aa] text-sm">
                Book Your Appoinment
              </button>
            </div>
          </div>
              <div className="bg-white shadow-md p-2 rounded-md">
            <div className="grid grid-cols-3 gap-0 md:gap-5 lg:gap-0 mb-4">
              <img
                className="w-28 md:w-full lg:w-28 h-full rounded-lg border-teal-500"
                src={Rectangle}
                alt=""
              />

              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-2">
                  <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
                  Dr. Sahajanad Prasad
                  </h1>
                  <p className="text-[#17324A]">
                    {" "}
                    MBBS, MS-{" "}
                    <span className="text-teal-500">General sergery</span>
                  </p>
                </div>

                <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                  Specialization
                </h3>

                <div className="flex justify-between gap-3 items-center mb-3">
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">General surgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Neurosurgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-[8px] md:text-[9px]">Orthopedic Surgeon</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <IoBagAdd></IoBagAdd>13yr+ 
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <BiSolidUserPin></BiSolidUserPin> 2K
                  </h2>

                  <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    {" "}
                    <HiLocationMarker></HiLocationMarker> Patna
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <button className="w-full border border-[#00a0aa] px-4 py-2 rounded-lg text-[#00a0aa] text-sm">
                Call now +98 765 432 10
              </button>
              <button className="w-full bg-[#00a0aa] px-4 py-2 rounded-lg text-white border border-[#00a0aa] text-sm">
                Book Your Appoinment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
