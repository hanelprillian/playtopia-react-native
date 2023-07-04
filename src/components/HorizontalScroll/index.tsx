import {PropsWithChildren, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export default function ({
  children,
  gap = 16,
}: PropsWithChildren & {gap?: number}) {
  const [scrollOffset, setScrollOffset] = useState<{
    width: number;
  }>({
    width: 0,
  });
  const [scrollPosition, setScrollPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const currentPosition = useMemo(() => {
    return (
      ((scrollPosition.x > 0 ? scrollPosition.x : 1) /
        (scrollOffset.width > 0 ? scrollOffset.width : 1)) *
      100
    );
  }, [scrollOffset, scrollPosition]);

  return (
    <>
      <ScrollView
        horizontal
        onScroll={e => {
          setScrollOffset({
            ...scrollOffset,
            width:
              e.nativeEvent.contentSize.width -
              e.nativeEvent.layoutMeasurement.width,
          });
          setScrollPosition({
            x: e.nativeEvent.contentOffset.x,
            y: 0,
          });
        }}
        style={Style.container}
        contentContainerStyle={{gap}}>
        {children}
      </ScrollView>
      <View style={Style.scrollBar}>
        <View
          style={{
            ...Style.scrollCurrent,
            left: (currentPosition > 0 ? currentPosition / 100 : 0) * 50 - 5,
          }}></View>
      </View>
    </>
  );
}

const Style = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
  scrollBar: {
    width: 50,
    height: 6,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    position: 'relative',
    alignSelf: 'center',
  },
  scrollCurrent: {
    width: 9,
    height: 6,
    borderRadius: 8,
    backgroundColor: '#008FC5',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
});
