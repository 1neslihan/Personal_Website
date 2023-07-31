import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-sm" style={{ width: "70%" }}>
        <div className="pt-5">
          <img
            src="./public/profilepic2.jpg"
            width="250"
            alt="NeslihansProfile.png"
            // className="pattern-diagonal-lines-md gray-light p-1"
            style={{borderRadius:"50%"}}
          />
        </div>
        <p className="text-primary fs-5 fw-bold pt-3">Neslihan Çakırbaş</p>
        <p className="fw-bold">Junior Full-stack Developer</p>

        <div className="text-start" id="AboutMe">
          <h3 className="fs-4 fw-bold text-primary">Hello there!</h3>
          <p>
            I'm Neslihan Çakırbaş, a computer engineer with a focus on
            <span className="fw-bold text-primary">
              {" "}
              full-stack development.
            </span>{" "}
            I graduated from Sakarya University with a degree in Computer
            Engineering, where I had the opportunity to gain diverse experiences
            and skills through various projects and courses.
            <br />
            <br />
            Thanks to the UpSchool Full-Stack Development Bootcamp, I honed my
            skills in both frontend and backend technologies, working on
            real-world projects and expanding my expertise in web development.
            <br />
            <br />
            Currently, I work as a Junior Full-Stack Developer, where I actively
            contribute to team projects and continue to learn and grow in the
            ever-evolving tech industry.
            <br />
            <br />
            I'm eager to explore new opportunities and collaborate on exciting
            projects. If you're looking for a dedicated team member with a
            passion for innovation, I would love to hear from you.
            <br />
            <br />
            Let's create something amazing together!
          </p>

          <div style={{overflow:"hidden"}}>
            <h3 className="fs-4 fw-bold text-primary">My Skills</h3>
            <hr/>
            
            <p className="scrolling-text" >
              <a
                href="https://www.w3schools.com/cs/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                  alt="csharp"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://dotnet.microsoft.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
                  alt="dotnet"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://www.selenium.dev"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg"
                  alt="selenium"
                  width="100"
                  height="100"
                />
              </a>

              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="100"
                  height="100"
                />
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="100"
                  height="100"
                />
              </a>

              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="100"
                  height="100"
                />
              </a>
              <a href="https://mariadb.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg"
                  alt="mariadb"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://www.microsoft.com/en-us/sql-server"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                  alt="mssql"
                  width="100"
                  height="100"
                />
              </a>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="100"
                  height="100"
                />
              </a>
              <a href="https://postman.com" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="100"
                  height="100"
                />
              </a>

              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="100"
                  height="100"
                />
              </a>
            </p>
          </div>
        </div>
        <div className="text-start mt-5" id="MyProjects">
          <h3 className="fs-4 fw-bold text-primary">My Projects</h3>
          <hr/>

          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="card">
                <img
                  src="./crawler.png"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Crawler Web App</h5>
                  <p className="card-text">
                    This project is a web-based data scraping application that
                    allows users to select a desired product category,
                    automatically navigate to a specific e-commerce website,
                    collect product information, and provides order management,
                    data export, and notification options.
                  </p>
                  <a
                    href="https://github.com/1neslihan/UpSchool-FullStack-Development-Bootcamp/tree/master/Crawler"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View on Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="card">
                <img
                  src="./drumKit.png"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Drum Kit</h5>
                  <p className="card-text">
                    This application offers an impressive virtual drumming
                    experience, allowing users to produce various drum sounds by
                    either pressing keyboard keys or clicking on images with the
                    mouse. It serves as an ideal tool for anyone looking to
                    enhance their musical abilities and explore their sense of
                    rhythm.
                  </p>
                  <a
                    href="https://1neslihan.github.io/simpleDrumSoundWebSite/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go to app
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="card">
                <img
                  src="./DiceGame.png"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Dice Game</h5>
                  <p className="card-text">
                    Welcome to 'Dice Game' Test your luck by rolling two dice,
                    and let the higher value reign supreme! Embrace the
                    excitement of this captivating game of chance and emerge as
                    the ultimate dice conqueror!
                  </p>
                  <a
                    href="https://1neslihan.github.io/simpleDiceGame/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go to app
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="card">
                <img
                  src="./SimonGame.png"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Simon Game</h5>
                  <p className="card-text">
                    Simon Game is a fun reflex game that tests the user's memory
                    and attention by challenging them to follow colorful
                    patterns. Remember and repeat the sequences correctly to
                    advance and beat your high score!
                  </p>
                  <a
                    href="https://1neslihan.github.io/simonGame/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go to app
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="card">
                <img
                  src="./toDo.PNG"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">To-do App</h5>
                  <p className="card-text">
                    Introducing our To-Do app: Stay organized effortlessly!
                    Manage tasks efficiently, set reminders, and prioritize
                    goals for maximum productivity. Simplify your life with our
                    user-friendly interface. Conquer your tasks with ease!
                  </p>
                  <a
                    href="https://1neslihan.github.io/todoApp/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go to app
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="card">
                <img
                  src="./iftar.gif"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Turkey fast-breaking time App</h5>
                  <p className="card-text">
                    My web app offers accurate iftar (fast-breaking) timings
                    during Ramadan in Turkey. By entering their location, users
                    can quickly check the precise time to break their fast. Stay
                    informed and prepared with my user-friendly Ramadan timing
                    solution.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View on Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="card">
                <img
                  src="./StokTakip.png"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Stock Tracking form</h5>
                  <p className="card-text">
                    Efficiently manage your stock portfolio with our intuitive
                    app. Stay informed about stock movements, analyze trends,
                    and make well-informed decisions. Easily track your
                    investments and access real-time stock data anytime,
                    anywhere!
                  </p>
                  <a href="#" className="btn btn-primary">
                    View on Github
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="card">
                <img
                  src="./tindog.PNG"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Tindog responsive web design</h5>
                  <p className="card-text">
                    My design is a visually engaging responsive web interface
                    that effectively adapts to various devices, ensuring a
                    seamless user experience.It serves as a static
                    representation, showcasing the intended final product's
                    layout and aesthetic appeal.
                  </p>
                  <a
                    href="https://1neslihan.github.io/tinDog-responsive-web-calismasi/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go to design
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-start" id="ContactMe">
          <h3 className="fs-4 fw-bold text-primary">Contact Me</h3>
          <hr/>
          <p>
            <a href="https://linkedin.com/in/neslihançakırbaş" target="_blank">
              <img
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="neslihançakırbaş"
                height="30"
                width="40"
              />
            </a>
            <a href="https://www.hackerrank.com/dl_neslihan" target="_blank">
              <img
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
                alt="dl_neslihan"
                height="30"
                width="40"
              />
            </a>
            <a href="https://github.com/1neslihan" target="_blank">
              <img
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                alt="dl_neslihan"
                height="30"
                width="40"
              />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
