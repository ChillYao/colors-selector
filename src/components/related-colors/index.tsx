import { Dispatch } from 'react';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import { AdjustColorActions } from '../color-reducer';
import RelatedColorPalette from './related-color-palette';

type RelatedColorsProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const RelatedColors = ({ hexColor, dispatch }: RelatedColorsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette
        dispatch={dispatch}
        title="Triad Colors"
        hexColors={triadColors}
      />
      <RelatedColorPalette
        dispatch={dispatch}
        title="Complimentary Colors"
        hexColors={complementColors}
      />
    </>
  );
};

export default RelatedColors;
