import React, { useRef, useEffect } from 'react';
import { AzureMap, AzureMapsProvider } from 'react-azure-maps';
import { AuthenticationType, atlas } from 'azure-maps-control';

const option = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: 'jubHKtZyn_no7UUfB3B2_ulQuHyGAKkkTGoCo2TWoig',
  },
};
const DefaultMap = () => {
  const mapRef = useRef();
  return (
    <div className="mt-10 w-5/6 container mx-auto p-4">
      <div className="map-container">
        <AzureMapsProvider>
          <AzureMap options={option} version="3.0.0"
            cameraOptions={{
              center: [79.04, 21.15],
              zoom: 10,
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
