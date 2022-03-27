import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';

import { GifExpertApp } from '../../components/GifExpertApp';

describe('Test in GifExpertApp component', () => {

    test('should be render correctly', () => {
        const wrapper = shallow( <GifExpertApp  /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should be display a list of categories', () => {

        const categories = ['OnePunch', 'Drgaon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );
        
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    });
});