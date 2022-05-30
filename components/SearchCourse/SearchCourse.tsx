import React, {ChangeEvent,useState} from 'react';
import SearchIcon from './search.svg';
import styles from './SearchCourse.module.css';
import Input from "../Input/Input";
import Button from "../Button/Button";
import { SearchProps } from './Search.props';
import cn from 'classnames';
import {useRouter} from "next/router";

const SearchCourse:React.FC = ({className, ...props}:SearchProps) => {
    const [value, setValue] = useState<string>('');
    const router = useRouter();
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const goToSearch = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/search',
            query: {
                q: value
            }
        });

    };
    const handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            goToSearch(e);
        }
    };
    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder="Поиск"
                value={value}
                onChange={(e) => onChangeValue(e)}
                onKeyDown={(e)=> handleKeyDown(e)}
            />
            <Button
                className={styles.button}
                arrow="none"
                type="submit"
                appearance="primary"
                onClick={goToSearch}

            >
                <SearchIcon/>
            </Button>
        </div>
    );
};

export default SearchCourse;
