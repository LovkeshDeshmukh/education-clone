import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import Syllabus from './Pages/Syllabus'
import TopResults from './Pages/TopResults'
import TopColleges from './Pages/TopColleges'
import TimeTable from './Pages/TimeTable'
import TopicSheets from './Pages/TopicSheets'
import TestPapers from './Pages/TestPapers'
import CompletedSheets from './Pages/CompletedSheets'
import Questionlist from './SubFolder/Questionlist'
import PracticeQuestion from './SubFolder/PracticeQuestion'

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/syllabus" element={<Syllabus/>} />
        <Route path="/topresults" element={<TopResults/>} />
        <Route path="/topcolleges" element={<TopColleges/>} />
        <Route path="/timetable" element={<TimeTable/>} />
        <Route path="/topicsheets" element={<TopicSheets/>} />
        <Route path="/testpapers" element={<TestPapers/>} />
        <Route path="/completedsheets" element={<CompletedSheets/>} />
        <Route path="/questionlist" element={<Questionlist/>} />
        <Route path="/practicequestion" element={<PracticeQuestion/>} />
      </Routes>
    </>
  );
}
