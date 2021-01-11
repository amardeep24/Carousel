import React from 'react';
import { shallow, configure } from 'enzyme';
import CarouselNavigation from '../components/CarouselNavigation';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('Test 1::The CarouselNavigation component should match the snapshot', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CarouselNavigation direction={"left"} />);
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});

describe('Test 2::The CarouselNavigation component should render children properly', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CarouselNavigation direction={"left"} />);
    });

    it('should have 1 child', () => {
        expect(component.dive().find('div').children()).toHaveLength(1);
    });

});
