import { Provider } from 'react-redux';
import store from './TodoListReduxStore';
import AddItem from './AddItem';
import AddColumn from './AddColumn';
import Column from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';
import React from 'react';

const TodoListRedux = () => {

    return (
	<Provider store={store}>
<div className='TodoListEdit' style={{ position: "absolute" }}>
            <div style={{ margin: "20px" }}></div>
	 		<AddColumn />

			<AddItem />

			<Column />

			<ColumnModal />

			<ItemModal />
</div>
	 </Provider>
	);
};

export default TodoListRedux;
