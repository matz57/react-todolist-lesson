import Header from "./Header";
import Item from "./Item";
import React from "react";

const Column = ({ listCat, listItem, handleItem }: any) => {

    return(
        <div>
                <>{ listCat.map((categorie: any) => (
                    
                    <React.Fragment>
                        <Header listHeader={categorie}></Header>
                        <Item listIt={listItem} listCol={categorie} handle={handleItem}></Item>
                    </React.Fragment>
                )
                )}</>
        </div>
    )
}

export default Column;
