import React from "react";
import { Outlet } from 'react-router-dom';

const PublicLayout= (props:any) => {
    return (
        <div style={{ background: 'red', color: 'white' }}>
            <header>Header Two</header>
            {props.children ? props.children : <Outlet />}
            <footer>Footer One</footer>
        </div>

    )
};

export default PublicLayout;
