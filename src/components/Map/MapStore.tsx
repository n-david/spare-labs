import { action, autorun, computed, observable } from 'mobx';
import { IViewport } from './MapModel';

class MapStore {
    @observable
    public viewport: IViewport = {
        height: 400,
        latitude: 49.2827,
        longitude: -123.1207,
        width: 400,
        zoom: 8,
    };

    constructor() {
        autorun(() => console.log(this.viewport, this.size));
    }

    @computed
    get size(): { height: number; width: number } {
        return { height: this.viewport.height, width: this.viewport.width };
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

const mapStore = new MapStore();

export default mapStore;
export { MapStore };
