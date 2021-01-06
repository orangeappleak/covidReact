import React from 'react';
import {useTrail,useTransition} from 'react-spring';


const page_style = [
    {backgroundColor: "red",color: "yellow"},
    {backgroundColor: "black",color: "white"},
    {backgroundColor: "cyan", color: "black"}    
] //TODO: reduce theses styles down to one line and automate shit.


function Transition({children}){
    let items = React.Children.toArray(children);
    let trans = useTransition()
}


function VirusInfo(){
    return(
        <div id="Virus-Info">
           <div className="pages" id="page1" style ={page_style[0]}>
                <h1>This is page1</h1>
           </div>

           <div className="pages" id="page2" style ={page_style[1]}>
                <h1>This is page2</h1>
           </div>

           <div className="pages" id="page3" style ={page_style[2]}>
                <h1>This is page3</h1>
           </div>

        </div>
    )
}

export default VirusInfo