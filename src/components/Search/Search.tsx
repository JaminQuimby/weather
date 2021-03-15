import React, { useEffect, useRef, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { useDispatch } from 'react-redux';
import { fetchWeatherFromApi } from '../../store/actions/weather';
import { fetchCities } from './../../api/placeSuggestion';
import { useClickOutside } from './../../hooks/useClickOutside';
import { LocationIcon, SearchIcon } from './SearchIcons';
import { LocationButton } from "../../containers/Search/SearchButtons";
import { SearchResultContainer } from "../../containers/Search/SearchResultContainer";
import { SearchInputContainer } from "../../containers/Search/SearchInputContainer";
import { SearchElementContainer } from "../../containers/Search/SearchElementContainer";
import Suggestion from './Suggestion';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const suggestionRef = useRef(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    setShowSuggestions(true);
    fetchCities(searchTerm).then((res) => {
      setSuggestions(res);
    });
  }, [searchTerm]);

  useClickOutside(suggestionRef, () => setShowSuggestions(false));

  const onSearchInputChanged = (e: any) => {
    setSearchTerm(e.target.value);
  };
  const showPosition = (position: any) => {
    dispatch(
      fetchWeatherFromApi({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };
  return (
    <SearchElementContainer>
      <SearchIcon />
      <DebounceInput element={SearchInputContainer} debounceTimeout={300} onChange={onSearchInputChanged} placeholder="Search for location" />
      <LocationButton
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert('Geolocation is not supported by this browser.');
          }
        }}
      >
        <LocationIcon />
      </LocationButton>
      {showSuggestions && (
        <SearchResultContainer ref={suggestionRef}>
          {suggestions?.slice(0, 6)?.map((s, i) => (
            <Suggestion
              key={i}
              label={s}
              hideSuggestionFn={() => {
                setShowSuggestions(false);
              }}
            />
          ))}
        </SearchResultContainer>
      )}
    </SearchElementContainer>
  );
};

export default Search;
