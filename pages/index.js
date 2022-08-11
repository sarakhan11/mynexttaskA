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
          <svg width="56" height="73" viewBox="0 0 56 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.4173 20.9156C52.1161 27.6366 48.1539 33.7608 42.9939 38.5684C41.4392 40.017 39.7015 41.3876 37.6422 41.8735C36.9636 42.0324 36.2349 42.0924 35.577 41.8525C34.0193 41.2916 33.4174 39.3332 33.5 37.6567C33.5826 35.9772 34.1225 34.3157 33.9249 32.6481C33.8393 31.9254 33.6003 31.1966 33.1076 30.6657L33.1047 30.6627C32.9365 30.4828 32.7212 30.3478 32.4881 30.2788C31.5735 30.0089 30.5114 30.2458 29.5732 30.5548C27.8916 31.1066 26.263 31.8354 24.726 32.7231C22.8437 33.8118 21.0381 35.1644 18.9199 35.6263C18.1646 35.7912 17.3651 35.8332 16.6393 35.5663C15.1465 35.0205 14.3647 33.3229 14.1493 31.7244C13.751 28.7583 14.763 25.7801 16.0758 23.1019C18.9848 17.1696 23.4338 12.1251 28.4462 7.88734C32.6031 4.37236 37.3324 1.30126 42.6488 0.290549C44.5369 -0.0693464 46.5136 -0.156321 48.3605 0.386521C52.1486 1.4992 54.8304 5.18813 55.6564 9.10799C56.4855 13.0278 55.7125 17.1307 54.4173 20.9156Z" fill="#EE5A3C"/>
