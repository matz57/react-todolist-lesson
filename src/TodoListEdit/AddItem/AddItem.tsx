import { useState } from 'react';
import { Button, Input, Select, Row, Col, Divider} from 'antd';

const AddItem = ({ listItem, listCat }: any) => {
    const [task, setTask] = useState('');
    const [state, setState] = useState('');

    const handleSelect = (newValue: string) => {
        setState(newValue);
    }

    const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    

return(
<div><Divider orientation="left">Add item</Divider>
                <Row justify="space-around" gutter={[24, 16]}>
                    <Col span={10}><Input onChange={changeTask} value={task} placeholder="Item Name" /></Col>

                    <Col span={6}>
                    <Select value={state} style={{ width: 120 }} onChange={handleSelect}>
                    { listCat.map((item: any) => (
                        <Select.Option value={item.id}>{item.col}</Select.Option>
                     ))}
                    </Select></Col>

                    <Col span={4}> <Button type="primary" disabled={!task} onClick={() => {
                        setTask('');
                        var Add = {id: Math.random(), idcat: state, item: task};
                        listItem(Add);
                    }}>
                     Add Item</Button></Col>
                </Row></div>
)
}

export default AddItem;
