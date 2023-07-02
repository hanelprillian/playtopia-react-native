import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../components/Text';
import { positional } from 'yargs';

function NotificationButton() {
  return (
    <TouchableOpacity style={Style.notificationButton}>
      <Image
        style={{width: 24, height: 24}}
        source={require('../assets/icons/bell-black.png')}
      />
      <View style={Style.notificationBadge} />
    </TouchableOpacity>
  );
}

function Header() {
  return (
    <ImageBackground
      style={Style.header}
      source={require('../assets/images/homepage-bg.png')}
      resizeMode="cover">
      <View>
        <Text style={Style.headerGreetingText}>Hi</Text>
        <Text style={{...Style.headerGreetingText, fontWeight: 'bold'}}>
          Cameron Williamson
        </Text>
      </View>
      <View>
        <NotificationButton/>
      </View>
    </ImageBackground>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
    </ScrollView>
  );
}

const Style = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
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
  notificationButton: {
    backgroundColor: '#FFF',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  notificationBadge: {
    backgroundColor: '#FF2E29',
    width: 8,
    height: 8,
    borderColor: '#FFF',
    borderWidth: 2,
    borderStyle: 'solid',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 100,
  },
});
