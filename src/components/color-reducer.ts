import { rgb } from 'color-convert';
import { hsl } from 'color-convert';

export type UpdateHEXColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [r: number, g: number, b: number] };
};

export type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: { hsl: [h: number, s: number, l: number] };
};

export type AdjustColorActions =
  | UpdateHEXColorAction
  | UpdateRGBColorAction
  | UpdateHSLColorAction;

export type ColorState = {
  hexColor: string;
};

export const initialState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  switch (action.type) {
    case 'update-hex-color':
      return { ...state, ...action.payload };
    case 'update-rgb-color':
      const rgbHexColor = '#' + rgb.hex(action.payload.rgb);
      return { ...state, hexColor: rgbHexColor };
    case 'update-hsl-color':
      const hslHexColor = '#' + hsl.hex(action.payload.hsl);
      return { ...state, hexColor: hslHexColor };
    default:
      return state;
  }
};
