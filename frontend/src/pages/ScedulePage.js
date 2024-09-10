import React from "react";
import "../styles/SchedulePage.css";
import arrow_back_ios from "../assets/arrow_back_ios.png";
import Ellipse from "../assets/Ellipse.png";
import Circle from "../assets/Circle.png";
import Rectangle from "../assets/Rectangle.png";
import Line from "../assets/Line.png";

function SchedulePage() {
  return (
    <div className="container">
      <div className="month">7월</div>
      <img
        className="arrow_back_ios"
        src={arrow_back_ios}
        alt="arrow_back_ios"
      />
      <table className="calendar">
        <tbody>
          <tr>
            <td></td>
            <td className="day">1</td>
            <td>
              <div className="today">1</div>
              <img className="Ellipse-today" src={Ellipse} alt="Ellipse" />
            </td>
            <td className="day">1</td>
            <td className="day">1</td>
            <td className="day">1</td>
            <td className="day">1</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <div className="first-plan">
                <img className="first-Ellipse" src={Ellipse} alt="Ellipse" />
                <span className="first-title">스웨덴 국립미술관 컬렉션</span>
              </div>
            </td>
            <td>
              <img
                className="first-Rectangle"
                src={Rectangle}
                alt="Rectangle"
              />
            </td>
            <td>
              <div className="second-plan">
                <img className="second-Circle" src={Circle} alt="Circle" />
                <span className="second-title">스웨덴 국립미술관 컬렉션</span>
              </div>
            </td>
            <td>
              <img className="second-Line" src={Line} alt="Line" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img className="next-Rectangle" src={Rectangle} alt="Rectangle" />
              <img className="next-Line" src={Line} alt="Line" />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default SchedulePage;
