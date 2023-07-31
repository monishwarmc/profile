"use client"

import {Accordion, Typography, Slider} from '@web3uikit/core';

const Skills = () => {

  const skills = [
    {
      name: "Java",
      img: '/javal.png',
      level: 90,
      company: 'self learned'
    },
    {
      name: "JavaScript",
      img: '/javaScriptl.png',
      level: 90,
      certificate: '/javaScript.png',
      link: 'https://www.coursera.org/account/accomplishments/certificate/7C7453CCW9A5',
      company: 'Meta',
      companyLogo: '/meta.png'
    },
    {
      name: "Solidity",
      img: '/solidityl.png',
      level: 80,
      certificate: '/solidity.png',
      link: 'https://solscan.io/token/8iRffnw1JDK6M4Tu1ZEZsaxceWYsutdZHEX6Rt4p7oZ5',
      company: 'Meta crafters',
      companyLogo: '/metaCrafters.jpeg'
    },
    {
      name: "postgreSQL",
      img: '/postgreSql.png',
      level: 90,
      certificate: '/sql.png',
      link: 'https://drive.google.com/file/d/15c4JzQsvJGBopR0imzI2WvRNUY2pMjAk/view?usp=drivesdk',
      company: 'AmigosCode',
      companyLogo: '/amigoscode.png'
    },
    {
      name: "HTML & CSS",
      img: '/html&cssl.png',
      level: 90,
      certificate: '/html&css.png',
      link: 'https://www.coursera.org/account/accomplishments/certificate/TRLPCX6UDSQG',
      company: 'Meta',
      companyLogo: '/meta.png'
    },
    {
      name: "React",
      img: '/react.png',
      level: 90,
      certificate: '/reactCert.png',
      link: 'https://www.coursera.org/account/accomplishments/certificate/AMTYECVELL9P',
      company: 'Meta',
      companyLogo: '/meta.png'
    },
    {
      name: "Blockchain",
      img: '/blockchain.png',
      level: 90,
      company: 'self learned'
    },
    {
      name: "Ethereum, Ethers.js, HardHat",
      img: '/ethereum.png',
      level: 80,
      company: 'self learned',
    },
    {
      name: "SpringBoot",
      img: '/springBoot.png',
      level: 50,
      certificate: '/springBootCert.png',
      link: 'https://drive.google.com/file/d/1Ps1_Tzq64yL25GPhcW8MwCWVJleRJJAy/view',
      company: 'AmigosCode',
      companyLogo: '/amigoscode.png'
    },
    {
      name: "Git",
      img: '/github.png',
      level: 90,
      certificate: '/gitCert.png',
      link: 'https://www.coursera.org/account/accomplishments/certificate/PMHNPKWSV8ZK',
      company: 'Meta',
      companyLogo: '/meta.png'
    },
    {
      name: "Internet of things (IOT)",
      img: '/iot.png',
      level: 60,
      certificate: '/iotCert.jpg',
      link: 'https://internalapp.nptel.ac.in/NOC/NOC23/SEM1/Ecertificates/106/noc23-cs52/Course/NPTEL23CS52S2339520804015683.jpg',
      company: 'NPTEL',
      companyLogo: '/nptel.png'
    },
    {
      name: "AWS",
      img: '/aws.png',
      level: 70,
      certificate: '/awsCert.png',
      link: 'https://www.credly.com/badges/a68da050-2966-4c65-b8b9-8dcbca4a62c0/public_url',
      company: 'AWS academy',
      companyLogo: '/awsacademy.png'
    },
  ]
  const types = [
    "Beginner",
    "Novice",
    "Intermediate",
    "Advanced",
    "Expert",
    "Master"
  ];

  return (
    <div className="flex flex-col items-center mt-16 mb-6" id='Skills'>
        <h1 className="sm:text-7xl text-6xl p-3 text-fuchsia-800 text-opacity-90 dark:text-fuchsia-400">skills</h1>
        <section className="flex flex-col items-center">
          {
            skills.map((skill, i) => (
              <Accordion
                key={i}
                hasLockIcon
                id='accordion'
                tagText={<div className='flex'>
                { skill.companyLogo && <img src={"." + skill.companyLogo} className='rounded-full sm:w-9 sm:h-9 w-6 h-6 sm:m-1 '/>}
                <h2 className='text-black sm:text-xl text-md text-sm px-1'>{skill.company}</h2>
                </div>}
                theme="green"
                subTitle={"level ~ "+skill.level +"%"}
                title={<div className='flex'>
                  <img src={"." + skill.img} className='rounded-full w-6 h-6 '/>
                  <h2 className='text-zinc-900 sm:text-xl  font-bold md:px-3'>{skill.name}</h2>
                  </div>}
                className='w-accord-s m-3'
              >
                <div className='flex flex-col items-center'>
                  <section className='w-accord-l px-3'>
                <Slider
                  leftLabel="0"
                  markers={
                    types.map((type, i) => (
                      <Typography key={i} className='sm:text-xl hidden'>{type}</Typography>
                    ))
                  }
                  max={100}
                  min={0}
                  onChange={function noRefCheck(){}}
                  rangeControllerSuffix="%"
                  rightLabel="100"
                  step={1}
                  value={skill.level}
                />
                { skill.link && <a href={skill.link} target='_blank' className='animate-pulse hover:animate-none flex flex-col items-center'>
                <img
                className='rounded-2xl hover:p-3 px-1 pb-6 sm:w-116 w-96'
                src={"." + skill.certificate}
                />
                </a>}
                </section>
                </div>
              </Accordion>
            ))
          }
        
        </section>
        <br/>
    </div>
  )
}

export default Skills