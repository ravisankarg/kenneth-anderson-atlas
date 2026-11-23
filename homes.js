const homesMap=L.map('homes-map',{scrollWheelZoom:false}).setView([12.975,77.675],11);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{maxZoom:18,attribution:'Tiles © Esri and contributors'}).addTo(homesMap);
L.circleMarker([12.971,77.596],{radius:9,color:'#fff',weight:2,fillColor:'#bd8547',fillOpacity:1}).addTo(homesMap).bindPopup('<b>Prospect House area</b><br>Kasturba Road, near Cubbon Park. Approximate area, not a building footprint.');
L.circleMarker([12.9698,77.75],{radius:10,color:'#fff',weight:2,fillColor:'#4c7753',fillOpacity:1}).addTo(homesMap).bindPopup('<b>Whitefield</b><br>Neighbourhood reference only. Bijou Cottage’s exact location is not verified.');
