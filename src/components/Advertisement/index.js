import DEALOFWEEK from "../../assets/images/deal_ofthe_week.png";

export default function Advertisement() {

    const addLoadingZeros = (value) => {
        value = String(value);
        while (value.length < 2) {
            value = "0" + value;
        }
        return value;
    }

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
                                        {addLoadingZeros()}
                                    </div>
                                    <div className="timer_unit">
                                        {}
                                    </div>
                                </li>
                                <li className="d-inline-flex flex-column jutify-content-center align-items-center">
                                    <div id="hour" className="timer_num">
                                        {}
                                    </div>
                                    <div className="timer_unit">Hours</div>
                                </li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="minute" className="timer_num">
                                        {}
                                    </div>
                                    <div className="timer_unit">Mins</div>
                                </li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="second" className="timer_num">
                                        {}
                                    </div>
                                    <div className="timer_unit">Sec</div>
                                </li>
                            </ul>
                            <div className="red_button deal_ofthe_week_button">
                                <a href="https://naver.com">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}