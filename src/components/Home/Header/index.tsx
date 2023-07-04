import {ImageBackground, StyleSheet, View} from 'react-native';
import Text from '../../Text';
import NotificationButton from '../../NotificationButton';

export default function HomeHeader() {
  return (
    <ImageBackground
      style={Style.header}
      source={require('../../../assets/images/homepage-bg.png')}
      resizeMode="cover">
      <View>
        <Text style={Style.headerGreetingText}>Hi</Text>
        <Text style={{...Style.headerGreetingText, fontWeight: 'bold'}}>
          Cameron Williamson
        </Text>
      </View>
      <View>
        <NotificationButton />
      </View>
    </ImageBackground>
  );
}

const Style = StyleSheet.create({
  header: {
    paddingTop: 50,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 225,
  },
  headerGreetingText: {
    fontSize: 14,
    color: '#005474',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
