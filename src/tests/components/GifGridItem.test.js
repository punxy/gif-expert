import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Test in GifGridItem components', () => {

    const title = 'este es un titulo';
    const url = 'https://localhost/someimg.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('should be render a component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('should have a image with de url and title from props', () => {
        const img = wrapper.find('img');
        const props = img.props();

        expect(props.src).toBe(url);
        expect(props.alt).toBe(title);
    });

    test('should have a class "animate__fadeIn"', () => {
        const div = wrapper.find('div');
        expect( div.hasClass('animate__fadeIn') ).toBeTruthy();
    });

})