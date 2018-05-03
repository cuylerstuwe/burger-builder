import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2})}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={props.ingredientAdded.bind(this, ctrl.type)}
                removed={props.ingredientRemoved.bind(this, ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>Order the stuff now.</button>
    </div>
);

export default buildControls;