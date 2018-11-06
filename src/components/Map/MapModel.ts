export interface IViewport {
    height: number;
    latitude: number;
    longitude: number;
    width: number;
    zoom: number;
}

export interface IAPIBusStops {
    AtStreet: string;
    BayNo: string;
    City: string;
    Distance: number;
    Latitude: number;
    Longitude: number;
    Name: string;
    OnStreet: string;
    Routes: string;
    StopNo: number;
    WheelchairAccess: number;
}

export interface IBusStops {
    id: number;
    latitude: number;
    longitude: number;
}
