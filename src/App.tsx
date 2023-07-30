import React from "react";
import Sidebar  from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Data from "./Components/Data";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="bg-zinc-950">
      <div className="ml-40">
    <Navbar/>
    <div className="flex items-center justify-center ">
    <Data/>
    </div>
    </div>
    <Sidebar />
    </div>
  );
};

export default App;
