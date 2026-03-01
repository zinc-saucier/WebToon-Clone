
import { Text, View, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import Icon from "react-native-vector-icons/Feather";

const SearchIcon = <Icon name="search" size={30} color={'#8c8c8c'} />;
const UserIcon = <Icon name="user" size={30} color={'#8c8c8c'} />;
const HomeIcon = <Icon name="home" size={30} color={'#8c8c8c'} />;

const router = useRouter();

const NavBar = () => {
    return (
        <View style={styles.container}>
            <div style={styles.buttons}>
                <Text style={styles.button} onPress={() => router.navigate('/(tab)/home')}>
                    {HomeIcon}
                    HOME
                </Text>
                <Text style={styles.button} onPress={() => router.navigate('/(tab)/search')}>
                    {SearchIcon}
                    SEARCH
                </Text>
                <Text style={styles.button} onPress={() => router.navigate('/(tab)/subscribed')}>
                    {UserIcon}
                    MY
                </Text>
                <Text style={styles.button}>
                    {HomeIcon}
                    Home
                </Text>
                <Text style={styles.button} onPress={() => router.navigate('/(tab)/home')}>
                    {HomeIcon}
                    Home
                </Text>
            </div>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        flexDirection: 'column-reverse'
    },
    buttons: {
        display: 'flex',
        backgroundColor: 'black',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'gray',
    },
})

export default NavBar;