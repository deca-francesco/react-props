import style from "./PostCard.module.css"
import Button from "../Button/Button.jsx"

export default function PostCard({ data }) {




    return (
        <div className={style.post_card}>
            <div className={style.top}>
                <img className={style.image} src={data.image} alt="placeholder" />
            </div>
            <div className={style.bottom}>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                <p className={style.tags}>
                    {/* per ogni tag ritorno uno span con con la classe = al tag e contenente il tag */}
                    {data.tags.map((tag, index) => <span key={index} className={style[tag]}>{tag} </span>)}
                </p>
                <Button />
            </div>
        </div>
    )
}