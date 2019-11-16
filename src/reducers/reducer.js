const initialState = {
    count: 0,
    openColorPopUp: false,
    anchorEl: null,
    noteId: "",
    loading: false,
    notes:[]
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
                openColorPopUp: !(state.openColorPopUp)
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
            };
        case 'GET_NOTES':
            console.log("\n\n\tGet notes --->")
            return {
                ...state,
                loading: true
            };
        case 'NOTES_RECEIVED':
            console.log("\n\n\tNotes received :---->",action.json)    
            return {
                ...state,
                notes:action.json,
                loading:false
            }
        default:
            return state;
    }


}
