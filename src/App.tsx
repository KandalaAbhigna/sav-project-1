import React, { useState } from "react";
import SavartLogo from "./Assets/savartlogo.svg";
import graph from "./Assets/image 2.png";
import graph2 from "./Assets/image1.png";
import britlogo from "./Assets/britlogo.png";
import lumaxlogo from "./Assets/lumaxlogo.png";
import dmart from "./Assets/dmartlogo.png";
import Searchbar from "./components/Searchbar";
import vector from "./Assets/vector.png";
import incstock from "./Assets/incstock.png";
import laptop from "./Assets/laptop.png";
// import down-arrowl from "./Assets/down-arrowl.png";
import Card from "./components/Card";
import { SearchResultsList } from "./components/SearchResultsList";
// import {Data-Searchbar} from './components/Data-Searchbar';

import "./App.css";
import { keyframes } from "styled-components";

function App() {
  const profileList = [
    {
      id: 0,
      logopath: britlogo,
      title: "Britannia Industries",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
    {
      id: 1,
      logopath: lumaxlogo,
      title: "Lumax Industries India Ltd",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
    {
      id: 2,
      logopath: dmart,
      title: "D-Mart",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
    {
      id: 3,
      logopath: dmart,
      title: "D-Mart",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
    {
      id: 4,
      logopath: dmart,
      title: "D-Mart",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
  ];

  const addAnimation = () => `
      @keyframes move-eye { 
         from {
           margin-left: -20%;
         }
        to {
          margin-left: 100%;
        }
      }
    `;

  const [currentIndex, setCurrentIndex] = useState(0);
  const divname = document.getElementById("Card") as HTMLDivElement | null;
  const clickNext = () => {
    // alert('one');
    if (currentIndex + 3 < profileList.length) {
      setCurrentIndex(currentIndex + 1);
      divname.style.animation = "1s linear  move-eye";
    }
  };

  const clickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const [results, setResults] = React.useState([]);

  const visibleElements = profileList.slice(currentIndex, currentIndex + 3);
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
            <div className="outside_ellipse">
              <div className="Research__image-ellipse">
                <div className="imgdiv">
                  <img src={graph} alt="graph" id="img1" />
                  <img src={graph2} alt="graph2" id="img2" />
                </div>
              </div>
            </div>
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
          <div className="Card__main-div">
        <div className="Card__Parent">
          <div id="Card__Parent-CT">
            <div>
              <p>Currently Trending</p>
            </div>
            {/* const onClick = useContext() */}
            <div className="Card__Parent-leftright-buttons" typeof="button">
              <button
                id="left-button"
                // onClick={() => {
                //   document.getElementsByClassName(
                //     "Card__CT-stocks"
                //   ).scrollLeft += 20;
                // }}
                onClick={clickPrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M16.5684 2.48409L6.81835 12.2341C6.6071 12.4453 6.50104 12.7226 6.50104 12.9999C6.50104 13.2772 6.6071 13.5546 6.81835 13.7658L16.5684 23.5158C16.992 23.9394 17.6767 23.9394 18.1003 23.5158C18.5239 23.0922 18.5239 22.4076 18.1003 21.984L9.11621 12.9999L18.1003 4.01582C18.5239 3.59224 18.5239 2.90768 18.1003 2.48409C17.6767 2.06051 16.992 2.06051 16.5684 2.48409Z"
                    fill="#DBDBDB"
                  />
                </svg>
              </button>
              <button
                id="right-button"
                // onClick={() => {
                //   document.getElementsByClassName(
                //     "Card__CT-stocks"
                //   ).scrollLeft += 20;
                // }}

                onClick={clickNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M9.43162 2.48409L19.1816 12.2341C19.3929 12.4453 19.499 12.7226 19.499 12.9999C19.499 13.2772 19.3929 13.5546 19.1816 13.7658L9.43162 23.5158C9.00803 23.9394 8.3233 23.9394 7.89972 23.5158C7.47614 23.0922 7.47614 22.4076 7.89972 21.984L16.8838 12.9999L7.89972 4.01582C7.47614 3.59224 7.47614 2.90768 7.89972 2.48409C8.3233 2.06051 9.00803 2.06051 9.43162 2.48409Z"
                    fill="#676767"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="Card__CT-stocks">
            {visibleElements.map((item, index) => {
              return (
                <div className="Card" id="Card">
                  <div id="Card__header-bookmark">
                    <img src={vector} alt="vector" />
                  </div>
                  <div className="Card__header">
                    <div id="Card__header-logo">
                      <img
                        src={item.logopath}
                        alt="britlogo"
                        id="britlogo"
                        key={index}
                      />
                    </div>
                    <div id="Card__header-text">
                      <h4 key={index}>
                        {item.title} <br />
                       <p> {item.name}</p>
                      </h4>
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
              );
            })}
          </div>
        </div>


        <div className="Card__Parent">
          <div id="Card__Parent-CT">
            <div>
              <p>Your Bookmarks</p>
            </div>
            {/* const onClick = useContext() */}
            <div className="Card__Parent-leftright-buttons" typeof="button">
              <button
                id="left-button"
                // onClick={() => {
                //   document.getElementsByClassName(
                //     "Card__CT-stocks"
                //   ).scrollLeft += 20;
                // }}
                onClick={clickPrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M16.5684 2.48409L6.81835 12.2341C6.6071 12.4453 6.50104 12.7226 6.50104 12.9999C6.50104 13.2772 6.6071 13.5546 6.81835 13.7658L16.5684 23.5158C16.992 23.9394 17.6767 23.9394 18.1003 23.5158C18.5239 23.0922 18.5239 22.4076 18.1003 21.984L9.11621 12.9999L18.1003 4.01582C18.5239 3.59224 18.5239 2.90768 18.1003 2.48409C17.6767 2.06051 16.992 2.06051 16.5684 2.48409Z"
                    fill="#DBDBDB"
                  />
                </svg>
              </button>
              <button
                id="right-button"
                // onClick={() => {
                //   document.getElementsByClassName(
                //     "Card__CT-stocks"
                //   ).scrollLeft += 20;
                // }}

                onClick={clickNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M9.43162 2.48409L19.1816 12.2341C19.3929 12.4453 19.499 12.7226 19.499 12.9999C19.499 13.2772 19.3929 13.5546 19.1816 13.7658L9.43162 23.5158C9.00803 23.9394 8.3233 23.9394 7.89972 23.5158C7.47614 23.0922 7.47614 22.4076 7.89972 21.984L16.8838 12.9999L7.89972 4.01582C7.47614 3.59224 7.47614 2.90768 7.89972 2.48409C8.3233 2.06051 9.00803 2.06051 9.43162 2.48409Z"
                    fill="#676767"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="Card__CT-stocks">
            {visibleElements.map((item, index) => {
              return (
                <div className="Card" id="Card">
                  <div id="Card__header-bookmark">
                    <img src={vector} alt="vector" />
                  </div>
                  <div className="Card__header">
                    <div id="Card__header-logo">
                      <img
                        src={item.logopath}
                        alt="britlogo"
                        id="britlogo"
                        key={index}
                      />
                    </div>
                    <div id="Card__header-text">
                      <h4 key={index}>
                        {item.title} <br />
                        <p>{item.name}</p>
                      </h4>
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
              );
            })}
          </div>
        </div>


        <div className="Card__Parent">
          <div id="Card__Parent-CT">
            <div>
              <p>Resently Viewed</p>
            </div>
            {/* const onClick = useContext() */}
            <div className="Card__Parent-leftright-buttons" typeof="button">
              <button
                id="left-button"
                // onClick={() => {
                //   document.getElementsByClassName(
                //     "Card__CT-stocks"
                //   ).scrollLeft += 20;
                // }}
                onClick={clickPrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M16.5684 2.48409L6.81835 12.2341C6.6071 12.4453 6.50104 12.7226 6.50104 12.9999C6.50104 13.2772 6.6071 13.5546 6.81835 13.7658L16.5684 23.5158C16.992 23.9394 17.6767 23.9394 18.1003 23.5158C18.5239 23.0922 18.5239 22.4076 18.1003 21.984L9.11621 12.9999L18.1003 4.01582C18.5239 3.59224 18.5239 2.90768 18.1003 2.48409C17.6767 2.06051 16.992 2.06051 16.5684 2.48409Z"
                    fill="#DBDBDB"
                  />
                </svg>
              </button>
              <button
                id="right-button"
                // onClick={() => {
                //   document.getElementsByClassName(
                //     "Card__CT-stocks"
                //   ).scrollLeft += 20;
                // }}

                onClick={clickNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M9.43162 2.48409L19.1816 12.2341C19.3929 12.4453 19.499 12.7226 19.499 12.9999C19.499 13.2772 19.3929 13.5546 19.1816 13.7658L9.43162 23.5158C9.00803 23.9394 8.3233 23.9394 7.89972 23.5158C7.47614 23.0922 7.47614 22.4076 7.89972 21.984L16.8838 12.9999L7.89972 4.01582C7.47614 3.59224 7.47614 2.90768 7.89972 2.48409C8.3233 2.06051 9.00803 2.06051 9.43162 2.48409Z"
                    fill="#676767"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="Card__CT-stocks">
            {visibleElements.map((item, index) => {
              return (
                <div className="Card" id="Card">
                  <div id="Card__header-bookmark">
                    <img src={vector} alt="vector" />
                  </div>
                  <div className="Card__header">
                    <div id="Card__header-logo">
                      <img
                        src={item.logopath}
                        alt="britlogo"
                        id="britlogo"
                        key={index}
                      />
                    </div>
                    <div id="Card__header-text">
                      <h4 key={index}>
                        {item.title} <br />
                        <p>{item.name}</p>
                      </h4>
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
              );
            })}
          </div>
        </div>
        </div>
        

        <div className="Gifsection">
          < div className="Gifsection__text">
            <h1>
              GIF animation
              <br /> explaining the report
            </h1>
            
              <p>Lorem Ipsum is simply dummy text of the printing <br />
              and typesetting industry.</p>
            
          </div>
          <div className="Gifsection__image-laptop" >
            <img src={laptop}></img>
          </div>
        </div>

        <div className="Gifsection__footer">
          <div className="Gifsection__footer-left">
            ©2023 Savart. All rights Reserved{" "}
          </div>
          <div className="Gifsection__footer-right">
            License Validity: March 2019 - PerpetualPrivacy |
            PolicyTerms of Service
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
