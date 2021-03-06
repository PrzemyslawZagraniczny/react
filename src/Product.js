import React from 'react';


class Product extends React.Component {
    state = {
        product : [],
        cat : [],
        bShow: true
    }
    constructor() {
        super();
    }
  
    render() {

        let tableData = this.state.product.map( p =>
            <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{this.state.cat[p.category]}</td>
                <td>{(p.price/100.0)} PLN</td>
                <td> <a href={"product/" + p.id}>Usuń</a></td>
                
                
            </tr>);

        return (
        <div>
            <h3 className="info">Lista produktów</h3>
            <table className="produkty">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nazwa</th>
                    <th>Kategoria</th>
                    <th>Cena</th>
                    <th>Akcja</th>
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
             },
            
        
        }).then( resp => {return resp.json()}).then ( data => {return data;});//.catch(e => console.error(e.message));
        return result; 
    }
    

    componentDidMount() {
        console.log("Product mounted");
        this.getCats();
        this.getProducts();
        this.getBasket();
        
    }

    async getProducts() {
        const url = "http://localhost:9000/products_json";
        let res = await this.getRequest(url);
        let products = [];
        res.map(p =>
            { 
              products.push({
                id: p.id,
                category: p.category,
                color: p.color,
                name: p.name,
                description: p.description,
                price: p.price,
                discount: p.discount
            });
            console.log("dodaje");
        });
             
        this.setState({product: products});
    }
    async getBasket() {
        const url = "http://localhost:9000/baskets_json";
        let res = await this.getRequest(url);
        let b = [];
        res.map(p =>
            { 
              b.push({
                id: p.id,
                product: p.product,
                pieces: p.pieces,
            });
            console.log("BASKET: " + p.id);
        });
    }
    async getCats() {
        const url = "http://localhost:9000/cats_json";
        let res = await this.getRequest(url);
        let cats = {};
        res.map(c =>
            { 
              cats[c.id] = c.name;
              console.log(c.name);
              cats[c.id+"_desc"] = c.description;
            }
        );
             
        this.setState({cat: cats});
    }
}

export default Product;