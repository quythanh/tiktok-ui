import Logo from './Logo';
import SearchIcon from './Search';
import Xmark from './Xmark';
import Loading from './Loading';
import Checked from './Checked';

function SvgIcon({ name }) {
    switch (name) {
        case 'logo':
            return <Logo />;
        case 'search':
            return <SearchIcon />;
        case 'xmark':
            return <Xmark />;
        case 'loading':
            return <Loading />;
        case 'checked':
            return <Checked />;
        default:
            return null;
    }
}

export default SvgIcon;
