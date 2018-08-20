import React, { Component } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { Segment } from "semantic-ui-react";

class RenderPlaceField extends Component {
  render() {
    let {
      input: { value, onChange },
      onSelect,
      meta
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <PlacesAutocomplete
          value={value}
          onChange={onChange}
          onSelect={onSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })}
              />
              {/* <Label  as='a'  pointing> */}
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <Segment>{suggestion.description}</Segment>
                      {/* {console.log(suggestion.description)}
                    {console.log(this.state.eventAddress)} */}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}

export default RenderPlaceField;
