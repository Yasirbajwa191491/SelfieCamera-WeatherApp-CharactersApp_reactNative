import React from 'react';
import { Appbar,TextInput  } from 'react-native-paper';
import {View,Text} from "react-native"
const Header = ({route,navigation}) => {
console.log(route);
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <>
        <Appbar.Header>
      
      <Appbar.Content title="Yasir191491" subtitle={`Subtitle`} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      
    </Appbar.Header>
    <View>
      {/* <Text>
        {JSON.stringify(id)}
      </Text> */}
    </View>
    </>

  );
};
export default Header;