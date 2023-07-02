import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../Text';

export default function HomepageStatistics() {
  const Style = StyleSheet.create({
    statistics: {
      flexDirection: 'row',
    },
    statisticsExpWrapper: {
      width: '50%',
      paddingTop: 6,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
    },
    statisticsExpText: {
      fontSize: 10,
      color: '#005474',
      marginBottom: 8,
    },
    statisticsExpBar: {
      width: '100%',
      height: 6,
      borderRadius: 8,
      backgroundColor: '#5CD2FF',
      position: 'relative',
    },
    statisticsExpBarFilled: {
      borderRadius: 8,
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
    },
    statisticsExpBarFilledIcon: {
      width: 12,
      height: 11,
      position: 'absolute',
      top: -3,
      right: -3,
      objectFit: 'contain',
    },

    statisticsMilesWrapper: {
      width: '50%',
      paddingLeft: 12,
      paddingRight: 12,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    statisticsMilesTextContainer: {
      flex: 1,
    },
    statisticsMilesText: {
      fontSize: 10,
      color: '#710043',
    },
    statisticsMilesIcon: {
      width: 24,
      height: 24,
      fontSize: 10,
      color: '#710043',
    },
    statisticsMilesMoreIcon: {
      width: 16,
      height: 16,
    },
  });

  return (
    <View style={Style.statistics}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#E1F4FB', '#8ADFFF']}
        style={Style.statisticsExpWrapper}>
        <TouchableOpacity>
          <Text style={Style.statisticsExpText}>
            <Text style={{...Style.statisticsExpText, fontWeight: 'bold'}}>
              295 XP{' '}
            </Text>
            lagi jadi playlover
          </Text>
          <View style={Style.statisticsExpBar}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#2EC6FF', '#0BA1D9']}
              style={{...Style.statisticsExpBarFilled, width: '34%'}}>
              <Image
                style={Style.statisticsExpBarFilledIcon}
                source={require('../../../assets/icons/love-pink.png')}
              />
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFB7E2', '#FFE5F4']}
        style={Style.statisticsMilesWrapper}>
        <TouchableOpacity
          style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <Image
            style={Style.statisticsMilesIcon}
            source={require('../../../assets/icons/miles-badge.png')}
          />
          <View style={Style.statisticsMilesTextContainer}>
            <Text style={Style.statisticsMilesText}>PLAY MILES</Text>
            <Text
              style={{
                ...Style.statisticsMilesText,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              50000
            </Text>
          </View>
          <Image
            style={Style.statisticsMilesMoreIcon}
            source={require('../../../assets/icons/chevron-right-pink.png')}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
