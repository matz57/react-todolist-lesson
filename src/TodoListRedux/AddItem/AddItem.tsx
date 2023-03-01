import React, { useState } from 'react';
import { Input, Button, Select, Divider, Row, Col } from 'antd';
import { ColumnInterface, ItemInterface, AddNewItem } from '../TodoListReduxSlice';
import { useDispatch, useSelector } from 'react-redux';


const AddItem = () => {

	const [newItemName, setNewItemName] = useState<string>("");
	const [currentColumn, setCurrentColumn] = useState<string>("");

	const dispatch = useDispatch();

	const randomId = Date.now().toString();

	const listColumn= useSelector((state: any) => state.TodoList.listColumn);

	const handleOnItemNameChange= (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewItemName(e.target.value);
	}

	const handleColumnChange = (columnId: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentColumn(columnId.toString());
	}

	const handleOnClickNewItem = () => {
		const item: ItemInterface = { id: randomId, name: newItemName, columnId: currentColumn }
		dispatch(AddNewItem(item));
		setNewItemName("");
	}


return (
	<div className="todo-list-edit-add-item">
		<Divider orientation="left">Add item</Divider>
                <Row justify="space-around" gutter={[24, 16]}>
				<Col span={10}><Input
			placeholder="Item name"
			onChange={handleOnItemNameChange}
			value={newItemName}
		/></Col>

		<Col span={6}>
		<Select
				className="input"
				// defaultValue={"test"}
				options={listColumn.map((category: ColumnInterface) => {
					return { value: category.id, label: category.name };
				})}
				onChange={handleColumnChange}>
			</Select></Col>
			<Col span={4}><Button
			disabled={!newItemName?.length}
			onClick={handleOnClickNewItem}
		>
			Add Item
		</Button></Col>
	</Row></div>
);
}

export default AddItem;