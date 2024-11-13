import style from "./Button.module.css"

export default function Button() {

    const btn_text = "leggi di più"

    return (
        <button className={style.btn}>{btn_text.toUpperCase()}</button>
    )
}