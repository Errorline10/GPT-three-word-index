import { YouTubePlayerComponentProps } from './youtubePlayerComponentProps';

const YouTubePlayerComponent = ({ videoId }: YouTubePlayerComponentProps) => {
  return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
  );
};

export default YouTubePlayerComponent;