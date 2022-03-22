import React from 'react';

function ListItems(props) {

    const items = props.items;
    const ListItems = items.map(item => {

        return <div key = {item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value, item.key)}} />

                <span>
                    <button onClick={()=>{
                        props.deleteItem(item.key)
                    }} icon="trash">Remove</button>
                </span>
            </p>
        </div>

    })

    return <div>
            {ListItems}
    </div>;

}

export default ListItems;