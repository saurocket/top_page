import React from 'react';
import {ButtonIconProps, icons} from "./ButtonIcon.props";
import styles from './ButtonIcon.module.css'
import cn from 'classnames'


const ButtonIcon:React.FC<ButtonIconProps> = ({appearance,
                                          className,
                                          icon,...props}):JSX.Element => {
    const IconComponent = icons[icon]
    return (
        <button
            className={cn(className, styles.button,{
            [styles.primary]: appearance === 'primary',
            [styles.white]: appearance === 'white'
        })}
            {...props}
        >
            {<IconComponent/>}

        </button>
    );
};

export default ButtonIcon;
