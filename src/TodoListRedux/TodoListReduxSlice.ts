import { createSlice } from '@reduxjs/toolkit';

export interface ColumnInterface {
	id: string;
	name: string;
}

export interface ItemInterface {
	id: string;
	name: string;
	columnId: string;
}

export const TodoListSlice = createSlice({
	name: 'TodoListSlice',
	initialState: {
		listColumn: [],
		listItem: [],
		columnModalVisible: false,
		itemModalVisible: false,
		editingColumn: { id: "", name: "" },
		editingItem: { id: "", name: "", columnId: "" }
	},
	reducers: {
		AddNewColumn: (state: { listColumn: ColumnInterface[] }, action: { payload: ColumnInterface }) => {
			state.listColumn = [...state.listColumn, action.payload];
		},

		AddNewItem: (state: { listItem: ItemInterface[] }, action: { payload: ItemInterface }) => {
			state.listItem = [...state.listItem, action.payload];
		},

		DeleteColumn: (state: { listColumn: ColumnInterface[], listItem: ItemInterface[] }, action: { payload: string }) => {
			state.listItem = state.listItem.filter((item) => item.columnId !== action.payload);
			state.listColumn = state.listColumn.filter((column) => column.id !== action.payload);
		},

		DeleteItem: (state: { listItem: ItemInterface[] }, action: { payload: string }) => {
			state.listItem = state.listItem.filter((item) => item.id !== action.payload);
		},

		UpdateColumnName: (state: { listColumn: ColumnInterface[] }, action: { payload: ColumnInterface }) => {
			state.listColumn = state.listColumn.map((column) => {
				if (column.id === action.payload.id) {
					column.name = action.payload.name;
				}
				return column;
			})
		},

		UpdateItemName: (state: { listItem: ItemInterface[]}, action: {payload: {name: string, id: string}})=>{
			state.listItem = state.listItem.map((item)=>{
				if (item.id === action.payload.id){
					item.name = action.payload.name
				}
				return item;
			})
		},

		ShowColumnModal: (state: { columnModalVisible: boolean, editingColumn: ColumnInterface }, action: { payload: ColumnInterface }) => {
			state.editingColumn = action.payload;
			state.columnModalVisible = true;
		},

		ShowItemModal: (state: { itemModalVisible: boolean, editingItem: ItemInterface }, action: { payload: ItemInterface }) => {
			state.editingItem = action.payload;
			state.itemModalVisible = true;
		},

		CloseColumnModal: (state: { columnModalVisible: boolean }) => {
			state.columnModalVisible = false;
		},

		CloseItemModal: (state: { itemModalVisible: boolean }) => {
			state.itemModalVisible = false;
		},

	},
});

export const {
	AddNewColumn, AddNewItem, DeleteColumn,DeleteItem, 
	ShowColumnModal, ShowItemModal, CloseColumnModal, CloseItemModal,
	UpdateColumnName, UpdateItemName
} = TodoListSlice.actions;

export default TodoListSlice.reducer;
