
import React from 'react';

class CategoryForm extends React.Component {
    state = {
        cat : [],
    }
    constructor() {
        super();
    }
  
    render() {

  
        return (
            <div>
                <form onSubmit={this.postRequest.bind(this)}>
                <input type='text' id='name' name='name' />
                <input type='text' id='description' name='description' />

                <div class="buttons">
                    <input type="submit" value="Dodaj kategorię"/>
                </div>
                </form>
            </div>
        )
    }    
    async postRequest(event) {
        const url = "http://localhost:9000/addcathandle"
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
        
        //this.getCats();
    }

}

export default CategoryForm;