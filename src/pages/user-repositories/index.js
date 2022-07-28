import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../services/api";
import { Header } from "../../components/header";
import { Modaltag } from "../../components/modaltag";
import { FiSearch } from "react-icons/fi";
// import { Input } from "semantic-ui-react";
import World from "../../../src/assets/world.svg";
import Time from "../../../src/assets/time.svg";
import Star from "../../../src/assets/star.svg";
import Person from "../../../src/assets/person.svg";
import Flag from "../../../src/assets/flag.svg";
import Iconlink from "../../../src/assets/iconlink.svg";
import Iconjob from "../../../src/assets/person.svg";
import Iconlocal from "../../../src/assets/iconlocal.svg";
import Arrow from "../../../src/assets/arrow.svg";
import Arrowtwo from "../../../src/assets/arrowtwo.svg";
import { Container, Avatar, Arrowstyle } from "./styled";
import { Link } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export { useQuery };
export default function UseRepositories({ props }) {
  const query = useQuery();
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);
  // const [input, setInput] = useState("");
  const [searchText] = useState("");

  const getUser = () => {
    Api.getByUsername(searchText).then((res) => setUser([res.data]));
  };

  useEffect(() => {
    Api.getByUsername(query.get("text")).then((res) => setUser(res.data));
    Api.getReposByUsername(query.get("text")).then((res) =>
      setRepositories(res.data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="user-left">
          <>
            <div className="user-info">
              <button onClick={() => getUser()}>
                <Link to={`/?text=${searchText}`} onClick={() => getUser()}>
                  <Arrowstyle src={Arrowtwo} alt="arrow" />
                </Link>
              </button>

              <div className="user">
                <Avatar
                  className="avatar"
                  src={user.avatar_url}
                  alt="avatar"
                ></Avatar>
              </div>

              <h1>{user.name}</h1>
              <br></br>
              <h3>@{user.login}</h3>
              <br></br>
              <p>Seguidores: {user.followers}</p>
              <p>Seguindo: {user.following}</p>
              <p>Favoritos: {user.starred}</p>
            </div>

            <div className="user-bio">
              <h1>Sobre</h1>
              <br></br>
              <p>{user.bio}</p>
              <br></br>
              <p>
                <img src={Iconjob} alt="iconjob" />
                {user.company}
              </p>
              <br></br>
              <p>
                <img src={Iconlocal} alt="iconlocal" />
                {user.location}
              </p>
              <br></br>
              <p>
                <img src={Iconlink} alt="iconlink" />
                {user.blog}
              </p>
            </div>

            <div className="important">
              <h1>Destaques</h1>
              <br></br>
              <img src={Flag} alt="iconejob" />
              <p>{user.public_repos}</p>
            </div>
          </>
        </div>

        <div className="user-right">
          {/* <input
              type="text"
              placeholder="Buscar um repositório..."
              value={Input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleRepositories}>
              <FiSearch size={20} color="#606060" />
            </button> */}

          <div className="searchinput">
            <input
              placeholder="Buscar um repositório.."
              // onChange={onChangeHandler}
            />
            <button
            // onClick={onButtonClickHandler}
            >
              <FiSearch size={20} color="#606060" />
            </button>
          </div>

          {repositories.map((repo, index) => (
            <div key={index}>
              <div className="repo-info">
                <h1>
                  {repo.name}

                  <a href="https://github.com/repos + " target="_blanck">
                    <Arrowstyle src={Arrow} alt="arrow" />
                  </a>
                </h1>
                <br></br>
                <p>{repo.description}</p>

                <Modaltag />
                <br></br>
                <div className="info">
                  <img src={World} alt="world" />
                  <p>{repo.language}</p>
                  <img src={Time} alt="time" />
                  <p>{repo.updated_at}</p>
                  <img src={Star} alt="star" />
                  <p>{repo.stargazers_count}</p>
                  <img src={Person} alt="person" />
                  <p>{repo.watchers_count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
