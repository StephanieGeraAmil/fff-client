import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
import {Combobox,ComboboxInput,ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import React from 'react'
import "@reach/combobox/styles.css";


export const Search =({ panTo })=> {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // we prefer results ner our location
      location: { lat: () => -34.90328, lng: () => -56.18816 },
      //3km
      radius: 300 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect} className="combobox">
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
          className="inputcombobox"
        />
        <ComboboxPopover portal={false} className='pop_over' >
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption  className='pop_over_suggestion' key={id+description} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
