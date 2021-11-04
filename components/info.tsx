import { ReactNode } from "react";
import styles from "./info.module.scss";

interface Props {
    readonly icon: ReactNode;
    readonly paragraph: string;
}

const Info: React.FunctionComponent<Props> = props => {
    const { icon, paragraph } = props;
    return (
        <div className={styles.info}>
            <div className={styles.icon_wrap}>{icon}</div>

            <p> {paragraph}</p>
        </div>
    );
};

export default Info;
