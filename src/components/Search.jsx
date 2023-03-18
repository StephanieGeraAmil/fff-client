import React, { useEffect } from "react";
import parse from "autosuggest-highlight/parse";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import {
  Box,
  TextField,
  Autocomplete,
  Typography,
  Grid,
  Stack,
} from "@mui/material/";
import { debounce } from "@mui/material/utils";
import { CenterMap } from "./map/MapSection";

const autocompleteService = { current: null };
const bounce = debounce((request, callback) => {
  autocompleteService.current.getPlacePredictions(request, callback);
}, 400);

export const Search = () => {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const handleSelect = async (placeId) => {
    try {
      const results = await getGeocode({ placeId: placeId });
      const { lat, lng } = await getLatLng(results[0]);
      CenterMap({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const loadPlacesLibrary = async () => {
    await window.google.maps.importLibrary("places");
    autocompleteService.current =
      await new window.google.maps.places.AutocompleteService();
  };

  useEffect(() => {
    loadPlacesLibrary();
  }, []);
  useEffect(() => {
    let active = true;

    if (autocompleteService.current) {
      if (inputValue === "") {
        setOptions([]);
        return undefined;
      }

      bounce({ input: inputValue }, (results) => {
        if (active) {
          let newOptions = [];
          if (results) {
            newOptions = [...newOptions, ...results];
          }
          setOptions(newOptions);
        }
      });
    }
    return () => {
      active = false;
    };
  }, [value, inputValue]);
  return (
    <Box role="presentation" sx={{ width: "100%", height: "90%" }}>
      <Autocomplete
        paperprops={{
          sx: { overflowY: "scroll", width: "100%", height: "100%" },
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleSelect(newValue.place_id);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        filterOptions={(x) => x}
        options={options}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.description
        }
        renderOption={(props, option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings || [];

          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match) => [match.offset, match.offset + match.length])
          );

          return (
            <li {...props} key={option.place_id}>
              <Grid container alignItems="center">
                <Grid
                  item
                  sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
                >
                  {parts.map((part, index) => (
                    <Box
                      key={index}
                      component="span"
                      sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
                    >
                      {part.text}
                    </Box>
                  ))}

                  <Typography variant="body3" color="text.secondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField {...params} label="Change location" fullWidth />
        )}
      />
    </Box>
  );
};
