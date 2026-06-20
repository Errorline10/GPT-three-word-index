import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { YouTubePlayerComponentProps } from './youtubePlayerComponentProps';

const YouTubePlayerComponent = ({ videoId }: YouTubePlayerComponentProps) => {
  return (
    <View style={{ width: '100%', height: 300 }}>
      <YoutubePlayer
        height={300}
        videoId={videoId}
      // other native props
      />
    </View> 
  )
};

export default YouTubePlayerComponent;