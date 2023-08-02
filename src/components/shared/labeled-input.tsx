import { ComponentPropsWithoutRef, useId } from 'react';

type LabeledInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

const LabeledInput = ({ label, onChange, id, ...props }: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} readOnly={!onChange} {...props} />
    </div>
  );
};

export default LabeledInput;
