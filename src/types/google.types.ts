export interface GooglePlaceDetailsResponse {
  address_components: GooglePlaceAddressComponent[];
  formatted_address: string;
  geometry: {
    location: {
      lat: number
      lng: number
    }
    viewport: {
      northeast: {
        lat: number
        lng: number
      }
      southwest: {
        lat: number
        lng: number
      }
    }
  };
}

export interface GooglePlaceAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface GooglePlaceAutocompletePrediction {
  description: string;
  place_id: string;
  types: string[];
}

export interface GooglePlaceAutocompleteResponse {
  predictions: GooglePlaceAutocompletePrediction[];
  status: string;
}

export interface GooglePlaceAutocompleteZipPrediction {
  description: string;
  place_id: string;
}

export interface GooglePlaceAutocompleteZipResponse {
  results: GooglePlaceAutocompleteZipPrediction[];
  status: string;
}
