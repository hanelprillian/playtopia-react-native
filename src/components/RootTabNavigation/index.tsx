import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const icons: {[key: string]: ImageRequireSource} = {
  'Home-Default': require('../../assets/icons/homepage-black.png'),
  'Home-Focused': require('../../assets/icons/homepage-white.png'),
  'Order-Default': require('../../assets/icons/order-black.png'),
  'Order-Focused': require('../../assets/icons/order-white.png'),
  'PlayCard-Default': require('../../assets/icons/playcard-white.png'),
  'PlayCard-Focused': require('../../assets/icons/playcard-white.png'),
  'Outlet-Default': require('../../assets/icons/outlet-black.png'),
  'Outlet-Focused': require('../../assets/icons/outlet-white.png'),
  'Account-Default': require('../../assets/icons/user-black.png'),
  'Account-Focused': require('../../assets/icons/user-white.png'),
};

export default function RootTabNavigation({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  return (
    <View style={Style.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const icon =
          icons[`${route.name}-${isFocused ? 'Focused' : 'Default'}`];
        const btnStyle = {
          container:
            route.name === 'PlayCard'
              ? {
                  ...Style.buttonTabIconContainerPlayCard,
                  backgroundColor:
                    Style.buttonTabIconContainerPlayCard.backgroundColor,
                }
              : {
                  ...Style.buttonTabIconContainer,
                  backgroundColor: isFocused
                    ? '#00ADEE'
                    : Style.buttonTabIconContainer.backgroundColor,
                },
          icon:
            route.name === 'PlayCard'
              ? Style.buttonTabIconPlayCard
              : Style.buttonTabIcon,
          text:
            route.name === 'PlayCard'
              ? {
                  color: '#FF5CBC',
                }
              : {color: isFocused ? '#00ADEE' : '#222'},
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            style={Style.buttonTab}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={btnStyle.container}>
              <Image style={btnStyle.icon} source={icon} />
            </View>
            <Text
              style={{
                ...btnStyle.text,
                fontSize: 12,
                fontFamily: 'Nunito-Regular',
              }}>
              {label.toString()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    borderTopColor: '#F3F3F3',
    borderTopWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  buttonTab: {
    paddingTop: 7,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTabIconContainer: {
    backgroundColor: '#E5F8FF',
    width: 32,
    height: 32,
    borderRadius: 100,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTabIconContainerPlayCard: {
    backgroundColor: '#EB008B',
    width: 40,
    height: 40,
    borderRadius: 100,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTabIcon: {
    width: 16,
    height: 16,
    objectFit: 'contain',
  },
  buttonTabIconPlayCard: {
    width: 24,
    height: 24,
    objectFit: 'contain',
  },
});
