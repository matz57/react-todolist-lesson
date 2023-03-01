import React from 'react';
import { ColumnInterface, DeleteColumn, ShowColumnModal } from "../../TodoListReduxSlice";
import { Button } from 'antd';
import { CloseOutlined, EditOutlined} from '@ant-design/icons';
import { useDispatch } from 'react-redux';

interface HeaderInterface {
	column: ColumnInterface,
}

const Header = ({column}: HeaderInterface) => {

	const dispatch = useDispatch();

	const handleDeleteColumn = () => {
		dispatch(DeleteColumn(column.id));
	}

	const handleShowModalColumn = () => {
		dispatch(ShowColumnModal(column));
	}


	return (
        <div className="todo-list-column-header">
            {column.name}

            <Button
                type="primary"
                size="small"
                icon={<EditOutlined />}
                onClick={handleShowModalColumn}
            />

            <Button
                type="primary"
                danger
                size="small"
                icon={<CloseOutlined />}
                onClick={handleDeleteColumn}
            />
        </div>
    );
}


export default Header;