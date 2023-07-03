import * as S from "./styles";

import logoImg from "@assets/logo.png";
import { Props } from "./types";
import { useNavigation } from "@react-navigation/native";

export const Header: React.FC<Props> = ({ showBackButton = false }) => {
  const navigation = useNavigation();

  const handleReturnGroupScreen = () => {
    navigation.navigate("groups");
  };

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleReturnGroupScreen}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  );
};
