import React from "react";
import style from "./statusBar.module.css";
import {ReactComponent as SendIcon} from "../new_post/img/send_icon.svg";


class StatusClassComponent extends React.Component{

    state = {
        editMode: false,
        status: this.props.profileStatus
    }

    editModeOn = () => {
        this.setState({
            editMode: true
        })
    }

    editModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.setUserStatusThunkCreator(this.state.status);
    }

    setProfileStatus = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidMount() {

        if(this.state.status === ""){
            this.props.getUserStatusThunkCreator(this.props.id)
                .then((response)=>{
                    this.setState({
                        status: response
                    })
                })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        return !prevProps === this.props
    }

    render() {
        console.log("render StatusBar")
        return (
            <div className={style.wrapper}>
                <p className={style.header}>STATUS</p>
                {
                    !this.state.editMode &&
                    <span className={`${style.textArea} ${style.span}`}
                          onClick={this.editModeOn}>{this.props.profileStatus}</span>
                }
                {
                    this.state.editMode &&
                    <input className={style.textArea} autoFocus={true}
                           onChange={this.setProfileStatus} value={this.state.status}/>
                }
                <button className={style.button} onClick={this.editModeOff}><SendIcon className={style.svg}/></button>
            </div>
        )
    }
}

export default StatusClassComponent;
