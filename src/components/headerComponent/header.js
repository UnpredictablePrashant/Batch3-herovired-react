import React from "react";
import './header.css'

class Navheader extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div className="navbar">
                <input className="textbox" type="text" placeholder="Search"/>
            </div>
        )
    }
}
export default Navheader