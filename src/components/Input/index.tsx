import { TextInputProps } from "react-native";
import * as S from "./styles";

const Input = ({ ...rest }: TextInputProps) => {
  return <S.Container {...rest} />;
};

export default Input;
