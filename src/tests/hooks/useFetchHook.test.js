import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test in useFetchGifs hook', () => {

    test('should be return a initial state', async () => {
        //const { data, loading } = useFetchGifs('Hunter x');
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Hunter X'));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('should be return an array of images and the loading should be in false', async() => { 
        const { result, waitForNextUpdate  } = renderHook(() => useFetchGifs('Hunter X'));

        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect(data.length).toBe(5);
        expect(loading).toBeFalsy();
    });
});