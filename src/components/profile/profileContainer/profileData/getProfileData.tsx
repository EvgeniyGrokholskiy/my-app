import React from "react";
import ProfileData from "./profileData";
import StatusBarWithHooks from "../status/statusBarWithHooks";
import NewPostContainer from "../new_post/new_postContainer";
import WallContainer from "../wall/wallContainer";
import {ProfileInitialStateType} from "../../../../redux/profileReducer";
import {AuthInitialStateType} from "../../../../redux/authReducer";
import {Dispatch} from "../../../../types/types";
import {PathMatch} from "react-router";

export interface IGetProfileData {
    state: ProfileInitialStateType
    auth: AuthInitialStateType
    profileStatus: string
    match: PathMatch<"userId"> | null
    getUserProfile: Dispatch
    getUserStatusThunkCreator: Dispatch
    setUserStatusThunkCreator: (status: string) => (dispatch: Dispatch) => Promise<void>
    authThunkCreator: Dispatch
    savePhoto: (photo: File) => (dispatch: Dispatch) => Promise<void>
    setUserProfileData: (data: Record<string, any>) => Promise<any>
}

class GetProfileData extends React.Component<IGetProfileData> {
    constructor(props: IGetProfileData) {
        super(props);
        this.state = {
            userId: null
        }
    }

    getUserData = (userId: string | number | null | undefined) => {
        this.props.getUserProfile(userId);
        this.props.getUserStatusThunkCreator(userId);
        this.setState({
            userId: userId
        })
    }

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.auth.id;
        if (!userId) return;
        this.getUserData(userId);
    }

    componentDidUpdate(prevProps:IGetProfileData, prevState:any) {
        let userId = this.props.match ? this.props.match.params.userId : this.props.auth.id
        if (userId !== prevState.userId) {
            this.getUserData(userId);
        }
    }

    render() {
        return (
            <>
                <ProfileData {...this.props} />
                <StatusBarWithHooks
                    profileStatus={this.props.profileStatus}
                    setUserStatusThunkCreator={this.props.setUserStatusThunkCreator}
                />
                <NewPostContainer/>
                <WallContainer wallMessageArray={[]}/>
            </>
        )
    }
}

export default GetProfileData