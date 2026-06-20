import { View } from 'react-native';
import YouTubePlayerComponent from './youTubePlayerComponent';
import { YouTubePlayerComponentProps } from './youtubePlayerComponentProps';


const YouTube = ({ videoId }: YouTubePlayerComponentProps) => {
  return (
    <View style={{ width: '100%', height: 300 }}>
      <YouTubePlayerComponent videoId="dQw4w9WgXcQ" />
    </View>
  );
};

export default YouTube
;