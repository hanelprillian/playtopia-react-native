import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SearchPlaceInput() {
  return (
    <View style={Style.container}>
      <Image
        style={Style.searchIcon}
        source={require('../../assets/icons/search-black.png')}
      />
      <TextInput style={Style.input} placeholder="Cari lokasi bermain" />
      <TouchableOpacity style={Style.btn}>
        <Image
          style={Style.btnIcon}
          source={require('../../assets/icons/plus-white.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    borderRadius: 48,
    backgroundColor: '#E5F8FF',
    padding: 8,
  },

  searchIcon: {
    marginLeft: 16,
    width: 24,
    height: 24,
    objectFit: 'contain',
  },

  input: {
    borderWidth: 0,
    flex: 1,
  },

  btn: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
    borderRadius: 100,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '##00ADEE',
  },

  btnIcon: {
    width: 24,
    height: 24,
    objectFit: 'contain',
  },
});
