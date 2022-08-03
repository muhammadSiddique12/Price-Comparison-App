import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

const PriceInner = ({ props, route }) => {
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (route.params.site === "daraz") {
      setUrl(`https://www.daraz.pk/catalog/
        ?spm=a2a0e.searchlistcategory.search.1.4a3284far1W6lV&q=${route.params?.target}`);
    } else {
      setUrl(
        `https://www.aliexpress.com/premium/cosmetics.html?d=y&origin=y&catId=0&initiative_id=SB_20220329091429&SearchText=${route.params?.target}`
      );
    }

    return () => {
      setUrl("");
    };
  }, [route]);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={styles.container}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default PriceInner;
