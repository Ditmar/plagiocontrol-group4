import { React } from "react";
import '../../../App.css';
export const Head = () => {
    return (
        <div className="head">
            <div className="head1">
                <nav className="first">
                    <p className="first1">Overview</p>
                </nav>
                <nav className="second">
                    <div className="second1">
                        <input className="searc" Type="Text"/>
                        <input className="search" type="button"/>
                        <input className="notifi" type="button"/>
                    </div>
                    <div className="second2">
                        <p className="name">Jones Ferdinand</p>
                    </div>
                    <div className="second3">
                        <input className="photo" type="button"/>
                    </div>
                </nav>
            </div>
        </div>
    );
}