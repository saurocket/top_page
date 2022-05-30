import React, {useContext, useEffect, KeyboardEvent} from 'react';
import {AppContext} from "../../context/app.context";
import {IFirstLevelMenuItem, PageItem} from '../../interfaces/menu.interface';
import cn from 'classnames';
import styles from './Menu.module.css';
import Link from 'next/link';
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";
import { motion, useReducedMotion } from 'framer-motion';



const Menu: React.FC = (): JSX.Element => {
    const {menu, setMenu, firstCategory = 0} = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0 }
    }
    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    }

    const handlerOpenSC = (sc:string) => {
            setMenu && setMenu(menu.map(m => {
                if (m._id.secondCategory === sc) {
                    m.isOpen = !m.isOpen
                }
                return m
            }))
    }
    const keyboardOpen = (key:KeyboardEvent, sc:string) => {
        if (key.code === 'Enter' || key.code === 'space') {
            key.preventDefault()
            handlerOpenSC(sc)
        } else {
            return
        }
    }

    const buildFirstLevel = (): JSX.Element => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id == firstCategory
                                })}>
                                    {m.icon}
                                    <span >{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>

        );
    };

    const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => {
        return (
            <div className={styles.secondBlock}>
                {menu?.length && menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpen = true;
                    }
                    return (
                        <div  key={m._id.secondCategory}>
                            <div
                                tabIndex={0}
                                onKeyDown={(key:KeyboardEvent) => keyboardOpen(key, m._id.secondCategory) }
                                className={styles.secondLevel}
                                onClick={() => handlerOpenSC(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </div>
                            <motion.div
                                layout
                                variants={variants}
                                initial={m.isOpen ? "visible": "hidden"}
                                animate={m.isOpen ? "visible": "hidden"}
                                className={styles.secondLevelBlock}
                            >
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpen ?? false)}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean): JSX.Element => {
        return (
            <>
                {pages.length && pages.map(page => (
                    <motion.div
                        key={page._id}
                        variants={variantsChildren}
                    >
                        <Link
                            href={`/${route}/${page.alias}`}
                        >
                            <a
                                tabIndex={isOpened ? 0 : -1}
                                className={cn(styles.thirdLevel, {
                                    [styles.thirdLevelActive]: `/${route}/${page.alias}`  === router.asPath
                                })}
                            >
                                {page.category}
                            </a>
                        </Link>
                    </motion.div>
                ))}
            </>
        );
    };


    return (
        <div>
            {buildFirstLevel()}
        </div>
    );
};

export default Menu;
