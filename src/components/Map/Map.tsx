import * as React from 'react';
import ReactMapGL from 'react-map-gl';

import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { IViewport } from './MapModel';
import { MapStore } from './MapStore';

interface IProps {
    mapStore?: MapStore;
}

@inject('mapStore')
@observer
class Map extends React.Component<IProps> {
    private mapStore: MapStore;

    constructor(props: IProps) {
        super(props);
        this.mapStore = props.mapStore!;
    }

    public componentDidMount() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    public onViewportChange = (viewport: IViewport) => {
        this.mapStore.changeViewport(viewport);
    };

    public onResize = () => {
        this.mapStore.resize();
    };

    public render() {
        return (
            <div>
                <DevTools />
                <ReactMapGL
                    {...this.mapStore.viewport}
                    onViewportChange={this.onViewportChange}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                />
            </div>
        );
    }
}

export default Map;
