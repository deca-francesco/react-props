import PostCard from "./PostCard/PostCard.jsx";
import posts from "../data/posts.js"

export default function AppMain() {





    return (
        <main>
            <div className="container">
                <section className="posts_section">
                    {/* ciclo con map e solo se published è true restituisco il post */}
                    {posts.map(post => post.published && <PostCard key={post.id} data={post} />)}
                </section>

            </div>
        </main>
    )
}