import style from "./PostCard.module.css"
import Button from "../Button/Button.jsx"

export default function PostCard({ data }) {


    function tagColor(array) {

        array.forEach(tag => {
            if (tag === "html") {
                return tag.classList.add("green")
            } else if (tag === "css") {
                return <span style="color: blue">{tag}</span >
            } else if (tag === "js") {
                return <span style="color: red">{tag}</span >
            } else if (tag === "php") {
                return <span style="color: yellow">{tag}</span >
            }
        })
    }





    const postTag = data.tags.forEach(tag => {
        return <span className="post_tag">{tag}</span>
    })

    function tagClass(className) {
        const post_tagEl = document.querySelectorAll(".post_tag")

        console.log(post_tagEl);

    }

    tagClass(postTag)

    return (
        <div className={style.post_card}>
            <div className={style.top}>
                <img className={style.image} src={data.image} alt="placeholder" />
            </div>
            <div className={style.bottom}>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                <p className={style.tags}>
                    {data.tags.map(tag => {

                        if (tag == "html") {
                            return <span style="color: green">{tag}</span >
                        } else if (tag == "css") {
                            return <span style="color: blue">{tag}</span >
                        } else if (tag == "js") {
                            return <span style="color: red">{tag}</span >
                        } else if (tag == "php") {
                            return <span style="color: yellow">{tag}</span >
                        }

                    })}
                </p>
                <Button />
            </div>
        </div>
    )
}