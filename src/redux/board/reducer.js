import {CHANGE_MODE, CHANGE_TURN, MOVE, RESTART_GAME} from "./types";
import {FINISH_GAME} from "./types";
import {CHANGE_PLAYER_STATE} from "./types";
import {CHANGE_DIFFICULTY} from "./types";

const initialState = {
    board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    gameFinished: false,
    player1: {
        name: 'player 1',
        winner: false,
        starter: true,
        label: 'x',
    },
    player2: {
        name: 'robot',
        winner: false,
        starter: false,
        label: 'o',
    },
    difficulty: 'easy',
    turn: 1,
    mode: 'robot',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE: {
            let board = state.board
            board[action.row][action.column] = action.label
            return {
                ...state,
                board: board
            }
        }
        case FINISH_GAME: {
            return {
                ...state,
                gameFinished: true,
            }
        }
        case CHANGE_PLAYER_STATE: {
            if (action.player === 'player1'){
                return {
                    ...state,
                    player1: action.details,
                }
            } else {
                return {
                    ...state,
                    player2: action.details,
                }
            }
        }
        case CHANGE_DIFFICULTY: {
            return {
                ...state,
                difficulty: action.difficulty,
            }
        }
        case CHANGE_TURN: {
            return {
                ...state,
                turn: action.turn,
            }
        }
        case CHANGE_MODE: {
            return {
                ...state,
                mode: action.mode
            }
        }
        case RESTART_GAME: {
            return {
                ...state,
                board: [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                ],
                gameFinished: false,
                player1: {
                    ...state.player1,
                    winner: false,
                    starter: true,
                    label: 'x',
                },
                player2: {
                    ...state.player2,
                    winner: false,
                    starter: false,
                    label: 'o',
                },
                turn: 1,
            }
        }
        default:
            return state
    }
}

export default reducer
