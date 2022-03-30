import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import styles from './Form.component.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Form = ({textItem, onHandleChangeItem, add}) => (
    <View style={styles.container}>
        <Text style={styles.title}>Add an item</Text>
        <TextInput 
            placeholder='item'
            value={textItem}
            onChangeText={onHandleChangeItem}
            style={styles.input}
        />
        <TouchableOpacity style={styles.btn} onPress={add}>  
            <Text style={styles.btnText} >Enviar</Text>
        </TouchableOpacity>
    </View>
);

export default Form;
