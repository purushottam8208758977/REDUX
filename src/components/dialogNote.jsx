import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import {updateNote} from '../services/services'
import {colorPopUp,anchor,noteIdAction,getNotesRefresh} from './actions'

//child components
import ColorPopover from './colorPopover'

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

 class DialogNote extends Component {
    state = { openColorPopUp: false,anchorEl:null,noteId:"" };
    constructor() {
        super()
        this.state = {
            title: "",
            description: ""
        }
        this.classes = useStyles.bind(this);
    }

    componentDidMount() { // by default we need to print the previous data on the note 
        this.setState({
            title: this.props.dialogData.title,
            description: this.props.dialogData.description
        })
    }
    fetchingTitle = (event) => {
        let fetchedTitle = event.target.value
        this.setState({
            title: fetchedTitle
        })
        console.log("\n\nTitle-->", fetchedTitle);
    }

    fetchingDescription = (event) => {
        let fetchedDescription = event.target.value
        this.setState({
            description: fetchedDescription
        })
        console.log("\n\nDescription-->", fetchedDescription);
    }

    colorOperation=(event)=>{
        this.props.colorPopUp()   // we made the menu rhs true
        let value= event.currentTarget
        console.log("event",event.currentTarget)
        this.props.anchor(value)
        let passedId=this.props.dialogData._id
        console.log("\n\n\tPassed id in dialog note",passedId)
        this.props.noteIdAction(passedId)
    }

    editingNote = () => {
        this.props.closeDialog()
        console.log(`\n\tEditing the note ${this.props.dialogData._id}... data to be sent -->`)

        let noteObject = {}
        noteObject.noteId = this.props.dialogData._id
        noteObject.updating = {
            title: this.state.title,
            description: this.state.description
        }

        console.log("\n\n\tObject ready to be sent --->", noteObject)

        updateNote(noteObject).then((responseReceived)=>{
            console.log("\n\n\tDialog note--> updating response--->",responseReceived)
            //this.props.refreshAfterEditing()
            this.props.getNotesRefresh()
        })

    }
    render() {
        return (
            <Card onClick={this.handleClickOpen} style={{backgroundColor:this.props.dialogData.color}}>
                <div id="dialog">
                    <TextField
                        id="standard-basic"
                        readOnly="true"
                        className={this.classes.textField}
                        value={this.state.title}  //binding title ...entry point into front end
                        onChange={this.fetchingTitle}  //invoking respective method to initiate reponse process to backend
                        margin="normal"
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                    <TextField
                        id="standard-basic"
                        readOnly="true"
                        className={this.classes.textField}
                        value={this.state.description}  //binding description ...entry point into front end
                        onChange={this.fetchingDescription}  //invoking respective method to initiate reponse process to backend
                        margin="normal"
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                </div>


                <div id="dialogIcons">
                    <Button><img src={require('../assets/reminder.svg')} alt="reminder pic"></img> </Button>
                    <Button> <img src={require('../assets/pallete.svg')} onClick={this.colorOperation} alt="pallete pic"></img>  </Button>
                    <Button> <img src={require('../assets/archive.svg')} alt="archive pic "></img> </Button>
                    <Button onClick={(event) => this.handleMenu(event)}><MoreVertIcon></MoreVertIcon></Button>
                    <Button onClick={this.editingNote}><b>close</b></Button></div>
                   <ColorPopover/> 
            </Card >
        );
    }
}

function mapStateToProps(state) {
    console.log("states in dialog",state)
    return {
        openColorPopUp: state.openColorPopUp,
        anchorEl:state.anchorEl,
        noteId:state.noteId
    };
}

const mapDispatchToProps = {
   // increment,
    //decrement
    colorPopUp,
    anchor,
    noteIdAction,
    getNotesRefresh
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogNote); // counter component connected to redux and the connection is exported
