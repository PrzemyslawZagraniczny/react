import React from 'react';

class Category extends React.Component {
    state = {
        cat : [],
    }
    constructor() {
        super();
        this.getCats();
    }
  
    render() {

        let tableData = this.tableData = this.state.cat.map( c =>
            <tr>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.description}</td>
            </tr>);

        return (
        <div>
            <h3 className="info">Lista produktów</h3>
            <table class="produkty">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Kategoria</th>
                    <th>Opis</th>
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
            
        
        }).then( resp => {return resp.json()}).then ( data => {return data;});//.catch(e => console.error(e.message));
        return result; 
    }
    

    componentDidMount() {
        console.log("Cat mounted");
    }

    async getCats() {
        const url = "http://localhost:9000/cats_json";
        let res = await this.getRequest(url);
        let cats = [];
        res.map(c =>
            cats.push({ 
              id: c.id,
              name: c.name,
              description: c.description
            }
            )
        );
                     
        this.setState({cat: cats});
    }
}

export default Category;