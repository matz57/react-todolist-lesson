import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, Input, Select, List, Row, Col, Divider} from 'antd';
import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';
import ColumnModal from './ColumnModal';

    const TodoListEdit = () => {
    const [listCategories, setListCategories]: any = useState([]);
    const [listItems, setListItems]: any = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idEditColumn, setIdEditColumn] = useState();

    const showModal = (IdColumn: any) => {
        setIsModalOpen(true);
        setIdEditColumn(IdColumn);
      };

      const handleOkColumn = () => {
        setIsModalOpen(false);
      };
    
      const handleCancelColumn = () => {
        setIsModalOpen(false);
      };

    const handleOnClickNewColumn = (newColumn : []) => {
        setListCategories([...listCategories, newColumn]);
    }

    const handleOnClickNewItem = (newItem : []) => {
        setListItems([...listItems, newItem]);
    }

    const handleDeleteColumn = (newColumn: []) => {
        setListCategories(newColumn);
    }

    const handleDeleteItem = (newItem: []) => {
        setListItems(newItem);
    }
    
    
    return (
        <div className='TodoListEdit' style={{ position: "absolute" }}>
            <div style={{ margin: "20px" }}>
            <AddColumn listCol={handleOnClickNewColumn}></AddColumn>
                <AddItem listCat={listCategories} listItem={handleOnClickNewItem}></AddItem>
                <Column listCat={listCategories} listItem={listItems} handleItem={handleDeleteItem} handleColumn={handleDeleteColumn} 
                showModal={showModal}></Column>
                <ColumnModal isOpen={isModalOpen} isOk={handleOkColumn} isCancel={handleCancelColumn}></ColumnModal>
            </div>
        </div>
    )

}

export default TodoListEdit;
