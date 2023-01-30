import React from "react";
import LetsTalk from "../Home/Components/LetsTalk";
import RecentWork from "./Components/Recent-Work"
import WorkAdditional from "./Components/Work-Additional";
import WorkIntro from "./Components/Work-Intro";

export default function Work() {
  return (
    <>
    <WorkIntro/>
    <RecentWork/>
    <WorkAdditional/>
    <LetsTalk/>
    </>
  );
}
