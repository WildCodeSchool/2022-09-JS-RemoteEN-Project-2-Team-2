import React from "react";
import "./main-container.css";

const MainContainer = () => {
    return (
        <div className="main-container">
            <div>
            <h3>TODAY</h3>
            </div>

            <div>
            
            </div>

            <div className="datas">
                <div className="wind"> 
            <h3>WIND</h3>
            <p>26 km/h</p>
            </div>
            <div className="humidity"> 
            <h3>HUMIDITY</h3>
            <p>30%</p>
            </div>
            <div> 
            <h3>AQI</h3>
            <p>38 good</p>
            </div>
            </div>

            <div className="sun-position">
             <div className="sunrise"> 
                <h3>Sunrise</h3>
                 <p className='sunrise-time'>7:53</p>
            </div>
             <div className="sunset">
                     <h3>Sunset</h3>
                     <p className='sunset-time'>18:15</p>
            </div>
            </div>
        </div>
    );
}

export default MainContainer;

