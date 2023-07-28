import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';
import { AdjustColorActions } from '../color-reducer';

type HexToHSLProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const HexToHSL = ({ hexColor, dispatch }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) =>
          dispatch({
            type: 'update-hsl-color',
            payload: { hsl: [e.target.valueAsNumber, s, l] },
          })
        }
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) =>
          dispatch({
            type: 'update-hsl-color',
            payload: { hsl: [h, e.target.valueAsNumber, l] },
          })
        }
      />
      <LabeledInput
        label="L"
        type="number"
        value={l}
        onChange={(e) =>
          dispatch({
            type: 'update-hsl-color',
            payload: { hsl: [h, s, e.target.valueAsNumber] },
          })
        }
      />
    </section>
  );
};

export default HexToHSL;
