export default function posts({params}){
    return (
        <main>
            <h1>
                Posts
            </h1>
            <p>{params.slug}</p>
        </main>
    )
}