<path d="M27.3697 59.5988V60.9184C27.3785 60.9634 27.3844 61.0144 27.3815 61.0654C27.3785 61.1523 27.3756 61.2393 27.3726 61.3233C29.8744 64.1305 32.3704 66.9377 34.8722 69.7418C34.9813 69.7059 35.1052 69.6849 35.2439 69.6849C36.7102 69.6849 36.7072 72.0002 35.2439 72.0002C34.4326 72.0002 34.0697 71.2954 34.1582 70.6596C31.8777 68.1013 29.6001 65.5401 27.3195 62.9818C27.2517 65.1892 27.231 67.3935 27.2635 69.6009C28.0069 70.1737 27.7798 71.7003 26.5908 71.7003C25.2986 71.7003 25.1452 69.9128 26.1217 69.4809C26.0922 67.3216 26.107 65.1622 26.1748 63.0058C24.1893 65.3751 22.2569 67.7894 20.3894 70.2487C20.5634 70.9145 20.2094 71.7423 19.3332 71.7423C17.864 71.7423 17.8669 69.4269 19.3332 69.4269C19.4187 69.4269 19.4984 69.4359 19.5692 69.4509C21.717 66.6287 23.9356 63.8606 26.2309 61.1613C26.2309 61.1583 26.2338 61.1583 26.2338 61.1553V59.6108C7.8626 59.2179 3.16875 39.4207 5.11001 37.1563C5.50535 36.6945 6.0541 36.5835 6.67365 36.6975L6.63825 36.9044C6.63825 36.9044 9.68881 45.9618 14.3502 49.6387C18.5278 52.9317 25.4992 53.0337 26.9035 53.0187C28.3049 53.0337 35.2793 52.9317 39.4569 49.6387C44.1183 45.9618 47.219 36.7694 47.219 36.7694L47.2396 36.6885C47.5199 36.7514 47.7766 36.8984 47.9949 37.1563C49.9126 39.4027 45.322 58.855 27.3697 59.5988Z" fill="#353A68" stroke="#353A68" stroke-width="1.5438" stroke-miterlimit="10"/>
<path d="M26.7921 59.6223C26.7092 59.6223 26.6263 59.6223 26.5464 59.6194" stroke="#353A68" stroke-width="1.5438" stroke-miterlimit="10"/><path d="M6.67067 36.7032C7.86553 36.9192 9.3318 37.9659 10.5296 38.9916C11.6832 39.9813 13.471 39.1685 13.4887 37.636C13.5536 31.9796 9.03088 25.5975 4.57009 18.7535C-0.843624 10.4549 2.62292 2.68113 10.1726 5.72524C16.9258 8.44245 24.8914 8.6134 26.4993 8.6224C26.5288 8.6224 26.5613 8.6224 26.5937 8.6224C26.7206 8.6224 26.7885 8.6224 26.7885 8.6224" stroke="#353A68" stroke-width="1.5438" stroke-miterlimit="10"/><path d="M27.1491 53.0186C27.1491 53.0186 27.0603 53.0249 26.8975 53.0249" stroke="#353A68" stroke-width="1.5438" stroke-miterlimit="10"/><path d="M26.5472 59.6194C26.4673 59.6223 26.3844 59.6223 26.3015 59.6223" stroke="#353A68" stroke-width="1.5438" stroke-miterlimit="10"/><path d="M47.2307 36.694C46.1096 36.4391 44.5873 37.5368 43.3423 38.6975C42.2212 39.7442 40.4009 38.9974 40.3448 37.4528C40.1501 31.8445 44.0946 25.5463 48.5259 18.7533C53.9396 10.4517 50.473 2.68094 42.9233 5.72205C36.1731 8.43926 28.2045 8.61021 26.5966 8.61921C26.5612 8.61921 26.5317 8.61921 26.5022 8.61921C26.3754 8.61921 26.3075 8.61921 26.3075 8.61921" stroke="#353A68" stroke-width="1.5438" stroke-miterlimit="10"/><path d="M26.8983 53.0249C26.7355 53.0249 26.6467 53.0186 26.6467 53.0186" stroke="#353A68" stroke-width="1.5438" stroke-miterlimit="10"/><path d="M11.45 7.71948L11.2198 24.3886L10.9927 7.71948H11.45Z" fill="#353A68"/><path d="M5.396 15.853L16.7515 16.084L5.396 16.3179V15.853Z" fill="#353A68"/>
<path d="M14.7866 10.9614C12.5356 14.3474 10.3967 17.8144 8.37573 21.3534C10.2639 17.7394 12.276 14.1885 14.4031 10.7095L14.7866 10.9614Z" fill="#353A68"/><path d="M7.63524 11.2703C10.1607 14.4403 12.6094 17.6764 14.9755 20.9694C12.4884 17.7694 9.92464 14.6353 7.28711 11.5672L7.63524 11.2703Z" fill="#353A68"/><path d="M5.75585 26.5L5.52868 35.1225L5.30151 26.5H5.75585Z" fill="#353A68"/><path d="M0.593018 30.5579L9.07795 30.7888L0.593018 31.0197V30.5579Z" fill="#353A68"/><path d="M7.89767 27.7176L3.20972 34.4807L7.51709 27.4597L7.89767 27.7176Z" fill="#353A68"/><path d="M2.8204 27.5015C4.67316 29.5709 6.47281 31.6883 8.21346 33.8536C6.35775 31.7902 4.44894 29.7808 2.49292 27.8224L2.8204 27.5015Z" fill="#353A68"/><path d="M5.26602 15.0945C4.09477 15.0945 4.09182 16.9479 5.26602 16.9479C6.43727 16.9449 6.44022 15.0945 5.26602 15.0945Z" fill="#353A68"/>
<path d="M11.1845 6.82568C10.0132 6.82568 10.0103 8.67915 11.1845 8.67915C12.3587 8.67615 12.3587 6.82568 11.1845 6.82568Z" fill="#353A68"/><path d="M16.8517 15.2231C15.6805 15.2231 15.6775 17.0766 16.8517 17.0766C18.023 17.0736 18.0259 15.2231 16.8517 15.2231Z" fill="#353A68"/><path d="M11.3112 23.2339C10.1399 23.2339 10.137 25.0873 11.3112 25.0873C12.4824 25.0873 12.4854 23.2339 11.3112 23.2339Z" fill="#353A68"/><path d="M42.7107 13.0967L42.4835 23.7466L42.2563 13.0967H42.7107Z" fill="#353A68"/><path d="M40.6278 15.886C42.1589 17.5655 43.6311 19.296 45.0472 21.0715C43.519 19.398 41.9347 17.7754 40.3032 16.2099L40.6278 15.886Z" fill="#353A68"/><path d="M44.3479 15.835C43.0379 17.5925 41.7782 19.389 40.5715 21.2275C41.6484 19.308 42.7842 17.4216 43.9761 15.5681L44.3479 15.835Z" fill="#353A68"/><path d="M40.3298 18.0784L44.7936 18.3093L40.3298 18.5402V18.0784Z" fill="#353A68"/><path d="M40.9642 20.4656C40.2325 20.4656 40.2295 21.6232 40.9642 21.6232C41.6958 21.6232 41.6988 20.4656 40.9642 20.4656Z" fill="#353A68"/><path d="M44.1917 15.0583C43.46 15.0583 43.4571 16.216 44.1917 16.216C44.9263 16.216 44.9263 15.0583 44.1917 15.0583Z" fill="#353A68"/><path d="M42.5778 12.647C41.8461 12.647 41.8432 13.8046 42.5778 13.8046C43.3095 13.8046 43.3124 12.647 42.5778 12.647Z" fill="#353A68"/><path d="M3.52568 33.7188C2.79402 33.7188 2.79107 34.8764 3.52568 34.8764C4.25735 34.8764 4.2603 33.7188 3.52568 33.7188Z" fill="#353A68"/><path d="M5.51983 34.5854C4.78816 34.5854 4.78521 35.7431 5.51983 35.7431C6.25149 35.7431 6.25149 34.5854 5.51983 34.5854Z" fill="#353A68"/><path d="M8.08379 33.4277C7.35213 33.4277 7.34918 34.5854 8.08379 34.5854C8.81545 34.5854 8.81545 33.4277 8.08379 33.4277Z" fill="#353A68"/><path d="M7.70317 26.8657C6.97151 26.8657 6.96856 28.0234 7.70317 28.0234C8.43484 28.0204 8.43779 26.8657 7.70317 26.8657Z" fill="#353A68"/><path d="M2.9561 27.3457C2.22444 27.3457 2.22149 28.5034 2.9561 28.5034C3.68777 28.5034 3.68777 27.3457 2.9561 27.3457Z" fill="#353A68"/><path d="M5.2603 22.6369C4.7263 22.6459 2.77324 22.8528 2.63163 25.5461V25.855C2.63163 25.783 2.62867 25.714 2.62867 25.648C2.62867 25.714 2.62572 25.783 2.62572 25.855V25.5461C2.48706 22.8588 0.536946 22.6429 0 22.6369C2.09763 22.5409 2.56672 20.2376 2.62572 19.8717V19.8237C2.62572 19.8237 2.62867 19.8327 2.62867 19.8447C2.63162 19.8327 2.63163 19.8237 2.63163 19.8237V19.8717C2.69358 20.2376 3.16267 22.5439 5.2603 22.6369Z" fill="#353A68"/>
<path d="M12.6477 35.7583C12.2878 35.7643 10.9601 35.9052 10.8657 37.7317V37.9416C10.8657 37.8937 10.8657 37.8457 10.8628 37.8007C10.8628 37.8457 10.8598 37.8937 10.8598 37.9416V37.7317C10.7654 35.9112 9.44371 35.7643 9.07788 35.7583C10.4999 35.6923 10.8185 34.1327 10.8598 33.8838V33.8508C10.8598 33.8508 10.8598 33.8568 10.8628 33.8658C10.8628 33.8568 10.8657 33.8508 10.8657 33.8508V33.8838C10.9041 34.1327 11.2227 35.6953 12.6477 35.7583Z" fill="#353A68"/><path d="M49.0569 30.4528C48.5229 30.4618 46.5699 30.6688 46.4283 33.362V33.6709C46.4283 33.5989 46.4253 33.5299 46.4253 33.464C46.4224 33.5299 46.4224 33.5989 46.4224 33.6709V33.362C46.2837 30.6748 44.3336 30.4588 43.7966 30.4528C45.8943 30.3569 46.3634 28.0535 46.4224 27.6876V27.6396C46.4224 27.6396 46.4253 27.6486 46.4253 27.6606C46.4283 27.6486 46.4283 27.6396 46.4283 27.6396V27.6876C46.4902 28.0535 46.9564 30.3599 49.0569 30.4528Z" fill="#353A68"/><path d="M49.9919 25.1445C49.632 25.1505 48.3044 25.2915 48.21 27.1179V27.3279C48.21 27.2799 48.21 27.2319 48.207 27.1869C48.207 27.2319 48.2041 27.2799 48.2041 27.3279V27.1179C48.1097 25.2975 46.788 25.1505 46.4221 25.1445C47.8441 25.0785 48.1628 23.519 48.2041 23.2701V23.2371C48.2041 23.2371 48.2041 23.2431 48.207 23.2521C48.207 23.2431 48.21 23.2371 48.21 23.2371V23.2701C48.2513 23.516 48.5699 25.0785 49.9919 25.1445Z" fill="#353A68"/>
</svg>

          <button className="ml-auto block xl:hidden" onClick={() => setShowMenu(!showMenu)}>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
            </button>
            <ul className="xl:flex hidden justify-between">
              <li className="pr-20  cursor-pointer relative">
                <div className="flex items-center ">
                  <a className="font-bold text-base leading-4 font-['Poppins'] pr-2 text-gray-700 ">Bedroom</a>
                  <div onClick={() => setIsList4(!isList4)} className="p-2 my-auto">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5 5L9 1" stroke="#1B2937" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
                  <div onClick={() => setIsList(!isList)} className="p-2 my-auto">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5 5L9 1" stroke="#1B2937" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
                  <div onClick={() => setIsList2(!isList2)} className="p-2 my-auto">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5 5L9 1" stroke="#1B2937" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
                  <div onClick={() => setIsList3(!isList3)} className="p-2 my-auto">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5 5L9 1" stroke="#1B2937" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
                  <div onClick={() => setIsList4(!isList4)} className="pb-2">
                    <Image src="/Vector.png" width={8} height={4} className="my-auto"/>
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
                  <div onClick={() => setIsList(!isList)} className="pb-2">
                    <Image src="/Vector.png" width={8} height={4} className="my-auto"/>
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
                  <div onClick={() => setIsList2(!isList2)} className="pb-2">
                    <Image src="/Vector.png" width={8} height={4} className="my-auto"/>
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
                  <div onClick={() => setIsList3(!isList3)} className="pb-2">
                    <Image src="/Vector.png" width={8} height={4} className="my-auto"/>
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
              <div><a href="https://www.youtube.com/"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.18177 1C7.56357 1 5.98171 1.47985 4.63622 2.37887C3.29074 3.27789 2.24206 4.55571 1.6228 6.05073C1.00354 7.54574 0.841519 9.19082 1.15721 10.7779C1.47291 12.365 2.25215 13.8229 3.39639 14.9671C4.54063 16.1113 5.99848 16.8906 7.58558 17.2063C9.17269 17.522 10.8178 17.3599 12.3128 16.7407C13.8078 16.1214 15.0856 15.0728 15.9847 13.7273C16.8837 12.3818 17.3635 10.7999 17.3635 9.18174C17.3634 7.01185 16.5013 4.93087 14.967 3.39653C13.4326 1.86219 11.3517 1.00014 9.18177 1Z" stroke="#1B2937" stroke-width="2" stroke-miterlimit="10"/>
