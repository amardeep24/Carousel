import React from 'react';
import { shallow, configure } from 'enzyme';
import Card from '../components/Card';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('Test 1::The card component should match the snapshot', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Card
            title="foo"
            subHeder={12000}
            header="bar"
            footer="dummy"
        />);
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});

describe('Test 2::The card component should render children properly', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Card
            title="title"
            subHeader={12000}
            header="header"
            footer="footer"
        />);
    });

    it('should have 3 children', () => {
        expect(component.dive().find('div').children()).toHaveLength(3);
    });

    it('should render the title, subHeader, footer correctly', () => {
        expect(component.dive().find('div').childAt(0).text()).toEqual("₹12,000.00");
        expect(component.dive().find('div').childAt(1).text()).toEqual("title");
        expect(component.dive().find('div').childAt(2).text()).toEqual("footer");
    });
});
