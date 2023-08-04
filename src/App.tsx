import React from "react";
import SavartLogo from "./Assets/savartlogo.svg";
import graph from "./Assets/image 2.png";
import graph2 from "./Assets/image1.png";
import britlogo from "./Assets/britlogo.png";
import lumaxlogo from "./Assets/lumaxlogo.png";
import dmart from "./Assets/dmartlogo.png";
import Searchbar from "./components/Searchbar";
import vector from "./Assets/vector.png";
import incstock from "./Assets/incstock.png";
import laptop from "./Assets/laptop.png"

import Card from "./components/Card";
import { SearchResultsList } from "./components/SearchResultsList";
// import {Data-Searchbar} from './components/Data-Searchbar';

import "./App.css";

function App() {

  const profileList = [
    
    {
      logopath: britlogo,
      title: "Britannia Industries",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
    {
      logopath: lumaxlogo,
      title: "Lumax Industries India Ltd",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
    {
      logopath: dmart,
      title: "D-Mart",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
  ];

  const [results, setResults] = React.useState([]);
  return (
    <>
      <div className="Navbar">
        {/* display:flex flex-direction: column */}
        <div id="Navbar__right">
          <img src={SavartLogo} alt="savartlogo" />
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Benefits</a>
          <a href="#">...</a>
        </div>
        <div id="Navbar__left">
          <a href="tel:+91-9573720665">+91-9573720665</a>
          <button className="button rounded-corners" type="button">
            Get Started
          </button>
        </div>
      </div>
      <div className="Research_Parent">
        <div className="Research">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="Research__text">
              <div className="Research__text-top">
                <h1>
                  Driven by{" "}
                  <span style={{ color: "rgba(40,53,213,1)" }}>Research </span>
                  Accelerated by{" "}
                  <span style={{ color: "rgba(40,53,213,1)" }}>AI.</span>
                </h1>
              </div>

              <div className="Research__text-bottom">
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the
                  <br /> printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="Research__image">
            <div className="Research__image-ellipse"></div>
            <img src={graph} alt="graph" id="img1" />
            <img src={graph2} alt="graph2" id="img2" />
          </div>
        </div>
        <div className="Searchbar">
          <div className="Searchbar__container">
            <Searchbar setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
            <div></div>
          </div>
        </div>
        <div className="Card__Parent">
          
          <p id="Card__Parent-CT">Cu</p>
          <div className="Card__CT-stocks">
          {
             profileList.map((item, index)=>{
              return(
                <div className="Card">
                  <div id="Card__header-bookmark">
                <img src={vector} alt="vector" />
              </div>
            <div className="Card__header">
              <div id="Card__header-logo">
                <img src={item.logopath} alt="britlogo" id="britlogo" key={index}/>
              </div>
              <div id="Card__header-text">
                <p key={index}>
                {item.title} <br />
                  {item.name}
                </p>
              </div>
              
            </div>
            <div className="Card__footer">
              <div id="Card__footer-stockchange">
                <img src={incstock} alt="incstock" />
                <span id="Card__footer-stockchange-text">
                  <span style={{ color: "rgba(0, 184, 107, 1)" }}>
                    +68.70 (1.64&)
                  </span>
                  1D
                </span>
              </div>
              <div id="Card__footer-price">{item.price}</div>
            </div>
          </div>
              )
             })
          }
          </div>
        </div>
             
        <div className="Card__CT-stocks">
          {
             profileList.map((item, index)=>{
              return(
                <div className="Card">
                  <div id="Card__header-bookmark">
                <img src={vector} alt="vector" />
              </div>
            <div className="Card__header">
              <div id="Card__header-logo">
                <img src={item.logopath} alt="britlogo" id="britlogo" key={index}/>
              </div>
              <div id="Card__header-text">
                <p key={index}>
                {item.title} <br />
                  {item.name}
                </p>
              </div>
              
            </div>
            <div className="Card__footer">
              <div id="Card__footer-stockchange">
                <img src={incstock} alt="incstock" />
                <span id="Card__footer-stockchange-text">
                  <span style={{ color: "rgba(0, 184, 107, 1)" }}>
                    +68.70 (1.64&)
                  </span>
                  1D
                </span>
              </div>
              <div id="Card__footer-price">{item.price}</div>
            </div>
          </div>
              )
             })
          }
          </div>

          <div className="Card__CT-stocks">
          {
             profileList.map((item, index)=>{
              return(
                <div className="Card">
                  <div id="Card__header-bookmark">
                <img src={vector} alt="vector" />
              </div>
            <div className="Card__header">
              <div id="Card__header-logo">
                <img src={item.logopath} alt="britlogo" id="britlogo" key={index}/>
              </div>
              <div id="Card__header-text">
                <p key={index}>
                {item.title} <br />
                  {item.name}
                </p>
              </div>
              
            </div>
            <div className="Card__footer">
              <div id="Card__footer-stockchange">
                <img src={incstock} alt="incstock" />
                <span id="Card__footer-stockchange-text">
                  <span style={{ color: "rgba(0, 184, 107, 1)" }}>
                    +68.70 (1.64&)
                  </span>
                  1D
                </span>
              </div>
              <div id="Card__footer-price">{item.price}</div>
            </div>
          </div>
              )
             })
          }
          </div>

          <div className="Gifsection">
              <div>
                <div className="Gifsection__text">
                  <h1>GIF animation explaining the report</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
