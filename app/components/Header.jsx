"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Cross } from "@web3uikit/icons";
import Link from "next/link";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("darkMode") === "true"
      : false
  );
  const [scroll, setScroll] = useState(0);
  const [toggle, setToggle] = useState(false); // Moved 'toggle' state here
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    setToggle(false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  // const toggleButtonRef = useRef<any>(null);

  // useEffect(() => {
  //   const handleTouchStart = (e: TouchEvent) => {
  //     const touchTarget = e.target as HTMLElement;
  //     const toggleButtonElement = toggleButtonRef.current;

  //     if (toggleButtonElement && !toggleButtonElement.contains(touchTarget)) {
  //       setToggle(false);
  //     }
  //   };

  //   window.addEventListener("touchstart", handleTouchStart);

  //   return () => {
  //     window.removeEventListener("touchstart", handleTouchStart);
  //   };
  // }, []);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos < currentScrollPos) {
        headerElement.style.transform = "translateY(-100%)";
      } else {
        headerElement.style.transform = "translateY(0)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const navList = [
    {
      icon: "/profile.png",
      url: "#",
      title: "Profile",
    },
    {
      icon: "/projects.png",
      url: "#projects",
      title: "Projects",
    },
    {
      icon: "/skills.png",
      url: "#skills",
      title: "Skills",
    },
    {
      icon: "/awards.png",
      url: "#achievements",
      title: "Achievements",
    },
    {
      icon: "/contact.png",
      url: "#contact",
      title: "Contact",
    },
  ];

  const handleTog = () =>{
    setToggle((prev)=>(!prev));
  }

  const handleToggle = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  return (
    <nav ref={headerRef} className="z-10 top-0 fixed w-full  bg-sky-300  dark:bg-sky-600 sm:h-20 h-16 rounded-b-3xl transition-transform transform duration-200 ease-in-out">
      <ul className="sm:flex hidden"
      >
        {navList.map((list, i) => (
          <a
            href={list.url}
            onClick={handleToggle(list.title)}
            key={i}
            className="flex flex-col items-center py-1 px-3 md:px-6 hover:shadow-2xl"
          >
            <img
              src={"." + list.icon}
              width={36}
              height={36}
              className=" "
              style={{
                backgroundBlendMode: "color-burn",
              }}
              alt={list.title}
            />
            <li className="text-black dark:text-white">{list.title}</li>
          </a>
        ))}
      </ul>

      {!toggle ? (
        <a className="sm:hidden" onClick={handleTog} >
          <div className="px-3 py-4">
            <Menu className="w-6 h-6 rounded-3xl" />
          </div>
        </a>
      ) : (
        <a className="sm:hidden" onClick={handleTog} >
          <div className="px-3 py-4">
            <Cross className="w-6 h-6" />
          </div>
        </a>
      )}

      {toggle ? (
        <ul className="" >
          {navList.map((list, i) => (
            <a  
              href={list.url}
              onClick={handleToggle(list.title)}
              key={i}
              className="flex items-center px-1 py-1 m-3 rounded-full bg-green-300 dark:bg-green-600 w-fit "
            >
              <img
                src={"." + list.icon}
                width={20}
                height={16}
                className=""
                alt={list.title}
              />
              <li className="text-black dark:text-white">{list.title}</li>
            </a>
          ))}
        </ul>
      ) : null}
      <div>
        <Link
          href="https://drive.google.com/file/d/1lvZhj8BMxNYGKK2PQ0qTTfAnzOUUua_3"
          target="_blank"
          className="sm:right-24 sm:top-1 top-1 right-16 absolute text-black font-bold sm:text-xl text-sm dark:text-white flex flex-col items-center hover:shadow-inner"
        >
          <img
            src="./resume.png"
            height={33}
            width={40}
            alt="resume"
            className="sm:hidden"
          />
          <img
            src="./resume.png"
            height={46}
            width={49}
            alt="resume"
            className="hidden sm:flex"
          />
          CV
        </Link>
      </div>

      <button
        onClick={changeMode}
        className="bg-dark fill-teal-50  dark:bg-light  dark:text-white rounded-full absolute w-12 h-13 top-1 right-1 
    sm:hover:p-1 sm:right-3 sm:top-2 sm:w-16 sm:h-16 hover:shadow-2xl"
      >
        {darkMode ? (
          <img
            alt="light"
            src="./light-bulb-off.png"
            width={63}
            height={63}
            className="p-3 animate-pulse"
          />
        ) : (
          <img
            alt="light"
            src="./light-bulb-on.png"
            width={63}
            height={63}
            className="p-3 animate-pulse"
          />
        )}
      </button>
    </nav>
  );
};

export default Header;
