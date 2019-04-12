import React from 'react';
import style from './MenuTab.css'
import classNames from 'classnames';

const MenuTab = ({isActive, children, handleOnclick}) => {
    return (
        <div className=/*{classNames({
            [style.menu]: true,
            [style.isActive]: isActive,
        })}*/"isActive menu">
            {children}
            <div className="underline">

            </div>
        </div>
    );
};

export default MenuTab;