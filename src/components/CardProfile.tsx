interface CardProfileInterface {
    key: number,
    imageUrl: string,
    name: string,
    title: string,
    github: string,
    time: string,
    age?: number,
    university?: string,
    course?: string
}


function ProfileCard({ name, title, github, imageUrl, age, university, course, time }: CardProfileInterface) {
    return (
        <div className="card">
            <img src={imageUrl} alt={`foto do card ${name}`} className="card-img"/>
            <h2>{name}</h2>
            <p><strong>Titulo:</strong> {title} </p>
            {age && <p><strong>Idade:</strong> {age}</p>}
            {university && <p><strong>Universidade:</strong> {university}</p>}
            {course && <p><strong>Curso:</strong> {course}</p> }
            <p><strong>Time:</strong>{time}</p>
            <a href={github} target="_blank">
                <button className="button-github">Github</button>
            </a>
        </div>
    );
}

export default ProfileCard;