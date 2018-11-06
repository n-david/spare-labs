export const MAPBOX_STYLE = 'mapbox://styles/n-david/cjo43qjnh6gqx2rp6tal853tb';
export const TRANSLINK_API = (
    latitude: number,
    longitude: number,
    radius: number,
) =>
    `api/RTTIAPI/V1/stops?apiKey=${
        process.env.REACT_APP_TRANSLINK_TOKEN
    }&lat=${latitude}&long=${longitude}&Radius=${radius}`;
