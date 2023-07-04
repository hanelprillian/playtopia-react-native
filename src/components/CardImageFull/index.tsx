import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Text from '../Text';

interface Props {
  title: string;
  image: ImageSourcePropType;
  link?: string;
  btnText?: string;
  btnColor?: string;
  btnTextColor?: string;
  titleColor?: string;
}

function CardImageFull(props: Props) {
  return (
    <ImageBackground
      imageStyle={{borderRadius: 24}}
      source={props.image}
      style={Style.container}>
      <Text style={{...Style.title, color: props.titleColor}}>
        {props.title}
      </Text>
      <TouchableOpacity style={{...Style.btn, backgroundColor: props.btnColor}}>
        <Text style={{...Style.btnText, color: props.btnTextColor}}>
          {props.btnText}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

CardImageFull.defaultProps = {
  btnText: 'action',
  btnColor: '#00ADEE',
  btnTextColor: '#FFF',
  titleColor: '#FFF',
};

const Style = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24,
    height: 172,
    overflow: 'hidden',
    justifyContent: 'space-between'
  },

  title: {
    maxWidth: '70%',
    fontSize: 18,
    fontFamily: 'Nunito-Black',
    marginBottom: 16,
  },

  btn: {
    borderRadius: 50,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    maxWidth: 100,
  },

  btnText: {
    textAlign: 'center',
    fontSize: 10,
  },
});

export default CardImageFull;
