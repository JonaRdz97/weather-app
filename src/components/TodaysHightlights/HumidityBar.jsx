function HumidityBar(){
    return(
        <div className="humidity-bar-container">
            <div className="humidity-percent">
                <p>0</p>
                <p>50</p>
                <p>100</p>
            </div> 
            <div className="progress">
                <div className="humidity"></div>
            </div>        
        </div>
    );
}

export default HumidityBar;