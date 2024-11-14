import PostCard from "./PostCard/PostCard.jsx";
import posts from "../data/posts.js"

export default function AppMain() {


    // con map facciamo l'array di tutti gli array di tags.
    // con flat portiamo l'array di array ad un array di un livello solo.
    // con il costruttore Set avremo un oggetto contenente i tag senza duplicati.
    // tutto è nelle quadre, quindi avremo un array contenente quell'oggetto con tutti i tag.
    // con l'operatore spread esplodiamo l'oggetto.
    const allTags = [... new Set(posts.map(posts => posts.tags).flat())]
    console.log(allTags);


    return (
        <main>
            <div className="container">
                <section className="posts_section">
                    {/* ciclo con map e solo se published è true restituisco il post */}
                    {posts.map(post => post.published && <PostCard key={post.id} data={post} />)}
                </section>
                <section className="tags_section">
                    <h3>Tag dei post senza duplicati</h3>
                    {allTags.join(" | ")}
                </section>
            </div>
        </main>
    )
}