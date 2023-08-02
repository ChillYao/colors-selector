import { AdjustColorActions } from './components/color-reducer';

type PropsWithHexColor<P> = P & {
  hexColor: string;
};

type PorpsWithDispatch<P> = P & {
  dispatch: React.Dispatch<AdjustColorActions>;
};

type PropsWithHexColorAndDispatch<P> = P &
  PropsWithHexColor &
  PorpsWithDispatch;
