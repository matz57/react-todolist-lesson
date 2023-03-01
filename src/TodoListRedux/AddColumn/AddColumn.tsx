import React, { useState } from 'react';
import { Input, Button, Divider, Row, Col } from 'antd';
import { ColumnInterface, AddNewColumn } from '../TodoListReduxSlice';
import { useDispatch } from 'react-redux';

const AddColumn = () => {

	const [newColumnName, setNewColumnName] = useState<string>("");

	const dispatch = useDispatch();

	const randomId = Date.now().toString();

	const handleOnColumnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewColumnName(e.target.value);
	}

	const handleOnClickNewColumn = () => {
		const column: ColumnInterface = { id: randomId, name: newColumnName };

		dispatch(AddNewColumn(column));

		setNewColumnName('');
	}


return (
	<div className="todo-list-edit-add-column">
		<Divider orientation="left">Add column</Divider>
		<Row justify="space-around" align="middle" gutter={[24, 16]}>
		<Col span={20}><Input
			placeholder="Column name"
			onChange={handleOnColumnNameChange}
			value={newColumnName}
		/></Col>

		<Col span={2}><Button
			disabled={!newColumnName.length}
			onClick={handleOnClickNewColumn}
		>
			Add column
		</Button></Col>
	</Row></div>
	
);
}

export default AddColumn;