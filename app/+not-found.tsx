import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { MasterPageView } from '../views/masterPageView';


export default function NotFoundScreen() {

  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if window object exists (for web environment)
      setCurrentUrl(window.location.href);
    }
  }, []);


  const Tab = createBottomTabNavigator();

  const currentPath = ():string[]=>{
    let path = currentUrl.toUpperCase().split('/');
    let pathlen = path.length;  
    return [path[pathlen-3],path[pathlen-2],path[pathlen-1]];
  }

  return (
    <>
      <Stack.Screen options={{ title: 'ThreeWordIndex' }} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ThreeWordIndex</Text>
        <Text>{ currentPath().join(' / ') }</Text>
        <MasterPageView />
      </View>
    </>
  );
}
