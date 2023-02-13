import { Button } from 'antd';

const Item = ({ listIt, listCol, handle }: any) => {
    return(
    <>{ 
        listIt.filter((list: any) => list.idcat === listCol.id).map((filtered: any) =>( 
            <li style={{margin: '10px'}}>{filtered.item} <Button onClick={() => {
                const NewListItems = listIt.filter((item: any) => item.id !== filtered.id);
                handle(NewListItems);
            }}>X</Button></li>
        ))}</>
    )
}

export default Item;
