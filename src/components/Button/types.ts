import { TouchableOpacityProps } from "react-native";

export type TButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

export type TButtonProps = TouchableOpacityProps & {
  title: string;
  type?: TButtonTypeStyleProps;
};
