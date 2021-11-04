import styles from "./start.module.scss";

import Button from "../components/button";
const Start: React.FunctionComponent = () => {
    return (
        <section className={styles.section_start} aria-label="get started">
            <div className={styles.start_container}>
                <h2>Ready to get started?</h2>
                <Button title="contact us" color="dark" />
            </div>
        </section>
    );
};

export default Start;
