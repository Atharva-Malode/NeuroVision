import React from 'react';
import { AzureMap, AzureMapsProvider } from 'react-azure-maps';
import { AuthenticationType } from 'azure-maps-control';

// No need to import or use IAzureMapOptions
const option = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: "jubHKtZyn_no7UUfB3B2_ulQuHyGAKkkTGoCo2TWoig"// Your subscription key
  },
};

const DefaultMap = () => (
  <div className="w-5/6 container mx-auto p-4">
    <h1 className="text-4xl mt-8 font-bold text-center mb-8">My Azure Map</h1>
    <div className="map-container">
      <AzureMapsProvider>
        <AzureMap options={option} version = "2.1.8">
          {/* Your Azure Map content goes here */}
        </AzureMap>
      </AzureMapsProvider>
    </div>
  </div>
);

export default DefaultMap;
