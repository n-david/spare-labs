import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { debounce } from 'throttle-debounce';

import { MapStore } from './MapStore';
import { IViewport } from './MapModel';
import { MAPBOX_STYLE } from './MapConstants';

interface IProps {
    mapStore?: MapStore;
}

const Loader = styled.img`
    height: 50px;
    position: absolute;
    right: 20px;
    top: 10px;
    z-index: 999;
`;

const MarkerImg = styled.img`
    height: 40px;
    pointer-events: none;
`;

@inject('mapStore')
@observer
class Map extends React.Component<IProps> {
    private readonly mapStore: MapStore;

    constructor(props: IProps) {
        super(props);
        this.mapStore = props.mapStore!;
    }

    public componentDidMount() {
        window.addEventListener('resize', debounce(300, this.onResize));
        this.onResize();
        this.mapStore.fetchBusStops();
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

    public renderBusStops() {
        return this.mapStore.busStops.map(busStop => (
            <Marker
                key={busStop.id}
                latitude={busStop.latitude}
                longitude={busStop.longitude}
                offsetTop={-10}
                captureDrag={false}
            >
                <MarkerImg src="/marker.svg" />
            </Marker>
        ));
    }

    public render() {
        const { viewport, loading } = this.mapStore;

        return (
            <div>
                {loading && <Loader src="/loader.gif" />}
                <ReactMapGL
                    {...viewport}
                    minZoom={13}
                    maxZoom={18}
                    mapStyle={MAPBOX_STYLE}
                    onViewportChange={this.onViewportChange}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                >
                    {this.renderBusStops()}
                </ReactMapGL>
            </div>
        );
    }
}

export default Map;
