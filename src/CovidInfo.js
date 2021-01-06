import React,{useEffect,useState} from 'react';
import {useTrail,a} from 'react-spring';


function Trail({children,isLoading}){
    const items = children;
    const trail = useTrail(items.length,{
        opacity: 1,
        x: 0,
        from: {opacity: 0,x: 200},
    })
    return(
        <div id="covid_brief">
            <div id="brief_info">
                <h1>Welcome to CovINFO</h1>
                <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
            </div>
             <div id="covid_info">
             <h1 style={{color: "red",fontSize: "20px"}}>Overall Covid Info</h1>
            {isLoading ? <h1>Pls wait while we fetch information</h1>: trail.map(({opacity,x},index)=>{
                return(
                    <div>
                        <a.h1 key={index} style={{opacity: opacity.interpolate((o) => `${o}`),transform: x.interpolate((x) => `translate(0%,${x}%)`)}}>{items[index]}</a.h1>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

function CovidInfo(){

    const [info,updateInfo] = useState([])
    const [isLoading,load] = useState(true)
    
    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/all?yesterday')
        .then(response => response.json())
        .then(D => {
            updateInfo(D)
            load(false)
        })
    }, []);

    return(
        <Trail isLoading={isLoading}>
            {Object.entries(info).map((el,index) => <span key={index}>{el[0]} : <span style={{color: "orange"}}>{el[1]}</span></span>)}
        </Trail>
    )
}

export default CovidInfo;
