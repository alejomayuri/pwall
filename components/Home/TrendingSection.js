import { useState, useRef } from "react";
import Trending from "components/Icons/Trending";
import Image from "next/image";

export default function TrendingSection() {
  const [activeButton, setActiveButton] = useState(false);

  const element = useRef(null);

  function scrollLeft(element, change, duration) {
    const start = element.current.scrollLeft;
    let currentTime = 0;
    const increment = 30;

    const animateScroll = function () {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.current.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const handleMoreScroll = () => {
    scrollLeft(element, 300, 1000);
    setActiveButton(true);
    setTimeout(() => {
      setActiveButton(false);
    }, 1000);
  };

  const handleLessScroll = () => {
    scrollLeft(element, -300, 1000);
    setActiveButton(true);
    setTimeout(() => {
      setActiveButton(false);
    }, 1000);
  };

  return (
    <>
      <section>
        <div>
          <Trending />
          <h2></h2>
        </div>

        <div className="container">
          <button onClick={handleMoreScroll} disabled={activeButton}>
            Siguiente
          </button>
          <button onClick={handleLessScroll} disabled={activeButton}>
            Anterior
          </button>
          <ul ref={element}>
            <li style={{ height: "100%", position: "relative" }}>
              <img className="image" src="/trendingBanner1.png" alt="pwall" />
            </li>
            <li>
              <div className="box box-2"></div>
            </li>
            <li>
              <div className="box box-3"></div>
            </li>
            <li>
              <div className="box box-4"></div>
            </li>
            <li>
              <div className="box box-5"></div>
            </li>
            <li>
              <div className="box box-1"></div>
            </li>
            <li>
              <div className="box box-2"></div>
            </li>
            <li>
              <div className="box box-3"></div>
            </li>
            <li>
              <div className="box box-4"></div>
            </li>
            <li>
              <div className="box box-5"></div>
            </li>
          </ul>
        </div>
      </section>

      <style jsx>{`
        .container {
          display: flex;
          padding: 20px;
          background: #fff;

          height: 140px;
          width: 100%;
        }
        .box {
          height: 100px;
          width: 50px;

          top: 20px;
        }
        .box-1 {
          background-color: red;
        }
        .box-2 {
          background-color: green;
        }
        .box-3 {
          background-color: gold;
        }
        .box-4 {
          background-color: purple;
        }
        .box-5 {
          background-color: blue;
        }
        li {
          cursor: pointer;
          display: inline-block;
          margin-left: 6px;
          list-style: none;
          position: relative;
          vertical-align: top;
          z-index: 1;
        }
        ul {
          overflow: hidden;
          margin: 0px;
          padding: 0px 6px 0px 0px;
          white-space: nowrap;
          text-align: left;
          height: 100%;
        }

        .image {
          height: 100%;
        }
      `}</style>
    </>
  );
}
