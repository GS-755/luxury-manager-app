import { Home } from "./screens/src/Home";
import { Test } from "./screens/src/Test";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = (): JSX.Element => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Test" component={Test}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;