import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, Input, Select, List, Row, Col, Divider} from 'antd';
import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';

    const TodoListEdit = () => {
    const [listCategories, setListCategories]: any = useState([]);
    const [listItems, setListItems]: any = useState([]);


    const handleOnClickNewColumn = (newColumn : []) => {
        setListCategories([...listCategories, newColumn]);
    }

    const handleOnClickNewItem = (newItem : []) => {
        setListItems([...listItems, newItem]);
    }
    
    
    return (
        <div className='TodoListWithDesign' style={{ position: "absolute" }}>
            <div style={{ margin: "20px" }}>
            <AddColumn listCol={handleOnClickNewColumn}></AddColumn>
                <AddItem listCat={listCategories} listItem={handleOnClickNewItem}></AddItem>
                <Column listCat={listCategories} listItem={listItems} handleItem={handleOnClickNewItem} ></Column>
                
            </div>
        </div>
    )

}

export default TodoListEdit;
