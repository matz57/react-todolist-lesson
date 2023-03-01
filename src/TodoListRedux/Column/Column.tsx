import React from 'react';
import { List } from 'antd';
import Header from './Header';
import Item from './Item';
import { ColumnInterface, ItemInterface } from '../TodoListReduxSlice';
import { useSelector } from 'react-redux';

const Column = () => {

	const listColumn = useSelector((state: any) => state.TodoList.listColumn);
	const listItem = useSelector((state: any) => state.TodoList.listItem);

	return <>

		{listColumn.map((column: ColumnInterface) => {
			return <List
				bordered
				key={column.id}
				header={
					<Header column={column}/>
				}
				dataSource={
					listItem.filter((item: ItemInterface) => {
						return item.columnId === column.id
					})}
				className="list"
				renderItem={(item: ItemInterface) => (
					<Item item={item}/>
				)}
			>
			</List>
		})}

	</>
}

export default Column;