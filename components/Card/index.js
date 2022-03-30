import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Card.component.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Card = ({data, onHandleDelete}) => (
    <View style={styles.container}>
        <Text style={styles.title}>{data.value}</Text>
        <TouchableOpacity onPress={onHandleDelete.bind(this, data.id)} style={styles.deleteBtn}>  
            <FontAwesome name="trash" size={20} color="#000"/>
        </TouchableOpacity>
    </View>
);

export default Card;
