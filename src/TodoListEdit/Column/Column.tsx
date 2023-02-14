import Header from "./Header";
import Item from "./Item";
import React from "react";

const Column = ({ listCat, listItem, handleItem, handleColumn, showModal }: any) => {

    return(
        <div>
                { listCat.map((categorie: any) => (
                    <ul>
                        <Header listCol={listCat} Col={categorie} listIt={listItem} handleIt={handleItem} handleCol={handleColumn} 
                        showMod={showModal}></Header>
                        <Item listIt={listItem} Col={categorie} handleIt={handleItem}></Item>
                    </ul>
                )
                )}
        </div>
    )
}

export default Column;
