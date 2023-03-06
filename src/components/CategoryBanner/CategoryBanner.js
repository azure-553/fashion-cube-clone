import Ban1 from "../../assets/images/banner_1.jpg";
import Ban2 from "../../assets/images/banner_2.jpg";
import Ban3 from "../../assets/images/banner_3.jpg";

export default function CategoryBanner() {
    return(
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="banner_item align-items-center"
                            style={{
                                backgroundImage: `url(${Ban1})`
                            }}
                            data-aos="fade-right"
                        >
                            <div className="banner_category">
                                <a href="#">women's</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner_item align-items-center"
                            style={{
                                backgroundImage: `url(${Ban2})`
                            }}
                            data-aos="fade-up"
                        >
                            <div className="banner_category">
                                <a href="#">accessories's</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner_item align-items-center"
                            style={{
                                backgroundImage: `url(${Ban3})`
                            }}
                            data-aos="fade-left"
                        >
                            <div className="banner_category">
                                <a href="#">men's</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
