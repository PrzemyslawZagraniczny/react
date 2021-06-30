import React from 'react';


class Promocje extends React.Component {
    state = {
        product : [],
        cat : [],
        color: [],
        discount: [],
        bShow: true
    }
    constructor() {
        super();
        this.getProducts();
        this.getCats();
        this.getColors();
        this.getDiscounts();
    }
    addToBasket (id) {
        console.log("DODAJE DO KOSZA! :" + id);
    }

    
    render() {
        const showDiscounts = () => {return this.state.bShow}
        const rows = this.state.product.map( p =>
            (showDiscounts() &&  this.state.discount[p.discount+"_val"] > 0) ? 
            <tr>
            <td>{p.id}</td>
            <td>{p.name}}</td>
            <td>{this.state.cat[p.category]}</td>
            <td style={{"color": this.state.color[p.color+"_val"]}}>{this.state.color[p.color]}</td>
            {/* ignoruj groszówki */}
            {this.state.discount[p.discount+"_val"] > 0 ? <td><p><b>PROMOCJA!</b> {this.state.discount[p.discount]} </p><span class="stara_cena">{(p.price/100).toFixed(0)}PLN</span><span class="nowa_cena">  {((1 - this.state.discount[p.discount+"_val"]/100.0) * p.price/100).toFixed(0)} PLN</span></td> : <td>{(p.price/100).toFixed(0)}PLN</td>  } 
            <a onClick={this.addToBasket(p.id)}>Dodaj do koszyka</a>
            </tr>
            : ""
        );
            return (
            <div>
                <h3 class="info"> Lista produktów </h3>
                <table className="produkty">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nazwa</th>
                            <th>Kategoria</th>
                            <th>Kolor</th>
                            <th>Cena</th>
                            <th>Akcja</th>
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
            // console.log("dodaje jednego: " + products[products.length-1].name);
            console.log("dodaje");
        });
             
        this.setState({product: products});
    }

    async getCats() {
        const url = "http://localhost:9000/cats_json";
        let res = await this.getRequest(url);
        let cats = [];
        res.map(c =>
            { 
              cats[c.id] = c.name;
              console.log(c.name);
              cats[c.id+"_desc"] = c.description;
            }
        );
             
        this.setState({cat: cats});
    }
    async getColors() {
        const url = "http://localhost:9000/colors_json";
        let res = await this.getRequest(url);
        let colors = [];
        res.map ( c => {
            colors[c.id] = c.name;
            console.log(c.name);
            colors[c.id+"_val"] = c.value;
        });
                     
        this.setState({color: colors});
    }
    
    async getDiscounts() {
        const url = "http://localhost:9000/discounts_json";
        let res = await this.getRequest(url);
        let discs = [];
        res.map ( d => {
            discs[d.id] = d.name;
            console.log(d.name);
            discs[d.id+"_val"] = d.value;
        });
                     
        this.setState({discount: discs});
    }
}

export default Promocje;