import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { Modal, Button, Input } from "antd";
import { useState } from "react";

const ColumnModal = ({isOpen, isOk, isCancel}: any) => {
    const [editTask, setEditTask] = useState('');

    const handleEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTask(e.target.value);
    }


    return (
        <>
          <Modal title="Edit Column" open={isOpen} onOk={isOk} onCancel={isCancel}>
            <Input onChange={handleEditTask} value={editTask} placeholder='Column Name'></Input>
          </Modal>
        </>
      );
}

export default ColumnModal;