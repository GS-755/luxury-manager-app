import { Text, View } from "react-native";
import Styles from "../../style/Styles";

const Test = (): JSX.Element => {
  return (
    <>
      <View style={Styles.container}>
        <Text className="text-3xl">Test</Text>
      </View>
    </>
  );
}

export { Test };