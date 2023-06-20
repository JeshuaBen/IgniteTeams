import { TouchableOpacityProps } from "react-native";

export type FilterStyleProps = {
  isFilterActive?: boolean;
};

export type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };
