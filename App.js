import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,FlatList } from 'react-native';
import React ,{ useState } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [itemList,setItemList] = useState([]);
  const [counter, setCounter] = useState(1);

  const add = () => {
    setCounter(counter + 1);
    setItemList((state) => [...state, { id: counter ,value: textItem}]);
    console.log(textItem);
    console.log(itemList);
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
            <TouchableOpacity onPress={onHandleDelete.bind(this, data.item.id)}>  
              <View key={data.item.id}>
                <Text>{data.item.id} - {data.item.value}</Text>
              </View>
            </TouchableOpacity>
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
    margin: 80,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
