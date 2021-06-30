
import React from 'react';

class DiscountForm extends React.Component {
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
                <input type='text' id='name' name='name' required/>
                <input type='text' id='value' name='value' required/>

                <div class="buttons">
                    <input type="submit" value="Dodaj promocję"/>
                </div>
                </form>
            </div>
        )
    }    
    async postRequest(event) {
        const url = "http://localhost:9000/adddiscounthandle"
        let result = null;
        let data = new FormData(event.target);
        result = fetch(url, {
            mode: 'cors',
            method: 'POST' ,
            body: data
        }).then( resp => {return resp.json()}).then ( dat => {return dat;});//.catch(e => console.error(e.message));
        return result; 
    }
}

export default DiscountForm;