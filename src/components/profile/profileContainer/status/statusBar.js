import React from "react";
import style from "./statusBar.module.css";
import {ReactComponent as SendIcon} from "../new_post/img/send_icon.svg";


class StatusBar extends React.Component {

    state = {
        editFlag: false,
        status: this.props.profileStatus
    }

    editStatus = () => {
        this.setState({
            editFlag: true
        })
    }

    setStatus = (event) => {
        this.props.setUserStatusThunkCreator(event.currentTarget.value)
        this.setState({
            editFlag: false
        })
    }

    changeStatus= (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, perevState) {

        if (prevProps.profileStatus !== this.props.profileStatus) {
            return {
                status: this.props.profileStatus
            };
        }
        return null
    }


    render() {

        return (
            <div className={style.wrapper}>
                <p className={style.header}>STATUS</p>
                {
                    !this.state.editFlag &&
                    <span className={`${style.textArea} ${style.span}`}
                          onClick={this.editStatus}>{this.props.profileStatus}</span>
                }
                {
                    this.state.editFlag &&
                    <input className={style.textArea} autoFocus={true} onBlur={this.setStatus}
                           onChange={this.changeStatus} value={this.state.status}/>
                }
                <button className={style.button}><SendIcon className={style.svg}/></button>
            </div>
        )

    }
}

export default StatusBar
