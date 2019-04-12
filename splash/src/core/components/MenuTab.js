import React from 'react';
import style from './MenuTab.module.css'
import classNames from 'classnames';

const MenuTab = ({ isActive, children, handleOnclick }) => {
    return (
        <div className={classNames(
            isActive ? style.isActive : style.notActive,
            style.menu
        )}>
            {children}
        </div>
    );
};

export default MenuTab;