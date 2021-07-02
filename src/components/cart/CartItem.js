import React from 'react'

export default function CartItem(props) {
    return (
        <tr>
            <td>{props.item.title}</td>
            <td>
                <input type="text" className="form-control" style={{ width: '3em'}} step="1.0" value={props.item.quantity} />
            </td>
            <td><b>${props.item.price}</b></td>
        </tr>
    )
}
