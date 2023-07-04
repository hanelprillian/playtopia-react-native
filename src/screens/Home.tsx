import {ScrollView, StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import Statistics from '../components/Home/Statistics';
import SearchPlaceInput from '../components/SearchPlaceInput';
import Divider from '../components/Divider';
import CityThumbnail from '../components/CityThumbnail';
import {useEffect, useState} from 'react';
import {getGlobalOptions} from '../services/graphql/global';
import Header from '../components/Home/Header';
import HorizontalScroll from '../components/HorizontalScroll';
import Region from '../components/Region';
import CardImageFull from '../components/CardImageFull';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <Content />
    </ScrollView>
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

  return (
    <HorizontalScroll>
      {cities.map((city, index) => (
        <CityThumbnail
          key={`city-thumbnail-${index}`}
          name={city.name}
          thumbnail={require('../assets/images/example-city.png')}
        />
      ))}
    </HorizontalScroll>
  );
}

// TODO: this is dummy data
const BLOG_DATA = [
  {
    title: 'Grand Opening Playtopia Margonda Depok',
    image: require('../assets/images/banner-promo-1.png'),
  },
  {
    title: 'Potongan 50rb untuk pengguna Baru aplikasi',
    image: require('../assets/images/banner-promo-2.png'),
    btnColor: '#EB008B',
  },
];

function Articles() {
  return (
    <Region title="Info & Promo">
      <View style={{marginLeft: -20, marginRight: -20}}>
        <HorizontalScroll>
          {BLOG_DATA.map((data, index) => (
            <View
              style={{
                width: 330,
                paddingLeft: index === 0 ? 20 : 0,
                paddingRight: index === BLOG_DATA.length - 1 ? 20 : 0,
              }}>
              <CardImageFull
                image={data.image}
                btnText="Beli Tiket"
                btnColor={data.btnColor}
                title={data.title}
              />
            </View>
          ))}
        </HorizontalScroll>
      </View>
    </Region>
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
        <Statistics />
        <Text style={Style.contentTitle}>Mau main dimana ?</Text>
        <SearchPlaceInput />
        <View style={Style.divider}>
          <Divider text="atau" />
        </View>
        <CitySlider />
      </View>
      <Articles />
    </View>
  );
}
