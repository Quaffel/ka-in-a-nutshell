import { NavbarItem, NavbarSection } from 'components/navbar/navbar';
import { places } from '../../content/index';

import * as React from 'react';
import { isNonEmptyArray, NonEmptyArray } from 'types/utilityTypes';

export function usePlacesSections(): NonEmptyArray<NavbarSection> {
  const sections = React.useMemo<Array<NavbarSection>>(() => {
    return Object.entries(places)
      .map(([categoryName, categoryPlaces]) => {
        const placesItems: Array<NavbarItem> = categoryPlaces.map(place => ({
          name: place.name
        }));

        return {
          name: categoryName,
          items: placesItems
        };
      });
  }, [places]);

  if (!isNonEmptyArray(sections)) {
    throw new Error("No places found");
  }

  return sections;
}