//changing color of note 

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core' // overiding default css properties
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { updateNote } from '../services/services'
import { connect } from 'react-redux';
import {colorPopUp,anchor,noteIdAction} from './actions'

const theme = createMuiTheme({
    overrides: {
        'MuiPaper': {
            'elevation1': {
                boxShadow: "0px 0px 3px 0px #888888",
            }
        },
        'MuiFormControl': {
            'marginNormal': {
                width: "100%"
            }
        },
        'MuiButton': {
            'containedPrimary': {
                top: "90%",
                left: "80%"
            }
        },
        'MuiPopover': {
            'paper': {
                minWidth: "0px",
                maxWidth: "1000px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "75%"
            }
        }
    }
})
const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

const colorsPallete = [{
    colorName: "White",
    colorCode: "#ffffff"
},
{
    colorName: "Pink",
    colorCode: "#fdcfe8"
},
{
    colorName: "Gray",
    colorCode: "#e8eaed"
},
{
    colorName: "Dark blue",
    colorCode: "#aecbfa"
},
{
    colorName: "Blue",
    colorCode: "#cbf0f8"
},
{
    colorName: "Teal",
    colorCode: "#a7ffeb"
},
{
    colorName: "Green",
    colorCode: "#ccff90"
},
{
    colorName: "Yellow",
    colorCode: "#fff475"
},
{
    colorName: "Orange",
    colorCode: "#fbbc04"
},
{
    colorName: "Red",
    colorCode: "#f28b82"
},
{
    colorName: "Purple",
    colorCode: "#d7adfb"
},
{
    colorName: "Dark Brown",
    colorCode: "#e6c9a7"
}]

 class ColorPopover extends Component {
    state = { openColorPopUp: false,anchorEl:null,noteId:"" };
    constructor() {
        super()
        this.state = {
           // anchorEl: null,
            show: false
        }
        this.classes = useStyles.bind(this);
    }
    handlePopoverOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget })

    }
    handlePopoverClose = () => {
        this.setState({ anchorEl: null })
    }

    changingColorOfNote = (event, index) => {
        console.log("\n\n\tInitiating color change -->");
        let value = null
        this.props.anchor(value) // closing color menu
        this.props.colorPopUp() // closing color menu
        let colorObject = {}
        // colorObject.noteId = this.props.settingColor._id
        console.log("note id retrived --->",this.props.noteId)
        colorObject.noteId=this.props.noteId
        colorObject.updating = { color: colorsPallete[index].colorCode }
        console.log("object before sending",colorObject)

        updateNote(colorObject).then((coloredNote) => {
            console.log(`\n\n\t ${colorsPallete[index].colorName} set to note --> ${this.props.settingColor}`)
           // this.props.refreshPostColorChange()
          //  this.setState({ anchorEl: null })
         
        })


    }
    render() {
        //const { anchorEl } = this.state
       // const open = Boolean(anchorEl)
       console.log("color pop up value",this.props.anchorEl)
        // console.log(`\n\n\tanchorel -->${this.props.achorEl} and openColorPopUp -->${this.props.openColorPopUp}`)
        return (
            <div >
                <MuiThemeProvider theme={theme}>
                    <Menu
                       anchorEl={this.props.anchorEl}
                      // anchorEl={this.props.anchorEl}
                       // open={open}
                       open={this.props.openColorPopUp}
                     //  onClose={this.handlePopoverClose}
                       onClose={this.props.openColorPopUp} 
                       id="HandleMenu"
                    >
                        {colorsPallete.map((choice, index) => (
                            <Tooltip title={choice.colorName}>
                                <IconButton onClick={(event) => this.changingColorOfNote(event, index)} style={{ margin: "2px", borderRadius: "40px", backgroundColor: choice.colorCode }}  key={index}
                                    id="dropMenu">
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Menu>
                </MuiThemeProvider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state of color pop over ",state)
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
    noteIdAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPopover); // counter component connected to redux and the connection is exported
