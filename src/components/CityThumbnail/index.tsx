import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

export default function CityThumbnail({
  name,
  thumbnail,
}: {
  name: string;
  thumbnail: ImageSourcePropType;
}) {
  return (
    <View style={Style.container}>
      <Image style={Style.thumbnail} source={thumbnail} />
      <Text ellipsizeMode='tail' numberOfLines={1} style={Style.name}>
        {name}
      </Text>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: '#ECF2F8',
    padding: 12,
    borderRadius: 16,
    gap: 12,
    width: 105,
  },
  thumbnail: {
    width: 48,
    height: 48,
    borderRadius: 100,
    objectFit: 'cover'
  },
  name: {
    fontFamily: 'Nunito-Black',
    fontSize: 14,
    color: '#000'
  }
});
