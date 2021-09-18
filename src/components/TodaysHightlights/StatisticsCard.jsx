import TextInfo from "../common/TextInfo";

function StatisticsCard({cssClass="", title="", value="", unit="", visualComponent=null}){
    return(
        <div className={`status ${cssClass}`}>
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
            {visualComponent}
        </div>
    );
}

export default StatisticsCard;