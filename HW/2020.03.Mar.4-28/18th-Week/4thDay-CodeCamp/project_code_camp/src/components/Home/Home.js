import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import InputBtnGroup from '../InputBtnGroup/InputBtnGroup';

export default class Home extends Component {
    state = {
        items : ['Bulent', 'abc']

    }
        itemReceiveHendler = (e, date) => {
            let itemList = [...this.state.items];
            itemList.push(e.target.item.value)
            console.log(e);
            this.setState({
                items: itemList
            })
        }
    render(){

        let addItemList = 
        this.state.items.map(val => 
            <ListGroup>
            {val}
            </ListGroup>
            )
        console.log(this.state.items);
        return (
        <div>   

        <InputBtnGroup
            pHolder="New Item"
            btnText="Add"
            itemPipe={this.itemReceiveHendler}
        />

        <ListGroup.Item>
            {addItemList}
        </ListGroup.Item>

        </div>

        )
    }
    
}