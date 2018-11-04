import * as React from "react";
import ReactMapGL, { Viewport } from "react-map-gl";

interface IState {
  viewport: Viewport;
}

class Map extends React.PureComponent<{}, IState> {
  public state = {
    viewport: {
      height: 1000,
      latitude: 49.2827,
      longitude: -123.1207,
      width: 1000,
      zoom: 8
    }
  };

  public componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  public onViewportChange = (viewport: Viewport) => {
    this.setState(prevState => ({
      viewport: { ...prevState.viewport, ...viewport }
    }));
  };

  public resize = () => {
    this.setState(prevState => ({
      viewport: {
        ...prevState.viewport,
        height: window.innerHeight,
        width: window.innerWidth
      }
    }));
  };

  public render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={this.onViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    );
  }
}

export default Map;
