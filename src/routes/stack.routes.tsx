import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import NewGroup from "@screens/NewGroup";
import Players from "@screens/Players";

export type RootStackParamList = {
  Groups: undefined;
  Players: undefined;
  NewGroup: undefined;
};
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Groups"
    >
      <Screen name="Groups" component={Groups} />
      <Screen name="NewGroup" component={NewGroup} />
      <Screen name="Players" component={Players} />
    </Navigator>
  );
};

export default StackRoutes;
