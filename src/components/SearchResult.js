import React from 'react'
import Card from "./Card";
import {SearchResultContainer} from './Styled';

export default function SearchResult({ items, searched, filterBy = "all" }) {
    return (
        <SearchResultContainer>
            {items
                .filter(item => {
                    if (filterBy === "all") {
                        return Object.values(item)
                            .some(val => (val + '').includes(searched));
                    }
                    return item[filterBy].includes(searched);
                })
                .map(item => <Card
                    key={item.id}
                    title={item.name}
                    subHeader={item.price}
                    header={process.env.PUBLIC_URL + item.img}
                    footer={item.category}
                    active={true}
                />)}
        </SearchResultContainer>
    );
}
