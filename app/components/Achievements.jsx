"use client"

import {Hero, Typography, Button} from '@web3uikit/core';
import {ArrowCircleRight} from '@web3uikit/icons';
import React from 'react';

const Achievements = () => {
  return (
    <div className="flex flex-col items-center" id="Achievements">
        
        <h1 className="sm:text-7xl text-5xl dark:text-zinc-300 text-zinc-900 p-6 pb-9">
            Achievements
        </h1>

        <Hero
            align="right"
            backgroundColor="#39c9e2a9"
            customImage={{
              url: './linkBinTransparent.png'
            }}
            height="300px"
            padding="60px"
            rounded="20px"
            className='dark:bg-dark shadow-xl md:w-969 s:w-113 w-90'
          >
            <React.Fragment key=".0">
              <Typography
                color="#FFFFFF"
                variant="h2"
              >
                winner
              </Typography>
              <Typography
                color="#FFFFFF"
                variant="h1"
              >
                Chainlink Spring hackathon 2023
              </Typography>
              <a href='https://devpost.com/software/linkbin' target='_blank' className='animate-pulse'>
              <Button
                customize={{
                  backgroundColor: 'transparent',
                  border: '2px solid white',
                  color: '#FFFFFF'
                }}
                icon={<ArrowCircleRight fill="#FFFFFF" fontSize={30}/>}
                iconLayout="trailing"
                isTransparent
                text="more about LinkBin"
                theme="custom"
              />
              </a>
            </React.Fragment>
          </Hero>

    </div>
  )
}

export default Achievements