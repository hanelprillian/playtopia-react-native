import {PropsWithChildren} from 'react';
import {StyleSheet, Text as NativeText, TextStyle} from 'react-native';

export function ParagraphText(props: PropsWithChildren & {style?: TextStyle}) {
  return (
    <NativeText style={{...Style.ParagraphText, ...props.style}}>
      {props.children}
    </NativeText>
  );
}

export default function Text(props: PropsWithChildren & {style?: TextStyle}) {
  return <ParagraphText {...props} />;
}

const Style = StyleSheet.create({
  ParagraphText: {
    color: '#868686',
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
  },
});
