// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";

export const decrement = () => ({ type: "DECREMENT" });
export const increment = () => ({ type: "INCREMENT" });

export const colorPopUp = () => ({ type: "COLORPOPUP" })
export const anchor = (value) => ({ type: "ANCHOREL", value: value })

export const noteIdAction = (passedId) => ({ type: "NOTEID", value: passedId })
export const getNotesRefresh = () => ({ type: "GET_NOTES" })
export const dbNotesReceived=(data)=>({type :"NOTES_RECEIVED",jsonData:data})