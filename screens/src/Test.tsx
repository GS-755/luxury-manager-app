import { Text, View } from "react-native";
import Styles from "../../style/Styles";
import MainLayout from "../layout/MainLayout";

const Test = (): JSX.Element => {
  return (
    <>
      <MainLayout>
        <View style={Styles.container}>
          <Text className="text-3xl">Test</Text>
        </View>
      </MainLayout>
    </>
  );
}

export { Test };