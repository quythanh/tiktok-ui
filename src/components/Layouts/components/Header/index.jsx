import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import SvgIcon from '~/components/icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => setSearchResult([1, 2]), 0);
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <SvgIcon name="logo" />

                {/* Search */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            {/* Clear */}
                            <SvgIcon name="xmark" />
                            {/* Loading */}
                            <SvgIcon name="loading" />
                        </button>

                        <button className={cx('search-btn')}>
                            {/* Search button */}
                            <SvgIcon name="search" />
                        </button>

                        <div className={cx('border')}></div>
                    </div>
                </Tippy>

                {/* Action */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
