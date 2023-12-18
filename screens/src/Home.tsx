import Styles from "../../style/Styles";
import MainLayout from "../layout/MainLayout";
import { Button, Text, View } from "react-native";

const apiPath = process.env['API_PATH'];
const Home = ({ navigation }): JSX.Element => {
  return (
    <>
      <MainLayout>
        <View style={Styles.container}>
          <Text className="font-bold text-3xl text-red-500">Hello, world!</Text>
          <View style={Styles.section}>
            <Text>Current API Path is: {apiPath}</Text>
          </View>
          <View style={Styles.section}>
            <Button
              title="Go to Test page"
              onPress={() => navigation.navigate('Test')}
            />
          </View>
        </View>
      </MainLayout>
    </>
  );
}

export { Home };