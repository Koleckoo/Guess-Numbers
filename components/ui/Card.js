import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color";

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 380 ? 16 : 32,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4, // only works in android
        shadowColor: 'black', // shadow properties work on IOS
        shadowOffset: {
            width: 0, height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})
export default Card;