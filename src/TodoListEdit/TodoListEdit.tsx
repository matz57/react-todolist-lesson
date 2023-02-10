import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, Input, Select, List, Row, Col, Divider} from 'antd';
import AddColumn from './AddColumn';
import AddItem from './AddItem';

    const TodoListEdit = () => {
    const [listCategories, setListCategories]: any = useState([]);
    const [listItems, setListItems]: any = useState([]);


    const handleOnClickNewColumn = (newColumn : any) => {
        setListCategories([...listCategories, newColumn]);
    }

    const handleOnClickNewItem = (newItem : any) => {
        setListItems([...listItems, newItem]);
    }
    
    
    return (
        <div className='TodoListWithDesign' style={{ position: "absolute" }}>
            <div style={{ margin: "20px" }}>
            <AddColumn listCol={handleOnClickNewColumn}></AddColumn>
                <AddItem listCat={listCategories} listItem={handleOnClickNewItem}></AddItem>
                { listCategories.map((categorie: any) => (
                        <ul><li><h1 style={{fontSize: '25px', marginTop: '20px'}}>{categorie.col}</h1></li>
                        { 
                        listItems.filter((list: any) => list.idcat === categorie.id).map((filtered: any) =>( 
                            <li style={{margin: '10px'}}>{filtered.item} <Button onClick={() => {
                                const NewListItems = listItems.filter((item: any) => item.id !== filtered.id);
                                setListItems(NewListItems);
                            }}>X</Button></li>
                        ))}</ul>
                )
                )}
                
            </div>
        </div>
    )

}

export default TodoListEdit;
