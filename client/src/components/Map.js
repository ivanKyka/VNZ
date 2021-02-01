import React, {useEffect} from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import * as zaklady from '../consts/vvnzInfo';
import IconImage from '../../resources/icon.png';

const Icon = L.icon({
    iconUrl: IconImage,
    iconSize:     [30, 30],
    iconAnchor:   [30, 15],
    popupAnchor:  [-15, -15]
});

const Map = () => {

    let map;

    useEffect(() => {
        map = L.map('mapContainer').setView([48, 32], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(map);
        Object.entries(zaklady).reverse().forEach(([k,v]) => {
            const options = {icon: Icon}
            const marker = L.marker(v.coordinates.split(', '), options).addTo(map);
            marker.bindPopup(`<h5>${v.title}</h5><h6>${v.address}</h6><a href="${'/institution/' + k}">На сторінку закладу</a>`);
        })
    }, []);

    return (<MapContainer/>)

}

export default Map;

const MapContainer = styled.div
    .attrs({id: 'mapContainer'})`
    height: 60vw;
    max-height: 660px;
    margin-bottom: 20px;
`;