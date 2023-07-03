import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import { useTheme } from "styled-components/native";

export const Routes: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </View>
  );
};
