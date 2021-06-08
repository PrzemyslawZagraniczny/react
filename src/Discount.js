
import React from 'react';

class Discount extends React.Component {
    state = {
        discount : [],
    }
    constructor() {
        super();
        this.getDiscsounts();
    }
  
    render() {

        let tableData = this.tableData = this.state.discount.map( d =>
            <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.value}</td>
            </tr>);

        return (
        <div>
            <h3 className="info">Lista Promocji</h3>
            <table className="produkty">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nazwa</th>
                    <th>Wielkość [%]</th>
                </tr>
            </thead>
            <tbody>
            {tableData}
            </tbody>
        </table>
        </div>
        )
    }    
    async getRequest(url) {
        let result = null;
        
        result = fetch(url, {
            mode: 'cors',
            method: 'GET' ,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            
        
        }).then( resp => {return resp.json()}).then ( data => {return data;});//.discsountch(e => console.error(e.message));
        return result; 
    }
    
    async getDiscsounts() {
        const url = "http://localhost:9001/discounts_json";
        let res = await this.getRequest(url);
        let discsounts = [];
        res.map(d =>
            discsounts.push({ 
              id: d.id,
              name: d.name,
              value: d.value
            }
            )
        );
                     
        this.setState({discount: discsounts});
    }
}

export default Discount;