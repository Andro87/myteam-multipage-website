import styles from "./director.module.scss";
import { ReactNode, useState } from "react";
import Cross from "../svg/icon-cross.svg";
import Close from "../svg/icon-close.svg";
import Twitter from "../svg/icon-twitter.svg";
import Linkedin from "../svg/icon-linkedin.svg";
interface Props {
    readonly picture: ReactNode;
    readonly header: string;
    readonly position: string;
    readonly name: string;
    readonly paragraph: string;
}

const Director: React.FunctionComponent<Props> = props => {
    const { picture, header, position, name, paragraph } = props;

    const [more, setMore] = useState(false);
    return (
        <div className={styles.container_wrap}>
            <div
                className={`${styles.container}  ${more ? styles.flip : null}`}
            >
                <div className={styles.info_front}>
                    <div className={styles.picture}>{picture}</div>
                    <h3> {header}</h3>
                    <p className={styles.position}>{position}</p>
                    <button
                        type="button"
                        title="button"
                        className={styles.btn_plus}
                        onClick={() => setMore(!more)}
                    >
                        <Cross />
                    </button>
                </div>

                <div className={styles.info_back}>
                    <h3> {name}</h3>
                    <p>{paragraph}</p>
                    <div className={styles.social}>
                        <Twitter />
                        <Linkedin />
                    </div>

                    <button
                        type="button"
                        title="button"
                        className={`${styles.btn_plus} ${styles.btn_close}	`}
                        onClick={() => setMore(!more)}
                    >
                        <Close />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Director;
