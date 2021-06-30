import React from 'react';


class Stock extends React.Component {
    // case class Stock(id: Int, product: Long, size: Int, pieces: Int)
    state = {
        product : [],
        stock: [],
        size: []
    }
    constructor() {
        super();
        this.getProducts();
        this.getStocks();
        this.getSizes();
    }


    render() {
        const rows = this.state.stock.map( s =>
            <tr>
            <td>{s.id}</td>
            <td>{this.state.product[s.product]}</td>
            <td style={{"font-size": '0.8em'}}>{this.state.product[s.product+"_desc"]}</td>
            <td  >{(this.state.size[s.size]/10.0).toFixed(1)}</td>
            <td style={{"font-size": '2em'}}>{s.pieces}</td>
            </tr>
        );
            return (
            <div>
                <h3 class="info">Skład magazynu - rozwinięcie wartości kluczy</h3>
                <table className="produkty">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Produkt</th>
                            <th>Opis produktu</th>
                            <th>Rozmiar EU</th>
                            <th>Sztuk</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
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

    async getStocks() {
        const url = "http://localhost:9000/stocks_json";
        let res = await this.getRequest(url);
        let stocks = [];
        res.map(s =>
            { 
              stocks.push({
                id: s.id,
                product: s.product,
                size: s.size,
                pieces: s.pieces,
            });
        });
             
        this.setState({stock: stocks});
    }

    async getProducts() {
        const url = "http://localhost:9000/products_json";
        let res = await this.getRequest(url);
        let products = [];
        res.map(p =>
        { 
            products[p.id] = p.name;
            products[p.id+"_desc"] = p.description;
        });
             
        this.setState({product: products});
    }

    async getSizes() {
        const url = "http://localhost:9000/sizes_json";
        let res = await this.getRequest(url);
        let siz = [];
        res.map ( s => {
            siz[s.id] = s.size;
        });
                     
        this.setState({size: siz});
    }
}

export default Stock;