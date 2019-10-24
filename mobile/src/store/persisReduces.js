import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistConfig = persistReducer(
    {
      timeout: 0,
      key: 'gobarber',
      storage: AsyncStorage,
      whiteList: ['auth', 'user'],
    },
    reducers
  );

  return persistConfig;
};
