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
import LinearGradient from 'react-native-linear-gradient';

function NotificationButton() {
  const Style = StyleSheet.create({
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
        <NotificationButton />
      </View>
    </ImageBackground>
  );
}

function Content() {
  const Style = StyleSheet.create({
    contentContainer: {
      padding: 16,
    },
    content: {
      marginTop: -78,
      backgroundColor: '#FFF',
      borderRadius: 24,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 40,
      padding: 16,
    },
  });

  return (
    <View style={Style.contentContainer}>
      <View style={Style.content}>
        <Statistics />
      </View>
    </View>
  );
}

function Statistics() {
  const Style = StyleSheet.create({
    statistics: {
      flexDirection: 'row',
    },
    statisticsExpWrapper: {
      width: '50%',
      paddingTop: 6,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
    },
    statisticsExpText: {
      fontSize: 10,
      color: '#005474',
      marginBottom: 8,
    },
    statisticsExpBar: {
      width: '100%',
      height: 6,
      borderRadius: 8,
      backgroundColor: '#5CD2FF',
      position: 'relative',
    },
    statisticsExpBarFilled: {
      borderRadius: 8,
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
    },
    statisticsExpBarFilledIcon: {
      width: 12,
      height: 11,
      position: 'absolute',
      top: -3,
      right: -3,
      objectFit: 'contain',
    },

    statisticsMilesWrapper: {
      width: '50%',
      paddingLeft: 12,
      paddingRight: 12,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    statisticsMilesTextContainer: {
      flex: 1,
    },
    statisticsMilesText: {
      fontSize: 10,
      color: '#710043',
    },
    statisticsMilesIcon: {
      width: 24,
      height: 24,
      fontSize: 10,
      color: '#710043',
    },
    statisticsMilesMoreIcon: {
      width: 16,
      height: 16,
    },
  });

  return (
    <View style={Style.statistics}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#E1F4FB', '#8ADFFF']}
        style={Style.statisticsExpWrapper}>
        <TouchableOpacity>
          <Text style={Style.statisticsExpText}>
            <Text style={{...Style.statisticsExpText, fontWeight: 'bold'}}>
              295 XP{' '}
            </Text>
            lagi jadi playlover
          </Text>
          <View style={Style.statisticsExpBar}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#2EC6FF', '#0BA1D9']}
              style={{...Style.statisticsExpBarFilled, width: '34%'}}>
              <Image
                style={Style.statisticsExpBarFilledIcon}
                source={require('../assets/icons/love-pink.png')}
              />
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFB7E2', '#FFE5F4']}
        style={Style.statisticsMilesWrapper}>
        <TouchableOpacity
          style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <Image
            style={Style.statisticsMilesIcon}
            source={require('../assets/icons/miles-badge.png')}
          />
          <View style={Style.statisticsMilesTextContainer}>
            <Text style={Style.statisticsMilesText}>PLAY MILES</Text>
            <Text
              style={{
                ...Style.statisticsMilesText,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              50000
            </Text>
          </View>
          <Image
            style={Style.statisticsMilesMoreIcon}
            source={require('../assets/icons/chevron-right-pink.png')}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
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
      <Content />
    </ScrollView>
  );
}
