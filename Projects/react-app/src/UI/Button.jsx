import styles from "./Button.module.css";

function Button({input}){
    return (
        <div className={`${styles.button} font-bold text-xl`}>
            {input}
        </div>
    )
}

export default Button