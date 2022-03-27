import React from 'react';
import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory'

describe('Test in AddCategory component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });

    test('should be render a component correctly',() => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be change inputBox', () => {

        const value = 'Hola Mundo!';
        const input = wrapper.find('input');

        input.simulate('change', {
            target: { value }
        });

        const input2 = wrapper.find('input');
        expect(input2.prop('value')).toBe(value);
    });

    test('Should NOT update new values on the submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {},
        });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should be call to setCategories and clear the input text', () => {
        
        const value = 'texto de prueba';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function ) )

        expect( wrapper.find('input').prop('value') ).toBe('');

    })
});