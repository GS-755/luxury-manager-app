import Styles from "../../style/Styles";
import { Text, View } from "react-native";

const apiPath = process.env['API_PATH'];
const Home = (): JSX.Element => {
  return (
    <>
      <View style={Styles.container}>
        <Text className="font-bold text-3xl text-red-500">Hello, world!</Text>
        <View style={Styles.section}>
          <Text>Current API Path is: {apiPath}</Text>
        </View>
      </View>
    </>
  );
}

export { Home };