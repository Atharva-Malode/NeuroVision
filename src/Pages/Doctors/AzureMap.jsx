import React, { useRef, useEffect } from 'react';
import { AzureMap, AzureMapsProvider } from 'react-azure-maps';
import { AuthenticationType, atlas } from 'azure-maps-control';

const option = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: 'jubHKtZyn_no7UUfB3B2_ulQuHyGAKkkTGoCo2TWoig',
  },
};

const fetchDoctors = async () => {
  const response = await fetch(`https://atlas.microsoft.com/search/poi/json?api-version=1.0&subscription-key=${option.authOptions.subscriptionKey}&query=eye%20specialist&lat=47.6&lon=-122.33&radius=10000&category=Eye%20Care`);
  const data = await response.json();
  return data.results;
};

const DefaultMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    fetchDoctors().then(data => {
      // Ensure the map instance is available before proceeding
      if (mapRef.current && mapRef.current.map) {
        const map = mapRef.current.map;

        // Loop through each doctor and create a marker with their position and name
        data.forEach((doctor, index) => {
          // Create an options object for the marker
          const options = {
            position: [doctor.position.lon, doctor.position.lat],
            color: ['DodgerBlue', 'Crimson', 'LimeGreen'][index % 3], // Use different colors for demonstration
            text: ['A', 'B', 'C'][index % 3], // Use different texts for demonstration
            anchor: 'center',
          };

          // Create an events object for the marker
          const events = {
            click: () => {
              alert(`You clicked on ${doctor.poi.name}`);
            },
          };

          // Create a marker using the atlas.HtmlMarker class
          const marker = new atlas.HtmlMarker(options, events);

          // Add the marker to the map
          map.markers.add(marker);
        });
      }
    });
  }, []);

  return (
    <div className="w-5/6 container mx-auto p-4">
      <h1 className="text-4xl mt-8 font-bold text-center mb-8">My Azure Map</h1>
      <div className="map-container">
        <AzureMapsProvider>
          <AzureMap options={option} version="3.0.0"
            cameraOptions={{
              center: [-122.33, 47.6],
              zoom: 14,
            }}
            mapRef={mapRef}
          >
          </AzureMap>
        </AzureMapsProvider>
      </div>
    </div>
  );
};

export default DefaultMap;
