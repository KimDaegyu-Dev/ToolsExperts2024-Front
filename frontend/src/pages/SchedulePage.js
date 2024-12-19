import React, { useState } from "react";
import "../styles/SchedulePage.css";
import arrow_back_ios from "../assets/arrow_back_ios.png";

const plans = [
  { title: "스웨덴 국립미술관 컬렉션", startDay: 9, duration: 6, type: "first" },
  { title: "현대 미술 특별전", startDay: 11, duration: 5, type: "second" },
];

const SchedulePage = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const today = new Date();

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
    <div className="agenda">
      <div className="container">
        <div className="year">
          <img
            className="arrow_back_ios"
            src={arrow_back_ios}
            alt="Previous Month"
            onClick={handlePrevMonth}
          />
          <div className="month">
            {`${currentYear}년 ${monthNames[currentMonth]}`}
          </div>
          <img
            className="arrow_next_ios"
            src={arrow_back_ios}
            alt="Next Month"
            onClick={handleNextMonth}
            style={{ transform: "none" }}
          />
        </div>

        <table className="calendar">
          <tbody>
            {calendar.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex} className="day">
                    {day ? (
                      <div className="day-container">
                        {/* 오늘 날짜 강조 */}
                        {day === today.getDate() &&
                        currentMonth === today.getMonth() &&
                        currentYear === today.getFullYear() ? (
                          <>
                            <div className="Ellipse-today"></div>
                            <div className="day-number">{day}</div>
                          </>
                        ) : (
                          <div className="day-number">{day}</div>
                        )}
                        {/* 일정 표시 */}
                        {plans.map((plan, index) => {
                          const isStartDay = day === plan.startDay;
                          const isWithinDuration =
                            day > plan.startDay &&
                            day < plan.startDay + plan.duration;

                          if (isStartDay || isWithinDuration) {
                            const containerClass =
                              plan.type === "first"
                                ? "first-Rectangle-container"
                                : "second-Line-container";

                            const barClass =
                              plan.type === "first"
                                ? "first-Rectangle"
                                : "second-Line";

                            const titleClass =
                              plan.type === "first"
                                ? "first-title"
                                : "second-title";

                            return (
                              <div key={index} className={containerClass}>
                                {isStartDay && (
                                  <span className={titleClass}>
                                    {plan.title}
                                  </span>
                                )}
                                <div className={barClass}></div>
                              </div>
                            );
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
    </div>
  );
};

export default SchedulePage;
