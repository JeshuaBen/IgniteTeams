import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export type IconButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

export type IconButtonStyleProps = {
  type: IconButtonTypeStyleProps;
};

export type IconButtonProps = TouchableOpacityProps & {
  type?: IconButtonTypeStyleProps;
  iconName: keyof typeof MaterialIcons.glyphMap;
};
