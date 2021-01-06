import React from 'react';

class CovidContinents extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {
            info : [],
            isFetching: true,
        }
    }

    fetchingInfo(){
        return(
            <div>
                <h1>Pls wait while we fetch important info.</h1>
            </div>
        )
    }

    componentDidMount(){
        fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
            .then(response => response.json())
                .then(data => this.setState({
                    info: data,
                    isFetching: false,
                }))
    }

    render(){
        return(
            <div id="cards">
                <h1>Continent Wise Covid Info</h1>
                {console.log(this.state.isFetching)}
                {this.state.isFetching ? this.fetchingInfo() : this.state.info.map((el,index) => {
                    return(
                        <div key={index} id="card">
                            <h2>{el.continent}</h2>
                            <div id="card_info">
                                <h3 style={{fontSize: '20px',fontWeight: 'bold',color: 'orange'}}>Total no of Cases: <span id="numbers">{el.cases}</span></h3>
                                <h3>Today's no of Cases: <span id="numbers">{el.todayCases}</span></h3>
                                <h3>Total no of Deaths: <span id="numbers">{el.deaths}</span></h3>
                                <h3>Today's no of Deaths: <span id="numbers">{el.todayDeaths}</span></h3>
                                <h3>Active no of Cases: <span id="numbers">{el.active}</span></h3>
                                <h3 style={{color: 'green'}}>Recovered Patients: <span id="recovered">{el.recovered}</span></h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CovidContinents