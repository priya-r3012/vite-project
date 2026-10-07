import React from "react";
import { Avatar } from "./Avatar";

export default function ProfileCard() {
    return (
        <div className="profile-card">
            <Avatar />
            <h2>Priya</h2>
            <h3>Fronted development Student</h3>
            <p>I start learning React and want to become a skilled frontend developer.</p>
        </div>
    )
}