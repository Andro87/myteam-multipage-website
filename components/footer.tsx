import styles from "./footer.module.scss";
import Logo from "../svg/logo.svg";
import Facebook from "../svg/icon-facebook.svg";
import Pinterest from "../svg/icon-pinterest.svg";
import Twitter from "../svg/icon-twitter.svg";

const Footer: React.FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div>
                    <div className={styles.logo}>
                        <img src="/images/logo.svg" alt="director" />
                    </div>
                    <div className={styles.link_wrap}>
                        <a href="#">home </a>
                        <a href="#">about </a>
                    </div>
                </div>
                <div className={styles.info}>
                    <p> 987 Hillcrest Lane </p>
                    <p> Irvine, CA</p>
                    <p> California 92714 </p>
                    <p>Call Us : 949-833-7432</p>
                </div>
                <div className={styles.social}>
                    <Facebook />
                    <Pinterest />
                    <Twitter />
                </div>

                <p className={styles.copyright}>
                    Copyright 2020. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
