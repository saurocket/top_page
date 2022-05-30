import React, {FunctionComponent, useState, KeyboardEvent, useRef} from 'react';
import {LayoutProps} from "./Layout.props";
import styles from "./Layout.module.css"
import SideBar from "./Sidebar/SideBar";
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import {AppContextProvider, IAppContext} from "../context/app.context";
import Up from "../components/Up/Up";
import cn from 'classnames'

const Layout: React.FC<LayoutProps> = ({children}): JSX.Element => {
    const [skip, setSkip] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null)

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code === 'Enter' || key.code === 'Space') {
            key.preventDefault()
            bodyRef && bodyRef.current.focus();
        } else {
            setSkip(false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <a
                onFocus={() => setSkip(true)}
                onKeyDown={(key) => skipContentAction(key)}
                tabIndex={1}
                className={cn(styles.skipLink, {
                [styles.skipLinkVisible]: skip
            })}
            >Cразу к содержанию</a>
            <Header
                className={styles.header}
            />
            <SideBar className={styles.sidebar}/>
            <div
                ref={bodyRef}
                tabIndex={0}
                className={styles.body}
            >
                {children}
            </div>
            <Footer className={styles.footer}/>
            <Up/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext >(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        );
    };
};



