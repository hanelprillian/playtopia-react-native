import {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

export default function ({
  children,
  gap = 16,
}: PropsWithChildren & {gap?: number}) {
  return (
    <ScrollView
      horizontal
      onLayout={e => {
        console.log('========', e.nativeEvent.layout);
      }}
      onScroll={e => {
        console.log('========', e.nativeEvent.contentOffset);
      }}
      style={Style.container}
      contentContainerStyle={{gap}}>
      {children}
    </ScrollView>
  );
}

const Style = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
});
