import { Text } from 'react-native';
import { Provider } from 'react-redux';
import ThreeWordSelector from '../components/threeWordSelector';
import store from './store';


export default function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <Text>Three Word Index</Text>
        <ThreeWordSelector/>
      </Provider>
    </>
  );
}