import style from "./PostCard.module.css"
import Button from "../Button/Button.jsx"

export default function PostCard({ data }) {

    // const post = {
    //     placeholder: "600 x 400",
    //     title: "Titolo del Post",
    //     content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia id adipisci nobis laudantium amet tempore a, earum aspernatur reiciendis in neque autem. Necessitatibus nam dicta consequuntur ducimus laborum aut impedit."
    // }


    return (
        <div className={style.post_card}>
            <div className={style.top}>
                <span className={style.placeholder}>{data.image}</span>
            </div>
            <div className={style.bottom}>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                <p>{data.tags.join(", ")}</p>
                <Button />
            </div>
        </div>
    )
}