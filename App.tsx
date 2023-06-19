import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import NewGroup from "@screens/NewGroup";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";

export default function App() {
  // Carregamento de fontes é algo assíncrono, dado isto, temos que fazer a verificação se essas fontes já estão carregadas.

  const [areFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {areFontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
