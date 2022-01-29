import React from 'react';
import '../../assets/styles/TaskBar.scss'
import userPicture from '../../assets/images/user.png'

function UserUi(){


    return(
        <div className="UserUi">
            <div className="user--pic">
                <img src={userPicture} alt="" />
            </div>
            <div className="user--detail" >
                <p>
                    Good morning,
                </p>
                <h3>
                nate!
                </h3>
            </div>
        </div>
    )
}
export default UserUi;