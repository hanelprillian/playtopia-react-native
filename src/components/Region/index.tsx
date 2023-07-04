import {StyleSheet, View} from 'react-native';
import Text from '../Text';
import {PropsWithChildren} from 'react';

export default function ({
  title,
  children,
}: {title?: string} & PropsWithChildren) {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>{title}</Text>
      <View style={Style.content}>{children}</View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    color: '#090909',
    fontFamily: 'Nunito-Black'
  },
  content: {},
});
