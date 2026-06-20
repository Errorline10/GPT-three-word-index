import React from 'react';
import { Platform, Text, View } from 'react-native';
import YouTube from '../components/youtubeBlock/youTube';

function MasterPageView() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {(Platform.OS === 'web') ? <Text>Running on the web!</Text> : <Text>Running on a native platform!</Text>}
        <YouTube videoId="dQw4w9WgXcQ" />
      </View>
  );
}
export { MasterPageView };

