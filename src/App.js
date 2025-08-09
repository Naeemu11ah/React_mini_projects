import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Counter from "./projects/counter";
import Card from "./components/card";
import BgColorChange from "./components/bg_color_change";
import PasswordGenerator from "./projects/password_generator";
import CurrencyConverter from "./projects/currency_converter";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={"You Can Nevigate to Projects Through the Navbar"}
            />
            <Route path="counter" element={<Counter />} />
            <Route
              path="cards"
              element={
                <div>
                  <h1 className="text-2xl font-bold my-6">Cards</h1>
                  <div className="flex flex-row gap-6">
                    <Card
                      name="pakistan"
                      pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVM5gGuO0bi26ZO9PDbA3082MeA9IQenWDkg&s"
                    />
                    <Card
                      name="Turkey"
                      pic="https://static.toiimg.com/photo/msid-102933784,width-96,height-65.cms"
                    />
                    <Card
                      name="China"
                      pic="https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2024/09/When_and_how_to_visit_10_spectacular_natural_wonders_of_China-Sunset_in_China's_rainbow_mountain-Kanawa_Studio-Gettyimages-HERO.renditionimage.1700.850.jpg"
                    />
                    <Card
                      name="India"
                      pic="https://cms.musafir.com/uploads/1920x1080_Beauty_of_Taj_Mahal_1_6ca4fe9fe7.jpg"
                    />
                  </div>
                </div>
              }
            />
            <Route path="bg_color_change" element={<BgColorChange />} />
            <Route path="password_generator" element={<PasswordGenerator />} />
            <Route path="currency_converter" element={<CurrencyConverter />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
