import { ReactNode } from "react";
import { Text, View } from "react-native";
import Styles from "../../style/Styles";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <>
      <View style={Styles.nonContainer}>
        <View>
          <Text>Main layout</Text>
        </View>
        <View>
          {children}
        </View>
      </View>
    </>
  );
}

export default MainLayout;