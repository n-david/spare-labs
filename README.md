# spare-labs

Map of Greater Vancouver that displays Translink bus stops

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
$ git clone https://github.com/n-david/spare-labs.git
$ cd spare-labs
```

### Installing

A step by step series of examples that tell you how to get a development env running

Run install

```
$ npm install
```

Make .env file at root directory

```
$ touch .env
```

Add the following variables and your own API keys.

```
REACT_APP_MAPBOX_TOKEN=
REACT_APP_TRANSLINK_TOKEN=
```

[MapBox API token](https://www.mapbox.com/help/how-access-tokens-work/)
[Translink API token](https://developer.translink.ca/)

## Built With

* [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)
* [MobX](https://github.com/mobxjs/mobx)
* [react-map-gl](https://github.com/uber/react-map-gl)
* [axios](https://github.com/axios/axios)
* [styled-components](https://github.com/styled-components/styled-components)
* [throttle-debounce](https://github.com/niksy/throttle-debounce)
