import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import DropdownComponent from './UI/DropdownComponent';

const ThreeWordSelector = () => {
  const navigationWords = useSelector((state: any) => state.navigationWords.value);
  const [currentPosition, setCurrentPosition] = React.useState(0);

  useEffect(() => {
    console.log('navigationWords changed');
    // if (currentPosition < 2) {
    //   let nextWord = currentPosition + 1;
    //   console.log('Setting current word to position:', nextWord);
    //   setCurrentPosition(nextWord);
    //}
  }, [navigationWords]);

  function changeFocusWord(position: number) {
    setCurrentPosition(position);
  }


  return (
    <>
      
        <Pressable onPress={() => changeFocusWord(0)}><Text>{navigationWords[0]}</Text></Pressable>
        <Pressable onPress={() => changeFocusWord(1)}><Text>{navigationWords[1]}</Text></Pressable>
        <Pressable onPress={() => changeFocusWord(2)}><Text>{navigationWords[2]}</Text></Pressable>

      <DropdownComponent key={currentPosition} wordCount={currentPosition} />

    </>
  );
}
export default ThreeWordSelector;