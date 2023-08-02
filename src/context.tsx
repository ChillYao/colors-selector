import { Dispatch, useReducer } from 'react';
import { PropsWithChildren } from 'react';
import {
  AdjustColorActions,
  colorReducer,
  initialState,
} from './components/color-reducer';
import { createContext } from './create-context';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

export const [useColorContext, ContextProvider] =
  createContext<ColorContextState>();

export const useContext = useColorContext;

export const useHexColor = () => {
  const { hexColor } = useColorContext();
  return hexColor;
};

export const useDispatch = () => {
  const { dispatch } = useColorContext();
  return dispatch;
};

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  const hexColor = state.hexColor;
  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
