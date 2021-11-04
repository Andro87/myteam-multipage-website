import { ReactNode } from "react";
import styles from "./story.module.scss";

interface Props {
    readonly header: string;
    readonly paragraph: string;
    readonly position: string;
    readonly image: ReactNode;
}

const Story: React.FunctionComponent<Props> = props => {
    const { header, paragraph, position, image } = props;
    return (
        <div className={styles.story_container}>
            <div className={styles.detail}>
                <p>{paragraph}</p>
                <h3>{header}</h3>
                <p className={styles.position}>{position}</p>
                <div className={styles.image}>{image}</div>
            </div>
        </div>
    );
};

export default Story;
