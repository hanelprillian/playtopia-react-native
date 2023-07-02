import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function NotificationButton() {
  const Style = StyleSheet.create({
    notificationButton: {
      backgroundColor: '#FFF',
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    notificationBadge: {
      backgroundColor: '#FF2E29',
      width: 8,
      height: 8,
      borderColor: '#FFF',
      borderWidth: 2,
      borderStyle: 'solid',
      position: 'absolute',
      top: 0,
      right: 0,
      borderRadius: 100,
    },
  });

  return (
    <TouchableOpacity style={Style.notificationButton}>
      <Image
        style={{width: 24, height: 24}}
        source={require('../../assets/icons/bell-black.png')}
      />
      <View style={Style.notificationBadge} />
    </TouchableOpacity>
  );
}
