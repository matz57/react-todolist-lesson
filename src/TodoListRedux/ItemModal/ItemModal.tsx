import React, { useState, useEffect } from 'react';

import { Modal, Input } from 'antd';

import { CloseItemModal, UpdateItemName } from '../TodoListReduxSlice';
import { useSelector, useDispatch } from 'react-redux';

const ItemModal = () => {

    const item = useSelector((state: any) => state.TodoList.editingItem);
    const itemModalVisible = useSelector((state: any) => state.TodoList.itemModalVisible);

    const dispatch = useDispatch();

    const [editedItemName, setEditedItemName] = useState<string>(item.name);

    useEffect(() => {
		setEditedItemName(item.name);
	}, [item])

    const handleOnChangeEditedItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedItemName(e.target.value);
    }

    const handleModalOnOk = () => {
        if (editedItemName.length === 0) {
		} else {
			dispatch(UpdateItemName({ name: editedItemName, id: item.id }));
			dispatch(CloseItemModal());
		}
    }

    const handleModalOnCancel = () => {
		dispatch(CloseItemModal());
	}

    return <Modal
        title={"Changer la data de " + item.name}
        open={itemModalVisible}
        onOk={handleModalOnOk}
        onCancel={handleModalOnCancel}
    >
        <h1>Nom:</h1>
        <Input onChange={handleOnChangeEditedItemName} value={editedItemName} className="input"></Input>
    </Modal>
}

export default ItemModal;