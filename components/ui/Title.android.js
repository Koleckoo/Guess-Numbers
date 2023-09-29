import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        // platform targeting styles ternary or select method on the platform API
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
})

export default Title;