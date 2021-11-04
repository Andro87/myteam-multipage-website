import styles from "./header.module.scss";
import Link from "next/link";
import Logo from "../svg/logo.svg";
import Hambuger from "../svg/icon-hamburger.svg";
import Close from "../svg/icon-close.svg";
import Button from "../components/button";
import { useState } from "react";
interface Props {
    readonly onMobile: Function;
}

const Header: React.FunctionComponent<Props> = props => {
    const { onMobile } = props;
    const [open, setOpen] = useState(false);
    return (
        <header className={styles.header}>
            <Logo />

            <div
                className={`${styles.navigation_wrap} ${
                    open ? styles.navigation_mobile : null
                }`}
            >
                <nav className={styles.navigation}>
                    <Link href="/">
                        <a>home </a>
                    </Link>
                    <Link href="/about">
                        <a>about </a>
                    </Link>
                </nav>
                <Link href="/contact">
                    <a>
                        <Button title="contact us" />
                    </a>
                </Link>
            </div>
            <button
                type="button"
                aria-label="menu"
                className={styles.menu_btn}
                onClick={() => {
                    setOpen(!open);
                    onMobile();
                }}
            >
                {!open ? <Hambuger /> : <Close />}
            </button>
        </header>
    );
};

export default Header;
