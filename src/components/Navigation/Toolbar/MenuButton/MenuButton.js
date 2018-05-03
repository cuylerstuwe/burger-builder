import React from 'react';

import classes from './MenuButton.css';

const menuButton = (props) => {
    return (
        <div class={classes.MenuButton}>
            <button onClick={props.showSideDrawerCallback}>MENU</button>
        </div>
    );
}

export default menuButton;