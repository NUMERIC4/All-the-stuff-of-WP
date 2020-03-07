import React from 'react'
import {InputGroup, FormControl,Button} from 'react-bootstrap';


function InputBtnGroup(props) {

    const itemSendHendler=(e)=>{
        e.preventDefault();
        props.itemPipe(e,Date.now())
    }
    

    return (
        <div>
            <form onSubmit={itemSendHendler}>
                <InputGroup className="mb-3">
                <input
                name="item"
                placeholder={props.pHolder}
                aria-label={props.pHolder}
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="danger" type="submit">{props.btnText}</Button>
                </InputGroup.Append>
                </InputGroup>
            </form>
        </div>
    )
}

export default InputBtnGroup
