import React from 'react';
// import ReactDOM from 'react-dom';


class Product extends React.Component {
    state = {
        product : [{
            id: "p.id",
                category: "p.category",
                color: "p.color",
                name: "p.name",
                description: "p.descriiption",
                price: "p.price",
                discount: "p.discount"
        }],
        bShow: true
    }
    constructor() {
        super();
        //this.getProducts();
    }
  
    render() {

        let tableData = this.tableData = this.state.product.map( p =>
            <tr>

                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.price} PLN</td>
                <td> <a href={"product/" + p.id}>Szczegóły</a></td>

            </tr>);

        return (
        <div>
            <h3 className="info">Lista produktów</h3>
            <table class="produkty">
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
    async getProductRequest(url) {
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
        console.log("Product mounted");
        this.getProducts();
        
    }

    async getProducts() {
        const url = "http://localhost:9001/products_json";
        let res = await this.getProductRequest(url);
        let products = [];
        res.map(p =>
            { 
              products.push({
                id: p.id,
                category: p.category,
                color: p.color,
                name: p.name,
                description: p.descriiption,
                price: p.price,
                discount: p.discount
            });
            // console.log("dodaje jednego: " + products[products.length-1].name);
            console.log("dodaje");
        });
             
        this.setState({product: products});
    }
}

export default Product;