import { ReactNode } from "react";
import styles from "./detail.module.scss";

interface Props {
    readonly icon: ReactNode;
    readonly header: string;
    readonly paragraph: string;
}

const Detail: React.FunctionComponent<Props> = props => {
    const { icon, header, paragraph } = props;
    return (
        <div className={styles.detail_container}>
            {icon}
            <div className={styles.detail}>
                <h3>{header}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default Detail;
