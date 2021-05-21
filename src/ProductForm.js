
import React from 'react';

class ProductForm extends React.Component {
    state = {
        cat : [],
        color: [],
        discount: [],
    }
    constructor() {
        super();
        this.getCats();
        this.getColors();
        this.getDiscsounts();
    }
  
    render() {

        const cats = this.state.cat.map( c =>
            <option value={c.id+""}>{c.name}</option>
        )
        const discounts = this.state.discount.map( d =>
            <option value={d.id+""}>{d.name}</option>
        )

        const colors = this.state.color.map( c =>
            <option value={c.id+""}>{c.name}</option>
        )

        return (
            <div>
                <form onSubmit={this.postRequest.bind(this)}>

            <dl class="" id="name_field">
                <dev><label for="name">Nazwa</label></dev>
                <dev>
                <input type="text" id="name" name="name" required/>
                </dev>
            </dl>
            <dl class=" " id="description_field">
                <dev><label for="description">Opis</label></dev>
                <dev>
                <input type="text" id="description" name="description" required/>
                </dev>
            </dl>
            <dl class=" " id="price_field">
                <dev><label for="price">Cena</label></dev>
                <dev>
                    <input type="text" id="price" name="price" required/>
                </dev>
            </dl>
            <label for="color"> Kolor:</label>
            <div>
                <select name="color" id="color">
                    {colors}
                </select>
            </div>
            <label for="category"> Kategoria:</label>
            <div>
                <select name="category" id="category">
                    {cats}
                </select>
            </div>
            <label for="discount"> Bonifikata:</label>
            <div>
                <select name="discount" id="discount">
                    {discounts}
                </select>
            </div>
            <br></br>
            <div class="buttons">
                <input type="submit" value="Dodaj Produkt"/>
            </div>
            </form>
        </div>
        )
    }    
    async postRequest(event) {
        const url = "http://localhost:9001/addproducthandle"
        let result = null;
        let data = new FormData(event.target);
        result = fetch(url, {
            mode: 'cors',
            method: 'POST' ,
            body: data
        }).then( resp => {return resp.json()}).then ( data => {return data;});//.catch(e => console.error(e.message));
        return result; 
    }
    
    componentDidMount() {
        
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


    async getCats() {
        const url = "http://localhost:9001/cats_json";
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

    async getColors() {
        const url = "http://localhost:9001/colors_json";
        let res = await this.getRequest(url);
        let colors = [];
        res.map(c =>
            colors.push({ 
              id: c.id,
              name: c.name,
              value: c.value
            }
            )
        );
                     
        this.setState({color: colors});
    }

    async getDiscsounts() {
        const url = "http://localhost:9001/discounts_json";
        let res = await this.getRequest(url);
        let discounts = [];
        res.map(d =>
            discounts.push({ 
              id: d.id,
              name: d.name,
              value: d.value
            }
            )
        );
                     
        this.setState({discount: discounts});
    }
}

export default ProductForm;