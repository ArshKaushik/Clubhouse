import styles from './Card.module.css'

const Card = ({icon, title, children}) => {
    return (
        <div className={styles.card}>
            <div className={styles.headingWrapper}>
                <img width='22' src={`/svgs/${icon}.svg`} alt="logo" draggable='false'/>
                <h1 className={styles.heading}>{title}</h1>
            </div>
            {children}
        </div>
    )
}

export default Card
