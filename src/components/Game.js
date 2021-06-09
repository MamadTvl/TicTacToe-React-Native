import React from "react";
import {ScrollView, Text, View} from "react-native";
import {Picker} from '@react-native-picker/picker';
import {Button} from 'react-native-paper';
import {styles} from "./styles/GameStyle";
import {useDispatch, useSelector} from "react-redux";
import {changeDifficulty} from "../redux";
import {changeMode, restartGame} from "../redux/board/action";
import Board from "./Board";
import {CodeIcon, HeartIcon} from "./icons";
import * as Linking from 'expo-linking';


const Game = () => {
    const {
        player1,
        player2,
        difficulty,
        turn,
        mode
    } = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch()

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.turn}>
                    {turn === 1 && player1.name}
                    {turn === 2 && player2.name}'s turn
                </Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        style={styles.picker}
                        mode={'dialog'}
                        selectedValue={difficulty}
                        onValueChange={
                            (itemValue) => dispatch(changeDifficulty(itemValue))
                        }
                    >
                        <Picker.Item label={'easy'} value={'easy'}/>
                        <Picker.Item label={'hard'} value={'hard'}/>
                        <Picker.Item label={'impossible'} value={'impossible'}/>
                    </Picker>
                    <Picker
                        style={styles.picker}
                        mode={'dialog'}
                        selectedValue={mode}
                        onValueChange={
                            (itemValue) => dispatch(changeMode(itemValue))
                        }
                    >
                        <Picker.Item label={'robot'} value={'robot'}/>
                        <Picker.Item label={'friendly'} value={'friendly'}/>
                    </Picker>
                </View>
                <Board/>
                {
                    player1.winner && player2.winner ?
                        <Text style={styles.info}>Draw</Text>
                        :
                        player1.winner ?
                            <Text style={styles.info}>
                                {player1.winner && `${player1.name} win`}
                            </Text>
                            :
                            <Text style={styles.info}>
                                {player2.winner && `${player2.name} win`}
                            </Text>
                }
                <Button
                    mode={'contained'}
                    onPress={() => dispatch(restartGame())}

                >
                    Restart
                </Button>
                <CodeIcon/>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Text
                        style={{
                            fontSize: 16,
                            marginRight: 8,
                        }}

                    >
                        created with
                    </Text>
                    <HeartIcon/>
                    <Text
                        style={{
                            fontSize: 16,
                            marginLeft: 8,
                        }}
                    >
                        By
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        marginLeft: 8,
                        textDecorationLine: "underline",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#607D8B"
                    }}
                          onPress={() => {
                              Linking.openURL('https://github.com/MamadTvl/TicTacToe-React-Native')
                          }}
                    >
                        MamadTvl
                    </Text>

                </View>
            </View>
        </ScrollView>
    )
}


export default Game
