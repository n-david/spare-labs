function getURLPrefix() {
    if (process.env.NODE_ENV === 'production') {
        return 'api';
    }
    return '';
}

export const MAPBOX_STYLE = 'mapbox://styles/n-david/cjo43qjnh6gqx2rp6tal853tb';
export const TRANSLINK_API = (
    latitude: number,
    longitude: number,
    radius: number,
) =>
    `${getURLPrefix()}/RTTIAPI/V1/stops?apiKey=${
        process.env.REACT_APP_TRANSLINK_TOKEN
    }&lat=${latitude}&long=${longitude}&Radius=${radius}`;
