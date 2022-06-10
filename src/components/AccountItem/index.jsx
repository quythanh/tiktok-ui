import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import SvgIcon from '../icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7093391863029170177~c5_300x300.webp?x-expires=1654927200&x-signature=KF57VIUJlN85vNl7eKaJ%2BXbpGvU%3D"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    enchan._.tres
                    <SvgIcon name="checked" />
                </h4>
                <p className={cx('name')}>Khánh Ngọc96509</p>
            </div>
        </div>
    );
}

export default AccountItem;
