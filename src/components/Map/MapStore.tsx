import { action, observable, reaction, runInAction } from 'mobx';
import axios from 'axios';
import { debounce } from 'throttle-debounce';

import { IAPIBusStops, IBusStops, IViewport } from './MapModel';
import { TRANSLINK_API } from './MapConstants';

class MapStore {
    @observable
    public viewport: IViewport = {
        height: 400,
        latitude: 49.2827,
        longitude: -123.1207,
        width: 400,
        zoom: 15,
    };
    @observable public busStops: IBusStops[] = [];
    @observable public loading: boolean = false;

    constructor() {
        reaction(
            () =>
                this.viewport.latitude ||
                this.viewport.longitude ||
                this.viewport.zoom,
            debounce(500, () => this.fetchBusStops()),
        );
    }

    @action
    public async fetchBusStops() {
        const { latitude, longitude, zoom } = this.viewport;

        this.loading = true;
        try {
            const response = await axios.get(
                TRANSLINK_API(
                    round(latitude),
                    round(longitude),
                    calcRadius(zoom),
                ),
            );
            runInAction(() => {
                this.busStops = filterBusStops(response.data);
                this.loading = false;
            });
        } catch (error) {
            this.loading = false;
            console.error(error);
        }
    }

    @action
    public changeViewport(viewport: IViewport) {
        this.viewport = viewport;
    }

    @action
    public resize() {
        this.viewport.height = window.innerHeight;
        this.viewport.width = window.innerWidth;
    }
}

function round(num: number) {
    return parseFloat(num.toFixed(4));
}

function calcRadius(zoom: number) {
    return -300 * Math.floor(zoom) + 5900;
}

function filterBusStops(responseData: IAPIBusStops[]) {
    return responseData.map((busStop: IAPIBusStops) => ({
        id: busStop.StopNo,
        latitude: busStop.Latitude,
        longitude: busStop.Longitude,
    }));
}

const mapStore = new MapStore();

export default mapStore;
export { MapStore };
