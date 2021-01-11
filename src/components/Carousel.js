import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CarouselNavigation from './CarouselNavigation'
import Card from "./Card";
import {
    getWrappedItems,
    navigateLeft,
    navigateRight,
    navigateSliderRight,
    navigateSliderLeft
} from '../utils/utils';
import {
    CarouselContainer,
    SliderActive,
    SliderInActive,
    SliderContainer
} from './Styled';

function Carousel({ items, searched, filterProp }) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    const [slider, setSlider] = useState([true, false, false]);
    const lastIndex = items.length - 1;
    const cards = getWrappedItems(items, startIndex, endIndex)
        .filter(item => searched ? item[filterProp].includes(searched) : true)
        .map((item, i) =>
            <Card
                key={item.id}
                title={item.name}
                subHeader={item.price}
                header={process.env.PUBLIC_URL + item.img}
                footer={item.category}
                active={i === 1}
                left={i === 0}
            />
        );

    const handleLeftNav = useCallback(() => {
        setStartIndex(index => navigateLeft(index, lastIndex));
        setEndIndex(index => navigateLeft(index, lastIndex));
        setSlider(s => navigateSliderLeft(s));
    }, [lastIndex]);

    const handleRightNav = useCallback(() => {
        setStartIndex(index => navigateRight(index, lastIndex));
        setEndIndex(index => navigateRight(index, lastIndex));
        setSlider(s => navigateSliderRight(s))
    }, [lastIndex]);

    return (
        <>
            {cards.length ?
                <>
                    <CarouselContainer>
                        <CarouselNavigation direction={"left"} click={handleLeftNav} />
                        {cards}
                        <CarouselNavigation direction={"right"} click={handleRightNav} />
                    </CarouselContainer>
                    <SliderContainer>
                        {slider.map((a, i) => a ? <SliderActive key={i}/> : <SliderInActive key={i}/>)}
                    </SliderContainer>
                </>
                : "No Results"}
        </>
    )
}

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        category: PropTypes.string
    })),
    searched: PropTypes.string
}

export default Carousel

