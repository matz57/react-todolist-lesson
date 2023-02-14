import { Button } from 'antd';

const Item = ({ listIt, Col, handleIt }: any) => {
    return(
        <div>
    { 
        listIt.filter((list: any) => list.idcat === Col.id).map((filtered: any) =>( 
            <li style={{margin: '10px'}}>{filtered.item} <Button onClick={() => {
                const NewListItems = listIt.filter((item: any) => item.id !== filtered.id);
                handleIt(NewListItems);
            }}>X</Button></li>
        ))}</div>
    )
}

export default Item;
