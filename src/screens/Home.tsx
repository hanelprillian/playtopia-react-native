import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Text from '../components/Text';
import HomepageStatistics from '../components/Home/Statistics';
import NotificationButton from '../components/NotificationButton';
import SearchPlaceInput from '../components/SearchPlaceInput';
import Divider from '../components/Divider';
import CityThumbnail from '../components/CityThumbnail';
import {useEffect, useState} from 'react';
import {getGlobalOptions} from '../services/graphql/global';

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

function CitySlider() {
  const [cities, setCities] = useState<{name: string}[]>([]);

  useEffect(() => {
    async function callGlobalApi() {
      const {response} = await getGlobalOptions();

      if (response.allCities) setCities(response.allCities);
    }

    callGlobalApi();
  }, []);

  const Style = StyleSheet.create({
    container: {
      marginTop: 15,
      marginBottom: 15,
    },
  });

  return (
    <ScrollView
      horizontal
      style={Style.container}
      contentContainerStyle={{gap: 16}}>
      {cities.map((city, index) => (
        <CityThumbnail
          key={`city-thumbnail-${index}`}
          name={city.name}
          thumbnail={require('../assets/images/example-city.png')}
        />
      ))}
    </ScrollView>
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
    contentTitle: {
      textAlign: 'center',
      marginTop: 12,
      marginBottom: 12,
      fontSize: 20,
      color: '#005474',
      fontFamily: 'Nunito-Black',
    },
    divider: {marginTop: 30, marginBottom: 30},
  });

  return (
    <View style={Style.contentContainer}>
      <View style={Style.content}>
        <HomepageStatistics />
        <Text style={Style.contentTitle}>Mau main dimana ?</Text>
        <SearchPlaceInput />
        <View style={Style.divider}>
          <Divider text="atau" />
        </View>
        <CitySlider />
      </View>
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
