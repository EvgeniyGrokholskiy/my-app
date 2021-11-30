import React from "react";
import style from "./profile.module.css"
import NewPostContainer from "./profileContainer/new_post/new_postContainer";
import FriendsListContainer from "./profileContainer/friendsList/friendsListContainer";
import ProfileDataContainer from "./profileContainer/profileData/profileDataContainer";
import WallContainer from "./profileContainer/wall/wallContainer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/authRedirect";


const Profile = (props) => {

    return (
        <div className={style.gridContainer}>
            <div className={style.leftContainer}>
                <ProfileDataContainer/>
                <NewPostContainer />
                <WallContainer />
            </div>
            <div className={style.rightContainer}>
                <FriendsListContainer/>
            </div>
        </div>
    );
};



const mapStateToProps = (state)  => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}


const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;