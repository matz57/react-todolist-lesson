import React, { useState, useEffect } from 'react';
import { Modal, Input } from 'antd';
import { CloseColumnModal,  UpdateColumnName} from '../TodoListReduxSlice';
import { useSelector, useDispatch } from 'react-redux';

const ColumnModal = () => {

	const column = useSelector((state: any) => state.TodoList.editingColumn);

	const [editedColumnName, setEditedColumnName] = useState<string>(column.name);

	const columnModalVisible = useSelector((state: any) => state.TodoList.columnModalVisible);

	const dispatch = useDispatch();

	useEffect(() => {
		setEditedColumnName(column.name);
	}, [column])

	const handleOnChangeEditedColumnName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedColumnName(e.target.value);
	}

	const handleModalOnOK = () => {
			dispatch(UpdateColumnName({ name: editedColumnName, id: column.id }));
			dispatch(CloseColumnModal());
	}

	const handleModalOnCancel = () => {
		dispatch(CloseColumnModal());
	}

	return <Modal
		title={"Modification du nom de " + column.name}
		open={columnModalVisible}
		onOk={handleModalOnOK}
		onCancel={handleModalOnCancel}
	>
		<h1>Nom:</h1>
		<Input onChange={handleOnChangeEditedColumnName} value={editedColumnName} className="input"></Input>
	</Modal>

}

export default ColumnModal;