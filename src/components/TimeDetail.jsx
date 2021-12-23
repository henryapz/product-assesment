import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getTimeFormat from "../utils/msToTime";

const TimeDetail = function TimeDetail({ time, updateAvailability }) {
  const [remainTime, setRemainTime] = useState(time);
  const formatedTime = getTimeFormat(remainTime);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (remainTime > 0) {
        setRemainTime(remainTime - 1);
      }
      if (remainTime === 1) updateAvailability();
      /* clearInterval(myInterval); */
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  // console.log(remainTime, getTimeFormat(remainTime));
  return <span className="time-detail">{formatedTime}</span>;
};

TimeDetail.propTypes = {
  time: PropTypes.number,
  updateAvailability: PropTypes.func,
};
TimeDetail.defaultProps = {
  time: 0,
  updateAvailability: () => {},
};

export default TimeDetail;
