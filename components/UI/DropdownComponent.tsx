import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AutocompleteDropdown, AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setNavigationWords } from '../../app/navigation/navigationWordsSlice';

import a from '../../CRUD/lookupTables/englishDictionary/a';
import b from '../../CRUD/lookupTables/englishDictionary/b';
import c from '../../CRUD/lookupTables/englishDictionary/c';
import d from '../../CRUD/lookupTables/englishDictionary/d';
import e from '../../CRUD/lookupTables/englishDictionary/e';
import f from '../../CRUD/lookupTables/englishDictionary/f';
import g from '../../CRUD/lookupTables/englishDictionary/g';
import h from '../../CRUD/lookupTables/englishDictionary/h';
import i from '../../CRUD/lookupTables/englishDictionary/i';
import j from '../../CRUD/lookupTables/englishDictionary/j';
import k from '../../CRUD/lookupTables/englishDictionary/k';
import l from '../../CRUD/lookupTables/englishDictionary/l';
import m from '../../CRUD/lookupTables/englishDictionary/m';
import n from '../../CRUD/lookupTables/englishDictionary/n';
import o from '../../CRUD/lookupTables/englishDictionary/o';
import p from '../../CRUD/lookupTables/englishDictionary/p';
import q from '../../CRUD/lookupTables/englishDictionary/q';
import r from '../../CRUD/lookupTables/englishDictionary/r';
import s from '../../CRUD/lookupTables/englishDictionary/s';
import t from '../../CRUD/lookupTables/englishDictionary/t';
import u from '../../CRUD/lookupTables/englishDictionary/u';
import v from '../../CRUD/lookupTables/englishDictionary/v';
import w from '../../CRUD/lookupTables/englishDictionary/w';
import x from '../../CRUD/lookupTables/englishDictionary/x';
import y from '../../CRUD/lookupTables/englishDictionary/y';
import z from '../../CRUD/lookupTables/englishDictionary/z';



interface MyAutocompleteProps {
  wordCount: number;
}

interface AutocompleteItem {
  id: number;
  title: string;
}

const MyAutocomplete: React.FC<MyAutocompleteProps> = (props) => {

  const [inputValue, setInputValue] = useState<string>('');
  const [firstLetterValue, setFirstLetterValue] = useState<string>('');
  const [data, setData] = useState<AutocompleteItem[]>([]);
  const [selectedItem, setSelectedItem] = useState({ id: 0, title: '' } as AutocompleteItem);

  const navigationWords = useSelector((state: any) => state.navigationWords.value);
  const dispatch = useDispatch();

  const [wordCount, SetWordCount] = useState<number>(props.wordCount);



  useEffect(() => {
    let tempWordsArray = [...navigationWords]
    tempWordsArray[wordCount] = selectedItem.title;
    dispatch(setNavigationWords(tempWordsArray));
  }, [selectedItem]);


  const handleInputChange = (word: string) => {
    let tempFirst = '';
    if (word && word[0].length > 0) {
      setInputValue(word);
      tempFirst = word[0].toLowerCase()
    } else { tempFirst = ''; }

    if (firstLetterValue !== tempFirst) {
      setFirstLetterValue(tempFirst);
      switch (tempFirst) {
        case '1': setData(a.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'a': setData(a.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'b': setData(b.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'c': setData(c.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'd': setData(d.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'e': setData(e.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'f': setData(f.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'g': setData(g.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'h': setData(h.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'i': setData(i.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'j': setData(j.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'k': setData(k.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'l': setData(l.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'm': setData(m.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'n': setData(n.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'o': setData(o.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'p': setData(p.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'q': setData(q.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'r': setData(r.data.map((item, key) => ({ id: key, title: item }))); break;
        case 's': setData(s.data.map((item, key) => ({ id: key, title: item }))); break;
        case 't': setData(t.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'u': setData(u.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'v': setData(v.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'w': setData(w.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'x': setData(x.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'y': setData(y.data.map((item, key) => ({ id: key, title: item }))); break;
        case 'z': setData(z.data.map((item, key) => ({ id: key, title: item }))); break;
        default: setData([]); break;
      }
    }
  };


  function whichWordLabel(count: number) {
    switch (count) {
      case 0: return 'First Word';
      case 1: return 'Second Word';
      case 2: return 'Third Word';
      default: return '';
    }
  }

  return (
    <View style={styles.container}>
      <Text>NavigationWords: {JSON.stringify(navigationWords)}</Text>
      <AutocompleteDropdownContextProvider>
        {selectedItem && (
          <Text style={styles.selection}>Selected: {selectedItem.title}</Text>
        )}

        <Text style={styles.label}>{whichWordLabel(wordCount)}</Text>


        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          dataSet={data}
          onSelectItem={(item) => item && setSelectedItem(item)}
          onChangeText={handleInputChange}
          textInputProps={{
            placeholder: 'word...',
          }}
        />
      </AutocompleteDropdownContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
    padding: 20,
    marginTop: 0,
  },
  label: {
    fontSize: 18,
    marginBottom: 0,
  },
  selection: {
    marginTop: 0,
    fontSize: 16,
  },
});

export default MyAutocomplete;