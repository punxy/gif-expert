import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test in GifGrid component', () => {

    const category = 'Hunter x';
    const initState = {
        data: [],
        loading: true
    };

    test('should be render correctly', () => {
        useFetchGifs.mockReturnValue(initState);
        const wrapper = shallow( <GifGrid category={category} /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a paragraph with the title', () => {
        useFetchGifs.mockReturnValue(initState);
        const wrapper = shallow( <GifGrid category={category} /> );
        const h3 = wrapper.find('h3');
        expect(h3.text().trim()).toBe(category);
    });

    test('should display items when ages are loaded with useFetchGifs', () => { 

        const imgs = [
            {
                id: 'ABC',
                url: 'https://localhost/img.jpg',
                title: 'title example'
            },
            {
                id: '123',
                url: 'https://localhost/img.jpg',
                title: 'title example'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={category} /> );
        expect(wrapper.find('p').exists() ).toBeFalsy();
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    });
});