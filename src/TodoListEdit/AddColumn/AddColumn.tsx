import { useState } from 'react';
import { Button, Input, Row, Col, Divider} from 'antd';

let nextId = 0;

const AddColumn = ({ listCol }: any) => {
    const [col, setCol] = useState('');


const changeCol = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCol(e.target.value);
}
return(
    <div>
<Divider orientation="left">Add column</Divider>
<Row justify="space-around" align="middle" gutter={[24, 16]}>
    <Col span={20}><Input onChange={changeCol} value={col} placeholder="Column Name" /></Col>
    <Col span={2}><Button type="primary" disabled={!col}  onClick={() => {
                setCol('');
                var Add = { id: nextId++, col: col };
                listCol(Add);
    }}>Add Column</Button></Col>
</Row></div>
)
}

export default AddColumn;
