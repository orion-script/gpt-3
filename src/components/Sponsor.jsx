import React from 'react';
import Google from "../assets/google.png";
import Slack from "../assets/slack.png";
import Atlassian from "../assets/atlassian.png";
import  Dropbox from "../assets/dropbox.png";
import Shopify from "../assets/shopify.png";


function Sponsor(props) {
    return (
        <div className="w-10/12 md:w-2/4 flex justify-between m-auto h-auto py-10">
            <img src={Google} alt={Google} className="w-2/12 h-5"/>
            <img src={Slack} alt={Slack} className="w-2/12 h-5"/>
            <img src={Atlassian} alt={Atlassian} className="w-2/12 h-5"/>
            <img src={Dropbox} alt={Dropbox} className="w-2/12 h-5"/>
            <img src={Shopify} alt={Shopify} className="w-2/12 h-5"/>
        </div>
    );
}

export default Sponsor;