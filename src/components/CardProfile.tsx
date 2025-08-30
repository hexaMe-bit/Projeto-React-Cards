interface CardProfileInterface {
    key: number,
    imageUrl: string,
    name: string,
    title: string,
    github: string,
    age?: number,
    university?: string,
    course?: string
}


function ProfileCard({ name, title, github, imageUrl, age, university, course }: CardProfileInterface) {
    return (
        <div className="card">
            <img src={imageUrl} alt={`foto do card ${name}`} className="card-img"/>
            <h2>{name}</h2>
            <p><strong>Titulo:</strong> {title} </p>
             <p><strong>Idade:</strong> {age}</p>
             <p><strong>Universidade:</strong> {university}</p>
             <p><strong>Curso:</strong> {course}</p>
            <a href={github} target="_blank">
                <button className="button-github">Github</button>
            </a>
        </div>
    );
}

export default ProfileCard;