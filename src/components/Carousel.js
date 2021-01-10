import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CarouselNavigation from './CarouselNavigation'
import Card from "./Card";
import {
    getWrappedItems,
    navigateLeft,
    navigateRight
} from '../utils/utils';
import {
    CarouselContainer
} from './Styled';

function Carousel({ items, searched }) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    const lastIndex = items.length - 1;
    const cards = getWrappedItems(items, startIndex, endIndex)
        .filter(item => searched ? item.category.includes(searched): true)
        .map((item, i) => {
            console.log(i === 1)
            return <Card
                key={item.id}
                title={item.name}
                subHeader={item.price}
                header={process.env.PUBLIC_URL + item.img}
                footer={item.category}
                active={i === 1}
            />
        });

    const handleLeftNav = useCallback(() => {
        setStartIndex(index => navigateLeft(index, lastIndex));
        setEndIndex(index => navigateLeft(index, lastIndex));
    }, [lastIndex]);

    const handleRightNav = useCallback(() => {
        setStartIndex(index => navigateRight(index, lastIndex));
        setEndIndex(index => navigateRight(index, lastIndex));
    }, [lastIndex]);

    return (
        <div>
            <CarouselContainer>
                <CarouselNavigation direction={"left"} click={handleLeftNav} />
                {cards}
                <CarouselNavigation direction={"right"} click={handleRightNav} />
            </CarouselContainer>
        </div>
    )
}

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        category:PropTypes.string
    })),
    searched: PropTypes.string
}

export default Carousel

