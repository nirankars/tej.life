import React from 'react'
import HeroSection from './Components/Hero-Section'
import Introduction from './Components/Introduction'
import LetsTalk from './Components/LetsTalk'
import RecentWork from './Components/Recent-Work'
import Working from './Components/Working'

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Introduction/>
      <RecentWork/>
      <Working/>
      <LetsTalk/>
    </>
  )
}

