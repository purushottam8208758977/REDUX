const initialState = {
    count: 0,
    openColorPopUp: false,
    anchorEl: null,
    noteId: ""
};
export function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'INCREMENT':
            //console.log("\n\nincrement --->", state.count + 1)
            return {
                count: state.count + 1 // increment
            };
        case 'DECREMENT':
            // console.log("\n\ndecrement --->", state.count - 1)

            return {
                count: state.count - 1 //decrememnt
            };
        case 'RESET':
            // console.log("\n\nRESET --->", state.count)

            return {
                count: 0
            };
        case 'COLORPOPUP': // for opening the color pop up
            console.log("\n\n\topenColorPopUp", state.openColorPopUp)
            return {
                ...state,
                openColorPopUp: true
            };
        case 'ANCHOREL': // for opening the color pop up
            console.log("\n\n\tanchorEl", action.value)
            return {
                ...state,
                anchorEl: action.value
            };
        case 'NOTEID': // for opening the color pop up
            console.log("\n\n\tNote id in index.js", action.value)
            return {
                ...state,
                noteId: action.value
            }
        default:
            return state;
    }


}
