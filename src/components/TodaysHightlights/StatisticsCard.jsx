import TextInfo from "components/common/TextInfo";
import {statistic_card, title_status, value_styles, unit_styles} from "assets/styles/TodaysHightlights.module.scss";

function StatisticsCard({cssClass="", title="", value="", unit="", children}){
    return(
        <div className={`status ${statistic_card} ${localStorage.getItem("mode") === "light" ? "dkm-stats" : ""}`}>
            <TextInfo
                cssClass={title_status}
                text={title}
            />
            <div className="container-value">
                <TextInfo
                    cssClass={value_styles}
                    text={value}
                />
                <TextInfo
                    cssClass={unit_styles}
                    text={unit}
                />
            </div>
            {children}
        </div>
    );
}

export default StatisticsCard;