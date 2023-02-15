import { Button } from 'antd';

const Header = ({listCol, Col, listIt, handleIt, handleCol, showMod}: any) => {
return(
    
    <li><h1 style={{fontSize: '25px', marginTop: '20px'}}>{Col.col}</h1>
   <Button onClick={() => {
        const NewListItems = listIt.filter((item: any) => item.id !== Col.id);
        handleIt(NewListItems);
        const NewListCol = listCol.filter((item: any) => item.id !== Col.id);
        handleCol(NewListCol)
    }}>X</Button>
    <Button type="primary" onClick={showMod}>
        Edit
    </Button>
    </li>
)
}

export default Header;
