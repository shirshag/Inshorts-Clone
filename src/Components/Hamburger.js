// import React from "react";

// export default function Drawer({ setCategory, isOpen, setIsOpen }) {
//   return (
//     <main
//       className={
//         " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
//         (isOpen
//           ? " transition-opacity opacity-100 duration-500 translate-x-0  "
//           : " transition-all delay-500 opacity-0 translate-x-full  ")
//       }
//     >
//       <section
//         className={
//           " w-screen max-w-xs Left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
//           (isOpen ? " translate-x-0 " : " -translate-x-full ")
//         }
//       >
//         <article className="relative w-screen max-w-xs pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
//           <header className="p-4 font-bold text-lg">Category</header>
//           {setCategory}
//         </article>
//       </section>
//       <section
//         className=" w-screen h-full cursor-pointer "
//         onClick={() => {
//           setIsOpen(false);
//         }}
//       ></section>
//     </main>
//   );
// }

import React from "react";

const Hamburger = ({ isOpen, setIsOpen, setCategory }) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-1/5 p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <ul className="flex flex-col items-start">
        <header className="text-xl font-bold py-5">Category</header>
        <li className="nav-li py-2">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setCategory("business");
              setIsOpen(false);
            }}
          >
            Business
          </a>
        </li>
        <li className="nav-li py-2">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setCategory("entertainment");
              setIsOpen(false);
            }}
          >
            Entertainment
          </a>
        </li>
        <li className="nav-li py-2">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setCategory("general");
              setIsOpen(false);
            }}
          >
            General
          </a>
        </li>
        <li className="nav-li py-2">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setCategory("health");
              setIsOpen(false);
            }}
          >
            Health
          </a>
        </li>
        <li className="nav-li py-2">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setCategory("science");
              setIsOpen(false);
            }}
          >
            Science
          </a>
        </li>
        <li className="nav-li py-2">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setCategory("sports");
              setIsOpen(false);
            }}
          >
            Sports
          </a>
        </li>
        <li className="nav-li py-2">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setCategory("technology");
              setIsOpen(false);
            }}
          >
            Technology
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Hamburger;
