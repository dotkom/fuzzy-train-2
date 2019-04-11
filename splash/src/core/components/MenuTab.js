import React from 'react';
import style from './MenuTab.css';
import classNames from 'classnames';

const MenuTab = ({isActive, children, handleOnclick}) => {
    return (
        <button className={classNames({
            [style.menu]: true,
            [style.isActive]: isActive,
        })}>
            {children}
        </button>
    );
};

export default MenuTab;