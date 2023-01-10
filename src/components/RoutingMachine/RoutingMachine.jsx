import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = () => {

    const instance = L.Routing.control({
        waypoints: [],
        lineOptions: {
            styles: [{ color: "red", weight: 4 }]
        },
        show: false,
        addWaypoints: true,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;