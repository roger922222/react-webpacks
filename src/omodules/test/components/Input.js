import React from 'react'

const Input = ({ onChange, onSumbit }) => {

    return (
        <form>
            <div className="form-group" >
                <label htmlFor="listInput">Email address</label>
                <input type="text" className="form-control" id="listItemInput" placeholder="Add new todo" onChange={(event) => onChange(event)} style={{width: '300px', height: '100px', border: '1px solid #000'}}/>
                <button className="btn btn-promary" type="button" onClick={ event => onSumbit(event) } style={{fontSize: '30px', color: '#000', width: '100px', height: '100px', border: '1px solid #f7f7f7'}}>Add Item</button>
            </div>
        </form>
    )
}

export default Input