import React from 'react';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { List, Button } from 'antd';
import { ItemInterface, DeleteItem, ShowItemModal } from "../../TodoListReduxSlice";
import {useDispatch} from "react-redux";

interface InterfaceItem {
	item: ItemInterface
}

const Item = ({item}: InterfaceItem) => {

	const dispatch = useDispatch();
	
	const handleDeleteItem = () => {
		dispatch(DeleteItem(item.id));
	}

	const handleEditItem = () => {
		dispatch(ShowItemModal(item))
	}
	
	return <List className="listItem main">
			{item.name}

			<Button
				type="primary"
				size='small'
				onClick={handleEditItem}
			>
				<EditOutlined />
			</Button>
			<Button
				danger
				type="primary"
				size='small'
				onClick={handleDeleteItem}
			>
				<CloseOutlined />
			</Button>
	</List>
}

export default Item;