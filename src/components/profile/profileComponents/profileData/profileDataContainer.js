import ProfileData from "./profileData";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{

    return {
        state: state.profile.profileData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const ProfileDataContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileData);

export default ProfileDataContainer;