import React from 'react';
import {useTransition,animated} from 'react-spring';


const page_style = [
    {backgroundColor: "red",color: "yellow"},
    {backgroundColor: "black",color: "white"},
    {backgroundColor: "cyan", color: "black"}    
] //TODO: reduce theses styles down to one line and automate shit.


function Transition({children}){
    let items = React.Children.toArray(children);
    console.log(items);
    let trans = useTransition(items.length,{
        from: {opacity: 0},
        enter: {opacity: 1},
        exit : {opacity: 0}
    })

    //TODO: transitions are not getting injeected into the final rendered html,find a way to inject
    //the transitions.
    return(
        <div>
            {trans.map((el,index) => (
                <animated.div key={index}>
                <h1>{console.log(el)}</h1>
                </animated.div>
            ))}
        </div>
    )
}


function VirusInfo(){
    return(
        <Transition>
                <div className="pages" id="page1" style ={page_style[0]}>
                    <h1>This is page1</h1>
                </div>

                <div className="pages" id="page2" style ={page_style[1]}>
                    <h1>This is page2</h1>
                </div>

                <div className="pages" id="page3" style ={page_style[2]}>
                    <h1>This is page3</h1>
                </div>
        </Transition>
        
    )
}

export default VirusInfo