import { Header } from "./assets/components/header/Header"
import { PostContainer } from "./assets/components/postContainer/PostContainer"
import { SideBar } from "./assets/components/sidebar/SideBar"
import "./assets/styles/css/main.css"


function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/ThiagoFuzi.png",
        name: "Thiago Coelho",
        role: "Java Developer"
      },
      content: [
       {type: "paragraph", content: "Fala galeraa 👋"},
       {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
       {type: "link", content: "thfuzi.design/doctorcare"}
      ],
      publishedAt: new Date("2023-01-12 16:15:00")
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/DigoSouza.png",
        name: "Rodrigo",
        role: "Estudante"
      },
      content: [
       {type: "paragraph", content: "Eae pessoal, tranquilo? 👋👋"},
       {type: "paragraph", content: "Acabei de aprender como utilizar mais uma tecnologia!!!. Em breve estarei subindo para meu Github!!"},
       {type: "link", content: "digomvdug.design/doctorcare"}
      ],
      publishedAt: new Date("2023-01-05 12:00:00")
    },
  ];

  return (
      <div>
        <Header />

        <div className="wrapper">
          <SideBar />
    
          <main>
            {posts.map(Post => {
              return <PostContainer 
                key={Post.id}
                author={Post.author}
                content={Post.content as []}
                publishedAt={Post.publishedAt}
              />
            })}
          </main>
        </div>
      </div>
  )

}



export default App
