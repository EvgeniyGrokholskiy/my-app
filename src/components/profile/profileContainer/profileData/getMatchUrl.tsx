import React from "react"
import GetProfileData from "./getProfileData"
import {PathMatch, useMatch} from "react-router"
import { IGetMatchUrlProps } from "../../../../types/types"


const GetMatchUrl: React.FC<IGetMatchUrlProps> = (props) => {
    const match:PathMatch<"userId"> | null = useMatch("/profile/:userId")

    return (
        <GetProfileData {...props} match={match}/>
    )
}

export default GetMatchUrl