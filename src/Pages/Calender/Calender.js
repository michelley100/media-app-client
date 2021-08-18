import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";

export const Calender = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
      <div>
        <Calendar showWeekNumbers onChange={onChange} value={date} />
        {console.log(date)}
        {date.toString()}
      </div>
    );
};
 

render(<Calender />, document.querySelector("#root"));
