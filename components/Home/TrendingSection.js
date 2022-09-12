import { useCallback, useEffect, useState, useRef } from "react";
import Trending from "components/Icons/Trending";

export default function TrendingSection() {
  const [activeButton, setActiveButton] = useState(false);

  const element = useRef(null);

  const onScroll = () => {
    console.log("hola");
  };

  useEffect(() => console.log(element), []);

  function scrollLeft(element, change, duration) {
    const start = element.current.scrollLeft;
    const currentTime = 0;
    const increment = 20;

    console.log(start);

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
    }, 1700);
  };

  const handleLessScroll = () => {
    scrollLeft(element, -300, 1000);
    setActiveButton(true);
    setTimeout(() => {
      setActiveButton(false);
    }, 1700);
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
          <ul ref={element} onScroll={onScroll}>
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
          width: 36%;
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
          overflow-x: scroll;
          margin: 0px;
          padding: 0px 6px 0px 0px;
          white-space: nowrap;
          text-align: left;
          height: 160px;
        }
      `}</style>
    </>
  );
}
