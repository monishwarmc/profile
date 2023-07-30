"use client"

import Image from "next/image";
import {TabList, Tab, Button} from '@web3uikit/core';

const Profile = () => {

    const socials = [
        {
          icon: '/instagram',
          url: "https://instagram.com/monishwar_m_c",
        },
        {
          icon: '/github',
          url: "https://github.com/monishwarmc",
        },
        {
          icon: '/linkedin',
          url: "https://www.linkedin.com/in/monishwar/",
        },
        {
          icon: '/whatsapp',
          url: "https://wa.me/+919360124835?text=Hello Monishwar!",
        },
        {
          icon: '/mail',
          url: "mailto:monishwar69@gmail.com?subject=HELLO&body=hello monishwar😊,",
        },
        {
          icon: '/telegram',
          url: "https://t.me/monishwar",
        },
        {
          icon: '/twitter',
          url: "https://twitter.com/monishwarmc",
        },
        {
          icon: '/discord',
          url: "https://discord.com/users/monishwar",
        },
      ]
      const web3 =[
        {
          icon: '/solana',
          url: "https://solscan.io/address/AopSES8VMAa9jkrWzZRecqydqYGZL4GRaVfSdR9TV5S1",
        },
        {
          icon: '/xdc',
          url: "https://observer.xdc.org/address/xdc35eb381aa09ad7dccef4efdab647ad4f76c28d4d",
        },
        {
          icon: '/ethereum',
          url: "https://etherscan.io/address/0xdbb63c9be17ce82713849f9680bb08ca48893610",
        },
      ];


  return (
    <div className="flex flex-col items-center text-zinc-800 dark:text-slate-400">
      <br/>
        <Image src='/me.png' width={469} height={469} alt="me"
        className="w-44 h-56 sm:w-80 sm:h-96 mt-6 py-6 rounded-4xl animate-pulsee "
        />
        <h1
        className="sm:text-6xl text-3xl font-bold "
        >Hello</h1>
        <h1
        className="sm:text-6xl text-3xl font-bold sm:py-3 py-1"
        >I am Monishwar M C!</h1>
        
        <h2
        className="sm:text-5xl text-2xl font-bold sm:py-6 py-3 flex"
        >Student @ <a href="https://www.skcet.ac.in/" target="_blank" className="sm:hover:text-6xl sm:text-5xl hover:text-3xl text-2xl hover:no-underline underline flex sm:pl-3 pl-1 animate-pulse">
            <Image alt="skcet" src='/skcet.jpeg' width={43} height={39} className="rounded-full mx-1 my-1 w-9 h-9 sm:w-11 sm:h-11"/>
            SKCET</a></h2>
        <h3
        className="sm:text-4xl text-xl sm:py-3 py-1"
        >
            web3 enthusiast
        </h3>
        <br/>
        <TabList
          defaultActiveKey={1}
          onChange={function noRefCheck(){}}
          tabStyle="bulbUnion"
          className=""
        >
          <Tab
            tabKey={1}
            lineHeight={30}
            tabName={<div className="flex"><span className="text-3xl">Web2</span></div>}
          >
        <div
        className="grid grid-cols-4 gap-3 sm:flex"
        >
          {
            socials.map((social, i) => (
              <div className="animate-pulse hover:animate-bounce hover:p-3" key={i}>
                <a href={social.url} target="_blank" className="sm:flex hidden rounded-3xl w-16 h-16 md:w-28 md:h-28">
                  <Image src={social.icon + ".png"} alt={social.icon} width={43} height={43} className="md:w-24 w-14 h-14 m-2 md:h-24 rounded-full hover:shadow-2xl shadow-teal-300"/>
                </a>
                <a href={social.url} target="_blank" className="sm:hidden grid rounded-3xl w-16 h-16 ">
                  <Image src={social.icon + ".png"} alt={social.icon} width={30} height={30} className="w-11 h-11 m-2 rounded-full hover:shadow-2xl shadow-teal-300"/>
                </a>
              </div>
            ))
          }
        </div>
          </Tab>
          <Tab
            tabKey={2}
            lineHeight={30}
            tabName={<div className="flex"><span className="text-3xl">Web3</span></div>}
          >
        <div className="flex">
        {
            web3.map((social, i) => (
              <div className="flex animate-pulse hover:animate-bounce hover:p-3 w-full" key={i}>
                <a href={social.url} target="_blank" className="sm:flex hidden rounded-full w-16 h-16 md:w-28 md:h-28">
                  <Image src={social.icon + ".png"} alt={social.icon} width={43} height={43} className="md:w-24 w-14 h-14 my-3  md:h-24  rounded-full hover:shadow-2xl shadow-teal-300"/>
                </a>
                <a href={social.url} target="_blank" className="sm:hidden  rounded-full w-16 h-16 ">
                  <Image src={social.icon + ".png"} alt={social.icon} width={30} height={30} className="w-14 h-14 my-4 rounded-full hover:shadow-2xl hover:shadow-teal-300"/>
                </a>
              </div>
            ))
          }
        </div>
          </Tab>
        </TabList>

        <br className="sm:p-1 hidden"/>

    </div>
  )
}

export default Profile