import propTypes from "prop-types";
import { useState,useEffect } from "react";

import DEALOFWEEK from "../../assets/images/deal_ofthe_week.png";
export default function Advertisement({countDown}) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [min, setMin] = useState(0);
    const [sec,setSec] = useState(0)

    const calculateCountdown = (endDate) => {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        if (diff <= 0) {
            return false;
        }

        const timeLeft = {
            years : 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec : 0
        };

        if (diff >= 365.25 * 86400) {
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) {
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) {
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    const addLoadingZeros = (value) => {
        value = String(value);
        while (value.length < 2) {
            value = "0" + value;
        }
        return value;
    }

    const stop = () => {
        clearInterval();
    }
    
    useEffect((calculateCountDown)=>{
        console.log('component mounted');
      //return a function to execute at unmount
      const interval = setInterval((props) => {
        const date = calculateCountdown(props.date);
        date ? setInterval(date) : stop();
      }, 1000);
      return ()=>{
          console.log('component will unmount')
      }
    },[])

    return(
        <div className="deal_ofthe_week">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deal_ofthe_week_img">
                            <img src={DEALOFWEEK} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right deal_ofthe_week_col">
                        <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                            <div className="section_title">
                                <h2>DEAL OF THE WEEK</h2>
                            </div>
                            <ul className="timer">
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="day" className="timer_run">
                                        {addLoadingZeros(countDown.days)}{" "}
                                    </div>
                                    <div className="timer_unit">
                                        {countDown.days === 1 ? "Day" : "Days"}
                                    </div>
                                </li>
                                <li className="d-inline-flex flex-column jutify-content-center align-items-center">
                                    <div id="hour" className="timer_num">
                                        {addLoadingZeros(countDown.hours)}
                                    </div>
                                    <div className="timer_unit">Hours</div>
                                </li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="minute" className="timer_num">
                                        {addLoadingZeros(countDown.min)}
                                    </div>
                                    <div className="timer_unit">Mins</div>
                                </li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="second" className="timer_num">
                                        {addLoadingZeros(countDown.sec)}
                                    </div>
                                    <div className="timer_unit">Sec</div>
                                </li>
                            </ul>
                            <div className="red_button deal_ofthe_week_button">
                                <a href="javascript:void(0);">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Advertisement.propTypes = {
    date: propTypes.string.isRequired
}

Advertisement.defaultProps = {
    date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toString()
}