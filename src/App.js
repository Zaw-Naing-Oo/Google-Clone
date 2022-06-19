import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoutePage from "./components/RoutePage";

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={ darkTheme ? 'dark' : ''}>
      <div className=" bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-200">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <RoutePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
