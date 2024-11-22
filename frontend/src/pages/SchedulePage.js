import React, { useEffect, useState } from "react";
import "../styles/SchedulePage.css";
import arrow_back_ios from "../assets/arrow_back_ios.png";
import Ellipse from "../assets/Ellipse.png";
import Circle from "../assets/Circle.png";
import Rectangle from "../assets/Rectangle.png";
import Line from "../assets/Line.png";

const plans = [
  { title: "스웨덴 국립미술관 컬렉션", startDay: 9, duration: 6 },
  { title: "스웨덴 국립미술관 컬렉션", startDay: 11, duration: 5 },
];

const SchedulePage = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();

    const calendar = [];
    let week = new Array(7).fill(null);
    let day = 1;

    for (let i = 0; i < firstDay; i++) {
      week[i] = null;
    }
    for (let i = firstDay; i < 7; i++) {
      week[i] = day++;
    }
    calendar.push(week);

    while (day <= daysInMonth) {
      week = new Array(7).fill(null);
      for (let i = 0; i < 7 && day <= daysInMonth; i++) {
        week[i] = day++;
      }
      calendar.push(week);
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const calendar = generateCalendar(currentYear, currentMonth);

  return (
    <div className="container">
      <div className="header">
        <div className="month">
          {currentYear} {monthNames[currentMonth]}
        </div>
        <img
          className="arrow_back_ios"
          src={arrow_back_ios}
          alt="Previous Month"
          onClick={handlePrevMonth}
        />
        <img
          className="arrow_next_ios"
          src={arrow_back_ios}
          alt="Next Month"
          onClick={handleNextMonth}
        />
      </div>
      <table className="calendar">
        <tbody>
          {calendar.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className={
                    day === new Date().getDate() &&
                    currentMonth === new Date().getMonth() &&
                    currentYear === new Date().getFullYear()
                      ? "today"
                      : "day"
                  }
                >
                  {day ? (
                    <div className="day-container">
                      {day === new Date().getDate() &&
                      currentMonth === new Date().getMonth() &&
                      currentYear === new Date().getFullYear() ? (
                        <>
                          <img
                            className="Ellipse-today"
                            src={Ellipse}
                            alt="Ellipse-today"
                          />
                          <div className="day-number">{day}</div>
                        </>
                      ) : (
                        <div className="day-number">{day}</div>
                      )}
                      {plans.map((plan, index) => {
                        if (index === 0) {
                          if (day === plan.startDay) {
                            return (
                              <div key={index} className="first-plan">
                                <span className="first-title">
                                  {plan.title}
                                </span>
                                <div className="first-Rectangle-container">
                                  <img
                                    className="first-Rectangle"
                                    src={Rectangle}
                                    alt="Rectangle"
                                  />
                                </div>
                              </div>
                            );
                          } else if (
                            day > plan.startDay &&
                            day < plan.startDay + plan.duration
                          ) {
                            return (
                              <div
                                key={index}
                                className="first-Rectangle-container"
                              >
                                <img
                                  className="first-Rectangle"
                                  src={Rectangle}
                                  alt="Rectangle"
                                />
                              </div>
                            );
                          }
                        } else if (index === 1) {
                          if (day === plan.startDay) {
                            return (
                              <div key={index} className="second-plan">
                                <span className="second-title">
                                  {plan.title}
                                </span>
                                <div className="second-Line-container">
                                  <img
                                    className="second-Line"
                                    src={Line}
                                    alt="Line"
                                  />
                                </div>
                              </div>
                            );
                          } else if (
                            day > plan.startDay &&
                            day < plan.startDay + plan.duration
                          ) {
                            return (
                              <div
                                key={index}
                                className="second-Line-container"
                              >
                                <img
                                  className="second-Line"
                                  src={Line}
                                  alt="Line"
                                />
                              </div>
                            );
                          }
                        }
                        return null;
                      })}
                    </div>
                  ) : (
                    <div>&nbsp;</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchedulePage; // export 문이 추가되어야 함
