import { MapContainer ,TileLayer  } from 'react-leaflet'
import RoutingMachine from '../RoutingMachine/RoutingMachine';
import "leaflet-routing-machine";
import 'leaflet/dist/leaflet.css'

import './App.scss'
import {GeoTable} from '../GeoTable/GeoTable';
import {useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';



const App = () => {
    const location = useSelector((state) => state.location)
    const rMachine = useRef();

    // const waypoint = fetch(`http://router.project-osrm.org/route/v1/driving/${location.A[0]},${location.A[1]};${location.B[0]},${location.B[1]}?overview=false`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    useEffect(() => {
        if (rMachine.current) {
            console.log(location);
            rMachine.current.setWaypoints([location.A, location.B]);
        }
    }, [location, rMachine]);


    return (
       <main className='main'>
           <GeoTable/>
           <MapContainer style={{height: '800px', width: '800px' }} center={[59.84660399, 30.29496392]} zoom={12}>
               <TileLayer
                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <RoutingMachine ref={rMachine} waypoints={[location.A, location.B]}/>
           </MapContainer>
       </main>
    )
}

export {App}