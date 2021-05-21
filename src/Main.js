import React from 'react';


class Main extends React.Component {
    state = {
        n : ['Mir', "Ewa"],
        bShow: true
    }
   
    render() {
        
        const check = () => {return this.state.bShow}
        // const change = () => {
        //     console.log("change...");
        //     // this.state.bShow = !this.state.bShow
        //     this.setState({bShow: !this.state.bShow})    
        // };
        
        // const zmiana = () => {
        //     this.setState({n : ["Ewa", 'Mir']})
    
        // }     
        const formN = this.state.n.map( nn => <li> {nn}</li>)
        return (
        <div>
            <h1> To 
                <ul>{ check() ? formN : "brak"}</ul>
            </h1>
            {/* <button onClick={change}> Zmień</button> */}
        </div>
        )
    }
}

export default Main;