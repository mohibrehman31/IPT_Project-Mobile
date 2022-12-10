import React, { useState } from "react";

export const StartPage = (props) => {
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <button className="link-btn" onClick={() => props.onPageSwitch('StudentLogin')}>Student Login</button>
            <button className="link-btn" onClick={() => props.onPageSwitch('TeacherLogin')}>Teacher Login</button>
        </div>
    )
}