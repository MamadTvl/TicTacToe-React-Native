import {CHANGE_MODE, MOVE, RESTART_GAME} from "./types";
import {FINISH_GAME} from "./types";
import {CHANGE_PLAYER_STATE} from "./types";
import {CHANGE_DIFFICULTY} from "./types";
import {CHANGE_TURN} from "./types";

export const move = (row, column, label) => {
    return {
        type: MOVE,
        row: row,
        column: column,
        label: label,
    }
}

export const finishGame = () => {
    return {
        type: FINISH_GAME,
    }
}

export const changePlayerState = (player, details) => {
        return {
            type: CHANGE_PLAYER_STATE,
            player: player,
            details: details
        }
}

export const changeDifficulty = (difficulty) => {
    return {
        type: CHANGE_DIFFICULTY,
        difficulty: difficulty,
    }
}

export const changeTurn = (turn) => {
    return {
        type: CHANGE_TURN,
        turn: turn
    }
}

export const changeMode = (mode) => {
    return {
        type: CHANGE_MODE,
        mode: mode,
    }
}

export const restartGame = () => {
    return {
        type: RESTART_GAME,
    }
}
