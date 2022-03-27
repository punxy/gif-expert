import { shallow } from "enzyme";
import { getFetchGifs } from "../../helpers/getFetchGifs";

describe('Test in getFetchGifs helper', () => {

    test('should bring ten elements', async() => {
        const gifs = await getFetchGifs('One Punchman');
        expect(gifs.length).toBe(5);
    });

    test('should bring cero elements', async() => {
        const gifs = await getFetchGifs('');
        expect(gifs.length).toBe(0);
    });

});