import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,FlatList } from 'react-native';
import React ,{ useState } from 'react';

import { Card } from './components';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [itemList,setItemList] = useState([]);
  const [counter, setCounter] = useState(1);

  const add = () => {
    setCounter(counter + 1);
    setItemList((state) => [...state, { id: counter ,value: textItem}]);
  };

  const onHandleChangeItem = (t) => {
    return setTextItem(t)
  };

  const onHandleDelete = (itemID) => {
    setItemList((state) => state.filter(item => item.id != itemID));
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='item'
        value={textItem}
        onChangeText={onHandleChangeItem}
      />
      <Text>--------------------------</Text>
      <TouchableOpacity onPress={add}>  
        <Text>Enviar</Text>
      </TouchableOpacity>
      <View>
        <FlatList 
          data={itemList}
          renderItem={ data => (
            <Card data={data.item} key={data.item.id} onHandleDelete={onHandleDelete} />
          )}
          keyExtractor= {(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 20,
    backgroundColor: '#fff',
  },
});
