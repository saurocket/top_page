import React from 'react';
import {FooterProps} from "./Footer.props";
import styles from "./Footer.module.css"
import cn from 'classnames'
import {format} from 'date-fns'

const Footer: React.FC<FooterProps> = ({className,...props}): JSX.Element => {
    return (
            <footer
                className={cn(className, styles.footer)}
                {...props}
            >
                    <ul className={styles.ul}>
                        <li className={styles.copyright}>OwlTop © {format(new Date(), 'yyyy')} Все права защищены</li>
                        <li className={styles.person}>
                            <a href='google.com' target='_blank'>
                                Пользовательское соглашение
                            </a>
                        </li>
                        <li className={styles.assets}>
                            <a href="google" target='_blank'>
                                Политика конфиденциальности
                            </a>
                        </li>
                    </ul>
            </footer>
    );
};

export default Footer;
