import { Text, View } from 'react-native';
import styles from './Card.component.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Card = ({name}) => (
    <View style={styles.container}>
        <Text>{name}</Text>
    </View>
);

export default Card;
