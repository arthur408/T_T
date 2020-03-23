// Constants

import { Dimensions } from 'react-native';

const constants = {
  screen: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  colors: {
    bgBlack: 'black',
    field: '#2B2E39',
    tint: '#52BEB7'
  },
  isIphoneX: Dimensions.get("window").height / Dimensions.get("window").width > 2,
  styles: {
    wrapper: {
      flex: 1
    },
    wrapperCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    row: {
      flexDirection: 'row'
    },
    center: {
      width: '100%',
      alignItems: 'center'
    }
  }
};

export default constants;
