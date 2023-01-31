import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, Input, Select, List, Row, Col, Divider, Empty } from 'antd';

let nextId = 0;

const TodoListWithDesign = () => {
    const [col, setCol] = useState('');
    const [task, setTask] = useState('');
    const [state, setState] = useState('');
    const [listCategories, setListCategories]: any = useState([]);
    const [listItems, setListItems]: any = useState([]);

    const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const changeCol = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCol(e.target.value);
    }

    const handleSelect = (newValue: string) => {
        setState(newValue);
    }

    const handleDelete = ((id: any) => {
        
    })
    
    return (
        <div className='TodoListWithDesign' style={{ position: "absolute" }}>
            <div style={{ margin: "20px" }}>
            <Divider orientation="left">Add column</Divider>
                <Row justify="space-around" align="middle" gutter={[24, 16]}>
                    <Col span={20}><Input onChange={changeCol} value={col} placeholder="Column Name" /></Col>
                    <Col span={2}><Button type="primary" disabled={!col}  onClick={() => {
                                setCol('');
                                setListCategories([...listCategories,{ id: nextId++, col: col }]);
                    }}>Add Column</Button></Col>
                </Row>

                <Divider orientation="left">Add item</Divider>
                <Row justify="space-around" gutter={[24, 16]}>
                    <Col span={10}><Input onChange={changeTask} value={task} placeholder="Item Name" /></Col>
                    <Col span={6}>
                    <Select value={state} style={{ width: 120 }} onChange={handleSelect}>
                    {listCategories.map((item: any) => (
                        <Select.Option value={item.id}>{item.col}</Select.Option>
                     ))}
                    </Select></Col>
                    <Col span={4}> <Button type="primary" disabled={!task} onClick={() => {
                        setTask('');
                        setListItems([...listItems,{id: Math.random(), idcat: state, item: task}]);
                    }}>
                     Add Item</Button></Col>
                </Row>
                
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

export default TodoListWithDesign;
