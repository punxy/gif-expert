export const getFetchGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=5&api_key=1vX9p41BiwM43rlIb2pOslwLKUCblPhG`;

    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifts;
}