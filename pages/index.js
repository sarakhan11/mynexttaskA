import React, { useState } from "react";
import Image from "next/image";
const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isList2, setIsList2] = useState(false);
  const [isList3, setIsList3] = useState(false);
  const [isList4, setIsList4] = useState(false);
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [count1, setCount1] = useState(1);
  const [count12, setCount12] = useState(0);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);
  const [hide6, setHide6] = useState(false);
  return (
    <div className="justify-center 3xl:container mx-auto onclick">
        <div className="  ">
          <div className="flex flex-wrap cursor-pointer justify-between items-center px-20">
          <Image src="/Group.svg" width={56} height={73} className="my-auto"/>
          <button className="ml-auto block xl:hidden" onClick={() => setShowMenu(!showMenu)}>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
            </button>
            <ul className="xl:flex hidden justify-between">
              <li className="pr-20  cursor-pointer relative">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 text-gray-700 ">Bedroom</a>
                  <div onClick={() => setIsList4(!isList4)} className="pb-1 my-auto">
                  <Image src="/vector.svg" width={8} height={4}/>
                  </div>
                </div>
                <ul
                  className={`${isList4 ? "  flex-col " : "hidden"} absolute z-20 bg-white p-2 w-32 mr-2 shadow`}>
                  <il className="py-2 text-gray-500 hover:text-gray-700 text-base">Beds</il>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Bed Sets</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Bridal</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Chesters</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Dresser</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Shelves</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Side Tables</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">{" "}Closets</li>
                </ul>
              </li>
      
        <li className="pr-16 pl-2 cursor-pointer relative ">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 text-gray-700">Living Room</a>
                  <div onClick={() => setIsList(!isList)} className="pb-1 my-auto">
                  <Image src="/vector.svg" width={8} height={4}/>
                  </div>
                </div>
                <ul
                  className={`${ isList ? "  flex-col " : "hidden"}  absolute z-20 bg-white p-2 w-32 mr-2 shadow`}>
                  <il className="py-2 text-gray-500 hover:text-gray-700 text-base">Beds</il>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Bed Sets</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Bridal</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Chesters</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Dresser</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Shelves</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Side Tables</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">{" "}Closets</li>
                </ul>
              </li>
              <li className="pr-8 cursor-pointer relative">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 text-gray-700">Dining & Kitchen{" "}</a>
                  <div onClick={() => setIsList2(!isList2)} className="pb-1 my-auto">
                  <Image src="/vector.svg" width={8} height={4}/>
                  </div>
                </div>
                <ul
                  className={`${isList2 ? "  flex-col " : "hidden"} absolute z-20 bg-white p-2 w-32 mr-2 shadow`}>
                  <il className="py-2 text-gray-500 hover:text-gray-700 text-base">Beds</il>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Bed Sets</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Bridal</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Chesters</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Dresser</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Shelves</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Side Tables</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">{" "}Closets</li>
                </ul>
              </li>

              <li className="pr-8  cursor-pointer relative">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 text-gray-700">Office</a>
                  <div onClick={() => setIsList3(!isList3)} className="pb-1 my-auto">
                  <Image src="/vector.svg" width={8} height={4}/>
                  </div>
                </div>
                <ul
                  className={`${isList3 ? "  flex-col " : "hidden"}  absolute z-20 bg-white p-2 w-32 mr-2 shadow`}>
                  <il className="py-2 text-gray-500 hover:text-gray-700 text-base">Beds</il>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Bed Sets</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Bridal</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Chesters</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Dresser</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Shelves</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">Side Tables</li>
                  <li className="py-1 text-gray-500 hover:text-gray-700 text-base">{" "}Closets</li>
                </ul>
              </li>
              </ul>
            <ul
              className={`${
                showMenu ? " xl:hidden flex " : "hidden"
              } flex-col w-full px-10 bg-blue-100 rounded-xl my-6  `}>
              <li className="pr-8 cursor-pointer relative pb-4 pt-8">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 ">Bedroom</a>
                  <div onClick={() => setIsList4(!isList4)} className="pb-1 my-auto">
                  <Image src="/vector.svg" width={8} height={4}/>
                  </div>
                </div>
                <ul
                  className={`${isList4 ? "  flex-col " : "hidden"}  z-20 bg-white p-6 shadow`}>
                   <il className="py-4 text-gray-800 hover:text-gray-600">Beds</il>
                  <li className="pt-4 text-gray-800 hover:text-gray-600">Bed Sets</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Bridal</li>
                  <li className="text-gray-800 hover:text-gray-600">Chesters</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Dresser</li>
                  <li className="text-gray-800 hover:text-gray-600">Shelves</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Side Tables</li>
                  <li className="text-gray-800 hover:text-gray-600">{" "}Closets</li>
                </ul>
              </li>
              <li className="pr-8  cursor-pointer relative ">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 ">Living Room</a>
                  <div onClick={() => setIsList(!isList)} className="pb-1 my-auto">
                  <Image src="/vector.svg" width={8} height={4}/>
                  </div>
                </div>
                <ul
                  className={`${isList ? "  flex-col " : "hidden"} z-20 bg-white p-6 shadow`}>
                   <il className="py-4 text-gray-800 hover:text-gray-600">Beds</il>
                  <li className="pt-4 text-gray-800 hover:text-gray-600">Bed Sets</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Bridal</li>
                  <li className="text-gray-800 hover:text-gray-600">Chesters</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Dresser</li>
                  <li className="text-gray-800 hover:text-gray-600">Shelves</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Side Tables</li>
                  <li className="text-gray-800 hover:text-gray-600">{" "}Closets</li>
                </ul>
              </li>
              <li className="pr-8 cursor-pointer relative py-4">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 ">Dining & Kitchen{" "}</a>
                  <div onClick={() => setIsList2(!isList2)} className="pb-1 my-auto">
                  <Image src="/vector.svg" width={8} height={4}/>
                  </div>
                </div>
                <ul
                  className={`${isList2 ? "  flex-col " : "hidden"} z-20 bg-white p-6 shadow`}>
                   <il className="py-4 text-gray-800 hover:text-gray-600">Beds</il>
                  <li className="pt-4 text-gray-800 hover:text-gray-600">Bed Sets</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Bridal</li>
                  <li className="text-gray-800 hover:text-gray-600">Chesters</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Dresser</li>
                  <li className="text-gray-800 hover:text-gray-600">Shelves</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Side Tables</li>
                  <li className="text-gray-800 hover:text-gray-600">{" "}Closets</li>
                </ul>
              </li>

              <li className="pr-8 cursor-pointer relative pb-8">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 ">Office</a>
                  <div onClick={() => setIsList3(!isList3)} className="pb-1 my-auto">
                  <Image src="/vector.svg" width={8} height={4}/>
                  </div>
                </div>
                <ul
                  className={`${isList3 ? "  flex-col " : "hidden"}  p-6  z-20 bg-white shadow`}>
                   <il className="py-4 text-gray-800 hover:text-gray-600">Beds</il>
                  <li className="pt-4 text-gray-800 hover:text-gray-600">Bed Sets</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Bridal</li>
                  <li className="text-gray-800 hover:text-gray-600">Chesters</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Dresser</li>
                  <li className="text-gray-800 hover:text-gray-600">Shelves</li>
                  <li className="py-4 text-gray-800 hover:text-gray-600">Side Tables</li>
                  <li className="text-gray-800 hover:text-gray-600">{" "}Closets</li>
                </ul>
              </li>
            </ul>

            <div className="xl:flex hidden">
              <div><a href="https://www.youtube.com/"><Image src="/Group 6.svg" width={20} height={20}/></a></div>
              <div className="flex pl-8">
                <div className="cursor-pointer">
                <Image src="/Group 260.svg" width={20} height={20}/>
                </div>
                <div>
                  <p id="count" className="text-gray-800 cursor-pointer  leading-none -mt-2 ml-1" >
                    {count12}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {hide1 && (
          <div className="flex px-20 py-40 justify-between">
            <div className=" xl:w-5/12 2xl:w-full ">
              <div>
                <p className="text-4xl font-semibold text-gray-800">Dining Chair Rocco in Bottle Green Velvet</p>
                <div className="items-center flex my-5 text-center gap-x-6">
                  <div className="flex gap-x-4  items-center my-auto text-center">
                    <div className="mt-2"><Image src="/Vectorstar.png" width={22} height={21} /></div>
                  </div>
                  <p className="font-medium text-2xl my-auto text-center"> (0) </p>
                </div>
                <p className="text-4xl  font-semibold text-gray-800 pb-12">$259</p>
              </div>
              <ul>
                <li>
                  <div className="flex">
                    <p className="font-medium text-xl pr-4 text-gray-600">Vendor:</p>
                    <p className="text-2xl font-medium text-gray-800">Luxe</p>
                  </div>
                </li>
                <li className="py-6">
                  <div className="flex">
                    <p className="font-medium text-xl pr-4 text-gray-600">Type:</p>
                    <p className="text-2xl font-medium text-gray-800">Wooden</p>
                  </div>
                </li>
                <li>
                  <div className="flex pb-6">
                    <p className="font-medium text-xl pr-4 text-gray-600">Model:</p>
                    <p className="text-2xl font-medium text-gray-800">WD1234</p>
                  </div>
                </li>
                <li>
                  <div className="flex pb-6">
                    <p className="font-medium text-xl pr-4 text-gray-600">Status</p>
                    <p className="text-2xl font-medium text-gray-800">Availabe</p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-6">
                <div className=" border border-gray-300 flex justify-center flex-row justify-between py-5 px-6   items-center w-28 bg-yellow-50 rounded-xl">
                  <p id="count" className="text-gray-800 cursor-pointer  leading-none font-medium text-2xl">
                    {count1}
                  </p>
                  <div className="flex flex-col gap-y-4 }">
                    <Image src="/Vectorup.png" width={12} height={7} className="rounded-xl" onClick={() => setCount1(count1 + 1)}/>
                    <Image src="/Vectordown.png" width={12} height={7} className="rounded-xl mt-4" onClick={() => setCount1(count1 - 1)}/>
                  </div>
                </div>
                <button className=" py-5 px-6 text-white bg-gray-800 rounded-xl hover:bg-gray-600 text-2xl font--medium">Add to Cart</button>
              </div>
            </div>

            <div className="xl:w-5/12 2xl:w-full  mx-auto sm:mt-0 mt-8">
              <Image src="/Group 307.png" width={448} height={446} className="rounded-xl"/>
            </div>
            <button className="text-gray-800 absolute right-5 top-50 " onClick={() => setHide1(false)}>
              <Image src="/Vectorcross.png" width={24} height={24} className="rounded-xl group-hover:opacity-40 mx-auto"/>
            </button>
          </div>
        )}
        <div className="bg-pink-100 flex pt-20 pb-20 px-24 lg:flex-row md:flex-col sm:flex-col flex-col">
      <div className=" py-20">
        <h1 className="text-6xl font-bold text-gray-900 px-20 w-8/12">The Glory Cambalk Furniture</h1>
        <h3 className="text-base text-gray-700 py-5 px-20 w-8/12">Avoid the hassle of physically visiting a store and order your favorite product with a few clicks online for the best wood furniture design. Free delivery is available.</h3>
        <a href="https://www.bing.com/images/search?q=glory+combat+furniture&form=HDRSC2&first=1&tsc=ImageHoverTitle"><button className=" bg-gray-900 text-white rounded-xl py-4 px-7 text-2xl ml-20">Shop Now</button></a>
      </div>
      <div>
        <Image src="/image 5 (1).png" width={549} height={491} className="pb-20 lg:w-6/12 2xl:w-full w-full mx-auto"/>
      </div>
    </div>
    <div>
        </div>
        <div className="px-48 lg:flex items-center justify-center pt-20 pb-32">
          <h2 className="text-gray-900 text-4xl font-semibold lg:w-6/12 2xl:w-full sm:pb-0 pb-10 ">Why Choose Us?</h2>
          <div className="justify-center flex flex-col items-center lg:w-6/12 2xl:w-full">
            <div className="bg-teal-100 justify-center text-center w-52 py-14 px-6 mb-4  rounded-full outline-offset-4 outline-2 outline-dashed outline-teal-200">
            
            <div className="align-center justify-center pb-2">
              <Image src="/Group 297.svg" width={22} height={18}/>
            </div>
              <p className="font-medium "> SAFE SHIPPING</p>
              <p className="text-gray-600 ">In all major cities across the country</p>
            </div>

            <div className="sm:flex  justify-center">
              <div className="xl:mr-20 lg:mr-6 mr-20 sm:mb-0 mb-4 mr-0 bg-rose-50 justify-center text-center  py-14 xl:px-6 ld:px-4 px-6  rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
              <div className="align-center justify-center pb-2">
                <Image src="/Group 296.svg" width={22} height={18}/>
              </div>
                <p className="font-medium "> COMPETITIVE PRICES</p>
                <p className="text-gray-600 w-40">Quality with affordability ensured</p>
              </div>
              <div className="bg-rose-50 justify-center text-center  py-14  xl:px-6 lg:px-4 px-6   rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
              <div className="align-center justify-center pb-2">
                <Image src="/Group 298.svg" width={22} height={18}/>
              </div>
                <p className="font-medium "> CUSTOMER SUPPORT</p>
                <p className="text-gray-600 w-28 mx-auto">Call us anytime: 111-111-1111</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-20 justify-center">
          <h3 className="text-gray-800 pl-20 font-semibold text-4xl mx-auto ">New Arrivals</h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-16 pb-8 pl-20 gap-8">
            <div className="">
              <Image src="/Rectangle 7 (1).png" width={296} height={346} className="rounded-xl"/>
              <div className="p-2 flex justify-between w-72">
                <p className="text-base font-bold text-gray-600">Sofa</p>
                <p className="text-gray-800 font-medium md:text-xl text-md">$220</p>
              </div>
            </div>
            <div className="">
              <Image src="/Rectangle 8 (1).png" width={296} height={346} className="rounded-xl"/>
              <div className="p-2 flex justify-between w-72 ">
                <p className="text-base font-bold text-gray-600">Lamp</p>
                <p className="text-gray-800 font-medium md:text-xl text-md">$90</p>
              </div>
            </div>

            <div className="">
              <Image src="/Rectangle 9.png" width={296} height={346} className="rounded-xl"/>
              <div className="p-2 flex justify-between w-72">
                <p className="text-base font-bold text-gray-600">Dining Table</p>
                <p className="text-gray-800 font-medium md:text-xl text-md">$250</p>
              </div>
            </div>
            <div className="">
              <Image src="/Rectangle 15.png" width={296} height={346} className="rounded-xl"/>
              <div className="p-2 flex justify-between w-72">
                <p className="text-base font-bold text-gray-600">Office Chair</p>
                <p className="text-gray-800 font-medium md:text-xl text-md">$320</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex pb-20 pl-20 pt-20 justify-center ">
          <div className="mt-28 pl-28 mr-24 xl:w-6/12 2xl:w-full ">
            <p className="font-semibold text-4xl text-gray-900 pr-4 font-['Poppins']">Dining Chair Rocco in Bottle Green Velvet</p>
            <a href="https://www.bing.com/images/search?q=chairs&form=HDRSC2&first=1&tsc=ImageHoverTitle"><button className="py-5 mt-12 px-8 bg-gray-800 hover:bg-gray-700 cursor-pointer text-white text-2xl rounded-md">Explore</button></a>
          </div>
          <div className="xl:w-8/12 2xl:w-full mx-auto sm:mt-0 mt-8">
            <Image src="/Group 307.png" width={448} height={446} className="rounded-xl"/>
          </div>
        </div>

        <div className="px-20 mb-28 relative">
          <p className="font-semibold pb-16 text-4xl text-gray-800 pr-4 font-['Poppins']">40% off Products</p>
        {hide && (
            <div className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center" id="modal">
              <div className="flex  mx-auto">
                <Image src="/Rectangle 31 (2).png" width={1000} height={1000} className="rounded-xl group-hover:opacity-40 mx-auto" />
                <button className="text-gray-800 absolute right-5 top-5" onClick={() => setHide(false)}>
                  <Image src="/Vectorcross.png" width={24} height={24} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                </button>
              </div>
            </div>
          )}
          {hide2 && (
            <div className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center" id="modal">
              <div className="flex  mx-auto">
                <Image src="/Rectangle 32 (1).png" width={1000} height={1000} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                <button className="text-gray-800 absolute right-5 top-5" onClick={() => setHide2(false)}>
                  <Image src="/Vectorcross.png" width={24} height={24} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                </button>
              </div>
            </div>
          )}
          {hide3 && (
            <div className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center" id="modal">
              <div className="flex  mx-auto">
                <Image src="/Rectangle 33 91.png" width={1000} height={1000} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                <button className="text-gray-800 absolute right-5 top-5" onClick={() => setHide3(false)}>
                  <Image src="/Vectorcross.png" width={24} height={24} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                </button>
              </div>
            </div>
          )}
          {hide4 && (
            <div className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center" id="modal">
              <div className="flex  mx-auto">
                <Image src="/Rectangle 23 (1).png" width={1000} height={1000} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                <button className="text-gray-800 absolute right-5 top-5" onClick={() => setHide4(false)}>
                  <Image src="/Vectorcross.png" width={24} height={24} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                </button>
              </div>
            </div>
          )}
          {hide5 && (
            <div className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center" id="modal">
              <div className="flex  mx-auto">
                <Image src="/Rectangle 18 (1).png" width={1000} height={1000} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                <button className="text-gray-800 absolute right-5 top-5" onClick={() => setHide5(false)} >
                  <Image src="/Vectorcross.png" width={24} height={24} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                </button>
              </div>
            </div>
          )}
          {hide6 && (
            <div className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center" id="modal">
              <div className="flex  mx-auto">
                <Image src="/Rectangle 30 (1).png" width={1000} height={1000} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                <button className="text-gray-800 absolute right-5 top-5" onClick={() => setHide6(false)}>
                  <Image src="/Vectorcross.png" width={24} height={24} className="rounded-xl group-hover:opacity-40 mx-auto"/>
                </button>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <div className=" px-10 mb-8 bg-yellow-50 relative rounded-xl">
                <div className="mb-8 ">
                <Image src="/Rectangle 17.svg" width={96} height={96} className="-pt-2"/>
                  <p className="text-xl font-medium absolute text-gray-800 top-6 left-16">Beds</p>
                </div>
                <div className="group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 18 (1).png" width={425} height={742} className="rounded-xl"/>
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>
                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300" onClick={() => setHide5(true)}>Preview</button>
                    <button className="md:py-4 py-3 px-3 lg:px-4 xl:px-6 bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300" onClick={() => setCount12(count12 + 1)}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className=" px-10 bg-red-50 relative  rounded-xl">
                <div className="mb-8">
                <Image src="/Rectangle 20.svg" width={96} height={96} className="-pt-2"/>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Sofas</p>
                </div>
                <div className=" group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 30 (1).png" width={425} height={337} className="rounded-xl"/>
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>
                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:py-4 py-3 px-4 lg:px-6 bg-white text-gray-800 rounded-md hover:bg-gray-300" onClick={() => setHide6(true)}>Preview</button>
                    <button className="md:py-4 py-3 px-3 lg:px-4 xl:px-6
                     bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300" onClick={() => setCount12(count12 + 1)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-8 px-10 bg-blue-50 relative  rounded-xl">
                <div className="mb-8">
                <Image src="/Rectangle 20.svg" width={96} height={96} className="-pt-2"/>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Dining</p>
                </div>
                <div className=" group height={642} width={325} justify-center relative pb-10 flex">
                  <div className=" relative height={642} flex">
                    <Image src="/Rectangle 23 (1).png" width={426} height={337} className="rounded-xl"/>
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full rounded-xl group-hover:opacity-60 "></div>
                  </div>
                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:py-4 py-3 px-4 lg:px-6 bg-white text-gray-800 rounded-md hover:bg-gray-300" onClick={() => setHide4(true)}>Preview</button>
                    <button className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300" onClick={() => setCount12(count12 + 1)}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className=" px-10 bg-fuchsia-50 relative  rounded-xl">
                <div className="mb-8">
                <Image src="/Rectangle 20.svg" width={96} height={96} className="-pt-2"/>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Closet</p>
                </div>
                <div className=" group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 32 (1).png" width={426} height={742} className="rounded-xl"/>
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>
                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300" onClick={() => setHide2(true)}>Preview</button>
                    <button className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300" onClick={() => setCount12(count12 + 1)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="px-10 mb-8 bg-red-50 relative rounded-xl">
                <div className="">
                <Image src="/Rectangle 20.svg" width={96} height={96} className="-pt-2"/>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Chairs</p>
                </div>
                <div className="group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 31 (2).png" width={425} height={742} className="rounded-xl"/>
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>
                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300" onClick={() => setHide(true)}>Preview</button>
                    <button className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300" onClick={() => setCount12(count12 + 1)}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className=" px-10 bg-red-50 relative rounded-xl">
                <div className="mb-8">
                <Image src="/Rectangle 20.svg" width={96} height={96} className="-pt-2"/>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Tables</p>
                </div>
                <div
                  className="group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 33 (1).png" width={425} height={337} className="rounded-xl"/>
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full rounded-xl group-hover:opacity-60 "></div>
                  </div>
                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:py-4 py-3 px-4 lg:px-6 bg-white text-gray-800 rounded-md hover:bg-gray-300" onClick={() => setHide3(true)}>Preview</button>
                    <button className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300" onClick={() => setCount12(count12 + 1)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <div className=" py-20 px-20 items-center">
      <h1 className="text-4xl text-gray-900 py-10 w-3/5 font-semibold">Top Selling Items</h1>
      <div className="flex pb-20 justify-between items-center pr-20 lg:flex-row md-flex-col sm:flex-col flex-col sm:px-1 md:px-1 px-1">
      <Image src="/Rectangle 14 (1).png" width={624} height={400}/>
          <div className="flex-col ">
          <h1 className="text-4xl text-gray-900 py-1 w-5/6 font-semibold">Lorem ipsum dolor sit amet</h1>
          <h1 className="text-base text-gray-900 py-1 pb-3 w-4/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1> 
          <button className="font-['Poppins'] bg-gray-900 text-white text-xl w-40 rounded-md bold py-4 px-5 ">Explore</button>
          </div>
      </div>

      <div className="flex justify-between items-center pr-20 lg:flex-row md-flex-col sm:flex-col flex-col sm:px-1 md:px-1 px-1">
      <div className="flex-col lg:pl-20 md:pl-1 sm:pl-1">
          <h1 className="text-4xl text-gray-900 py-1 w-5/6 font-semibold">Lorem ipsum dolor sit amet</h1>
          <h1 className="text-base text-gray-900 py-1 pb-3 w-4/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1> 
          <button className="font-['Poppins'] bg-gray-900 text-white text-xl rounded-md bold py-4 px-5 w-40">Explore</button>
      </div>
      <Image src="/Rectangle 13 (1).png" width={624} height={400}/>
      </div>
      </div>

      <div className="px-10 py-10 ">
      <h1 className="text-3xl text-gray-900 py-1 w-4/5 font-semibold">Certified By</h1>
      <div className="flex justify-between py-5 lg:flex-row md:flex-row sm:flex-col flex-col ">
      <Image src="/Californiasfurnitureinstallation Logo.png" width={99} height={40} />
      <Image src="/Urban Galleria Logo.png" width={99} height={40} />
      <Image src="/Group 344.png" width={99} height={40} />
      <Image src="/Furniture Today Logo.png" width={99} height={40} />
      <Image src="/Vector (2).png" width={99} height={40} />
      </div>
      </div>
      </div>
<div className="w-full justify-between">
      <div className="bg-gray-200 p-20">
      <div className="gap-x-16 flex lg:flex-row md:flex-col sm:flex-col flex-col">
    <div className="flex gap-x-16">
      <div className="px-20 gap-x-16">
        <h1 className="bold text-2xl py-4">Information</h1>
        <ul className="text-base cursor-pointer ">
          <li>About</li>
          <li>Store Locator</li>
          <li>Virtual Tour</li>
          <li>Blogs</li>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Authorized Dealers</li>
          <li>Career</li>
          <li>Terms of Offers for Sale</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="px-20">
      <h1 className="bold text-2xl py-4">Contact Info</h1>
      <ul className="cursor-pointer text-base">
        <li><a>111-111-1111</a></li>
        <li><a href="http://localhost:3000/GloryFurniture">complaint@myfurniture.com</a></li>
      </ul>
      </div>
      </div>

      <div className="px-20 flex gap-x-8">

      <div className="cursor-pointer pr-20 gap-x-16">
        <h1 className="bold text-2xl py-4 ">Follow Us</h1>
      <div className="flex gap-3 ">
        <a href="https://twitter.com/i/flow/login"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"/></svg></a>
        <a href="https://www.instagram.com/accounts/login/"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg></a>
        <a href="https://www.facebook.com/login.php"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="24px" height="24px"><path d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757813 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820313 12.292969 C 11.726563 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195313 13.722656 C 6.386719 13.695313 5.628906 13.476563 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914063 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039063 9.136719 21.460938 11.289063 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539063 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z"/></svg></a>
      </div>
      </div>

      <div className="px-20">
        <h1 className="bold text-2xl py-4">Newsletter</h1>
        <p className="text-base pb-5 w-11/12">Subscribe to our newsletter to get the latest news and product updates directly to your email. Just a second to subscribe today</p>
        <form href="#" className="flex">
          <input className="px-10 py-3 rounded-l-xl text-base" type="tel" id="phone" name="phone" placeholder="Email Here" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
          <input className="bg-gray-800 px-3 py-3 rounded-r-xl text-white text-base cursor-pointer" type="submit" value="GO"></input>
        </form>
      </div>
    </div>
  </div>    
</div>
</div>

</div>
);
};
export default Index;
          
