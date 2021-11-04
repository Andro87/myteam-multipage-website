import styles from "./button.module.scss";

interface Props {
    readonly title: string;
    readonly color?: string;
}

const Button: React.FunctionComponent<Props> = props => {
    const { title, color } = props;
    return (
        <button type="button" className={`${styles.btn} ${styles[color]}`}>
            {title}
        </button>
    );
};

export default Button;
