import {StyleSheet, View} from 'react-native';
import Text from '../Text';

export default function Divider({text}: {text?: string}) {
  return (
    <View style={Style.divider}>
      {text && <Text style={Style.text}>{text}</Text>}
    </View>
  );
}

const Style = StyleSheet.create({
  divider: {
    backgroundColor: '#DDD',
    height: 1,
    position: 'relative',
    alignItems: 'center'
  },

  text: {
    height: 20,
    paddingLeft:8, 
    paddingRight:8, 
    top: -8,
    zIndex: 10,
    backgroundColor: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
