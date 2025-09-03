import './App.css';
import ProfileCard from './components/CardProfile';


function App() {


  const profilesData = [
    {
      id: 1,
      imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
      name: 'Igor Progênio',
      title: 'Codinome Bobbie goods',
      age: 19,
      university: 'Universidade Luterana do Brasil',
      course: 'Ciência da Computação',
      github: 'https://github.com/hexaMe-bit',
      time: 'Flamengo' 
    },
    {
      id: 2,
      imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
      name: 'Lucas Leal',
      title: 'Lucassssssss Lucasssss é do tottenham  tinha que ser você Lucassss',
      github: 'https://github.com/Luckleal',
      time: 'Fluminense' 
    },
    {
      id: 3,
      imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
      name: 'Jonas Gabriel',
      title: 'Goooooooool é do corinthians gui negão, saiu do terrão para decidir o jogo',
      github: 'https://github.com/jonasssgabriel',
      time: 'Corinthians'
    }
  ];

  const sortedProfiles = [...profilesData].sort((profileA,profileB) => profileA.name.localeCompare(profileB.name))
  return (
  <div className='App'>
      <h1 className="main-title">oh shit here we go again!</h1>
      <div className='profiles-container'>
        
        {sortedProfiles.map((profile
        ) => profile.name === "Igor Progênio" ? (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              imageUrl={profile.imageUrl}
              title={profile.title}
              time = {profile.time}
              github={profile.github}
              age={profile.age}
              university={profile.university}
              course={profile.course}
            />
          ) : (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              imageUrl={profile.imageUrl}
              title={profile.title}
              time = {profile.time}
              github={profile.github}
              
            />
            )
          )
        }
      </div>
    </div>    
  );
}

export default App
