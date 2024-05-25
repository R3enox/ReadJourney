import { ButtonSbmt } from './Btn.styled';

export const BtnSbmt = ({ text }) => {
  return (
    <ButtonSbmt className="btnSbmt" type="submit">
      {text}
    </ButtonSbmt>
  );
};
