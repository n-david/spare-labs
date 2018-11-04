import * as React from "react";
import styled from "styled-components";

import Map from "../Map/Map";

const Wrapper = styled.div`
  //text-align: center;
`;

class App extends React.PureComponent {
  public render() {
    return (
      <Wrapper>
        <Map />
      </Wrapper>
    );
  }
}

export default App;
