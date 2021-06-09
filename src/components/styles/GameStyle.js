import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 16,
    },
    turn: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
    },
    pickerContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    picker: {
        width: '50%',
        textAlign: 'center',
    },
    row: {
        // borderWidth: 1,
        // borderColor: 'red',
        display: 'flex',
    },
    block: {
        // borderWidth: 1,
        borderColor: '#607D8B',
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    table: {
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
    }


})
