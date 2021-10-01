import TextInfo from "../common/TextInfo";

function StatisticsCard({cssClass="", title="", value="", unit="", children}){
    return(
        <div className={`status ${cssClass} ${localStorage.getItem("mode") === "light" ? "dkm-stats" : ""}`}>
            <TextInfo
                cssClass="title-status"
                text={title}
            />
            <div className="container-value">
                <TextInfo
                    cssClass="value"
                    text={value}
                />
                <TextInfo
                    cssClass="unit"
                    text={unit}
                />
            </div>
            {children}
        </div>
    );
}

export default StatisticsCard;