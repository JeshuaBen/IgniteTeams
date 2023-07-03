import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import NewGroup from "@screens/NewGroup";
import Players from "@screens/Players";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="groups"
    >
      <Screen name="groups" component={Groups} />
      <Screen name="newGroup" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
};

export default StackRoutes;
