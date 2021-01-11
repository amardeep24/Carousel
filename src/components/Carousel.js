import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CarouselNavigation from './CarouselNavigation'
import { ErrorMessage } from './Styled';
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

function Carousel({ items, renderFn, searched, filterProp }) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    const [slider, setSlider] = useState([true, false, false]);
    const lastIndex = items.length - 1;
    const cards = getWrappedItems(items, startIndex, endIndex)
        .filter(item => searched ? item[filterProp].includes(searched) : true)
        .map(renderFn);

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
                    <CarouselContainer onScroll={(e) => console.log(e)}>
                        <CarouselNavigation direction={"left"} click={handleLeftNav} />
                        {cards}
                        <CarouselNavigation direction={"right"} click={handleRightNav} />
                    </CarouselContainer>
                    <SliderContainer>
                        {slider.map((a, i) => a ? <SliderActive key={i} /> : <SliderInActive key={i} />)}
                    </SliderContainer>
                </>
                :
                <ErrorMessage>{"No Results"}</ErrorMessage  >
            }
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
    renderFn: PropTypes.func,
    filterProp: PropTypes.string,
    searched: PropTypes.string
}

export default Carousel

