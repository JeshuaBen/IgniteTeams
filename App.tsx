import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";

export default function App() {
  // Carregamento de fontes é algo assíncrono, dado isto, temos que fazer a verificação se essas fontes já estão carregadas.

  const [areFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {areFontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
