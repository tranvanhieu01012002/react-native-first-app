import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderColor: "blue",
        borderWidth: 2,
        width: '40%',
        borderRadius:10
    },
    product:{
        alignItems:'center'
    },
    info: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    vote:{
        backgroundColor:'#FFC000',
        color:'#ffff'
    },
    sale: {
        width: 30,
        backgroundColor: "red",
        color: '#ffff',
        zIndex: 1,
        transform: [{ rotate: "-45deg" }]
    }
});
export default styles;