import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Header'

function setup() {
    const props = { };
    const wrapper = shallow(<Header />);
    return { wrapper, props };
}

describe("Header", () => {
    it("should render", () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });
});