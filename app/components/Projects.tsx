const Projects = () => {
  const projects = [
    {
      title: "LinkBin",
      description:
        "LinkBin is an innovative waste management solution that leverages IoT devices, blockchain technology, and smart contracts to revolutionize the way we manage and recycle waste",
      tech: [
        '/react',
        '/moralis',
        '/ethereum',
        '/chainlink',
        '/aws',
        '/iot',
        '/expressjs'
      ],
      techLink: [
        'https://react.dev/',
        'https://moralis.io/',
        'https://ethereum.org/en/',
        'https://chain.link/',
        'https://aws.amazon.com/',
        'https://www.oracle.com/in/internet-of-things/what-is-iot/',
        'https://expressjs.com/'
      ],
      image: "/linkBin.png",
      link: "https://devpost.com/software/linkbin",
    },
    {
      title: "eduDonor",
      description:
        "Edudoner is a prominent and forward-thinking organization dedicated to fostering education and innovation in the field of blockchain technology, with a specific focus on the Ethereum blockchain.",
        tech: [
          '/react',
          '/ethereum',
          '/ethersjs'
        ],
        techLink: [
          'https://react.dev/',
          'https://ethereum.org/en/',
          'https://docs.ethers.org/v6/'
        ],
      image: "/eduDonor.png",
      link: "https://monishwarmc.github.io/edudonor/",
    },
    {
      title: "SpringBoot",
      description: "Amigoscode course project of spring boot with postgreSQL",
      tech: [
        '/springBoot',
        '/docker',
        '/postgreSql'
      ],
      techLink: [
        'https://spring.io/projects/spring-boot',
        'https://www.docker.com/',
        'https://www.postgresql.org/'
      ],
      image: "/spring-boot-logo.png",
      link: "https://github.com/monishwarmc/springBoot-postgreSQL.git",
    },
    {
      title: "SolGenerator",
      description:
        "Generate sol for development, works on the solana devenet only",
        tech: [
          '/react',
          '/solana',
        ],
        techLink: [
          'https://react.dev/',
          'https://solana.com/',
        ],
      image: "/solGenerator.png",
      link: "https://monishwarmc.github.io/solGenerator/",
    },
  ];

  return (
    <div className="flex flex-col items-center w-11/12">
      <h1
      className="sm:text-7xl text-5xl text-orange-300 dark:text-orange-700 sm:pt-16 pt-6 pb-3 sm:pb-9"
      >Projects</h1>
    <div className="grid md:grid-cols-2 grid-cols-1">

      {
        projects.map((project, i) => (
          <section key={i}
          className="flex flex-col sm:p-3 items-center m-6 border-4 rounded-3xl border-sky-600"
          >
            <h2
            className="pt-3 sm:text-5xl text-3xl text-green-200 dark:text-green-600"
            >{project.title}</h2>
            <img
            className="sm:p-6 p-3"
            src={project.image}
            />
            <p
            className="sm:p-6 p-3 sm:text-lg text-md text-violet-200 dark:text-violet-600"
            >{project.description}</p>
            <div className="sm:flex grid grid-cols-3 sm:p-3">
                {
                  project.tech.map((t, i)=>(
                    <a key={i} href={project.techLink[i]}
                    className="px-3 py-1 animate-pulse"
                    >
                      <img
                      src={t + ".png"}
                      className="p-1 w-12 h-12 rounded-2xl hover:m-1 hover:p-2"
                      />
                    </a>
                  ))
                }
            </div>
            <a href={project.link} className="sm:p-2 p-1 animate-pulse border-4 rounded-full border-sky-300
            hover:bg-cyan-300 hover:p-3 text-red-200 sm:text-xl text-lg m-3 hover:text-black
            "
            >view more</a>
          </section>
        ))
      }
    </div>
    </div>
  );
};

export default Projects;