<path d="M15.2859 15.2859L21 20.9999" stroke="#1B2937" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</svg></a></div>
              <div className="flex pl-8">
                <div className="cursor-pointer">
                <svg onClick={() => setHide1(true)} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.42804 21.0001C7.87182 21.0001 8.23157 20.593 8.23157 20.091C8.23157 19.5889 7.87182 19.1819 7.42804 19.1819C6.98426 19.1819 6.62451 19.5889 6.62451 20.091C6.62451 20.593 6.98426 21.0001 7.42804 21.0001Z" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6777 21.0001C19.1214 21.0001 19.4812 20.593 19.4812 20.091C19.4812 19.5889 19.1214 19.1819 18.6777 19.1819C18.2339 19.1819 17.8741 19.5889 17.8741 20.091C17.8741 20.593 18.2339 21.0001 18.6777 21.0001Z" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 1H4.2141L6.62468 16.4545H19.4811" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.62463 12.8182H19.1516C19.2445 12.8182 19.3346 12.7819 19.4065 12.7153C19.4784 12.6486 19.5276 12.5559 19.5458 12.4528L20.9922 4.27104C21.0039 4.20507 21.0024 4.13699 20.988 4.07171C20.9736 4.00643 20.9466 3.94559 20.9089 3.89356C20.8711 3.84154 20.8237 3.79964 20.7699 3.77089C20.7162 3.74214 20.6574 3.72725 20.598 3.7273H5.01758" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
            
            <div className="align-center justify-center pl-16 pb-2">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 1H1V14H16V1Z" fill="#1B2937" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 6H20L23 9.00001V14H16V6Z" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 19C6.88071 19 8 17.8807 8 16.5C8 15.1193 6.88071 14 5.5 14C4.11929 14 3 15.1193 3 16.5C3 17.8807 4.11929 19 5.5 19Z" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 19C19.8807 19 21 17.8807 21 16.5C21 15.1193 19.8807 14 18.5 14C17.1193 14 16 15.1193 16 16.5C16 17.8807 17.1193 19 18.5 19Z" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              <p className="font-medium "> SAFE SHIPPING</p>
              <p className="text-gray-600 ">In all major cities across the country</p>
            </div>

            <div className="sm:flex  justify-center">
              <div className="xl:mr-20 lg:mr-6 mr-20 sm:mb-0 mb-4 mr-0 bg-rose-50 justify-center text-center  py-14 xl:px-6 ld:px-4 px-6  rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
              <div className="align-center justify-center pl-16 pb-2">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1V19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1667 4.27271H3.91667C3.14312 4.27271 2.40125 4.57441 1.85427 5.11144C1.30729 5.64848 1 6.37685 1 7.13633C1 7.89582 1.30729 8.62419 1.85427 9.16123C2.40125 9.69826 3.14312 9.99996 3.91667 9.99996H8.08333C8.85688 9.99996 9.59875 10.3017 10.1457 10.8387C10.6927 11.3757 11 12.1041 11 12.8636C11 13.6231 10.6927 14.3515 10.1457 14.8885C9.59875 15.4255 8.85688 15.7272 8.08333 15.7272H1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                <p className="font-medium "> COMPETITIVE PRICES</p>
                <p className="text-gray-600 w-40">Quality with affordability ensured</p>
              </div>
              <div className="bg-rose-50 justify-center text-center  py-14  xl:px-6 lg:px-4 px-6   rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
              <div className="align-center justify-center pl-16 pb-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" fill="#1B2937" stroke="#1B2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 4.59998V9.99996L13.6 11.8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
              <div className="px-10 mb-8 bg-yellow-50 relative rounded-xl">
                <div className="mb-8 ">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1_231)"><path d="M2 1H98V73.5854L50 97L2 73.5854V1Z" fill="white"/></g><defs><filter id="filter0_d_1_231" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_231"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_231" result="shape"/></filter></defs></svg>
                  <p className="text-xl font-medium absolute text-gray-800 top-6 left-16">Beds</p>
                </div>
                <div className="group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative  height={642} flex">
                    <Image src="/Rectangle 18 (1).png" width={325} height={642} className="rounded-xl"/>
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
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1_231)"><path d="M2 1H98V73.5854L50 97L2 73.5854V1Z" fill="white"/></g><defs><filter id="filter0_d_1_231" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_231"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_231" result="shape"/></filter></defs></svg>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Sofas</p>
                </div>
                <div className=" group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 30 (1).png" width={325} height={237} className="rounded-xl"/>
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
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1_231)"><path d="M2 1H98V73.5854L50 97L2 73.5854V1Z" fill="white"/></g><defs><filter id="filter0_d_1_231" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_231"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_231" result="shape"/></filter></defs></svg>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Dining</p>
                </div>
                <div className=" group height={642} width={325} justify-center relative pb-10 flex">
                  <div className=" relative height={642} flex">
                    <Image src="/Rectangle 23 (1).png" width={326} height={237} className="rounded-xl"/>
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
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1_231)"><path d="M2 1H98V73.5854L50 97L2 73.5854V1Z" fill="white"/></g><defs><filter id="filter0_d_1_231" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_231"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_231" result="shape"/></filter></defs></svg>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Closet</p>
                </div>
                <div className=" group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 32 (1).png" width={326} height={642} className="rounded-xl"/>
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
                  <svg className="mb-8 z-6 top-0 2xl:left-20 -mt-1"  width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1_231)"><path d="M2 1H98V73.5854L50 97L2 73.5854V1Z" fill="white"/></g><defs><filter id="filter0_d_1_231" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_231"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_231" result="shape"/></filter></defs></svg>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Chairs</p>
                </div>
                <div className="group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 31 (2).png" width={325} height={642} className="rounded-xl"/>
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>
                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300" onClick={() => setHide(true)}>Preview</button>
                    <button className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300" onClick={() => setCount12(count12 + 1)}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className=" px-10 bg-red-50 relative  rounded-xl">
                <div className="mb-8">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1_231)"><path d="M2 1H98V73.5854L50 97L2 73.5854V1Z" fill="white"/></g><defs><filter id="filter0_d_1_231" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_231"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_231" result="shape"/></filter></defs></svg>
                  <p className="text-xl font-medium absolute top-6 text-gray-800 left-16">Tables</p>
                </div>
                <div
                  className="group height={642} width={325} justify-center relative pb-10 flex">
                  <div className="relative height={642} flex">
                    <Image src="/Rectangle 33 (1).png" width={325} height={237} className="rounded-xl"/>
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
          
