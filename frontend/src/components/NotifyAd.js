import React from 'react';
import reactDom from 'react-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/notify.css";
import UserService from "../services/UserService";

function NotifyAd(props)
{
    function accept() {
        let ad = {adId:props.adId,companyName: props.companyName,userId:props.userId,desc:props.description,adDate:props.date,status:"Accepted"};
        console.log(ad)
        UserService.createAd(ad)
    }
    function reject(){
        let ad = {adId:props.adId,companyName: props.companyName,userId:props.userId,desc:props.description,adDate:props.date,status:"Rejected"};
        console.log(ad)
        UserService.createAd(ad)
    }


    return(
        <div className="inner-notify">
            <p><p>Ad Date<b>{props.date}</b></p> <p>Description <b>{props.description}</b></p> <p>Status<b>{props.status}</b></p></p>
            <div className="row">
                <div className="column"><button onClick={accept}>ACCEPT</button></div>
                <div className="column"><button onClick={reject}>REJECT</button></div>
            </div>
        </div>
    );
}

export default NotifyAd;