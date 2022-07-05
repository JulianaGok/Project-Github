import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../services/api";
import { Header } from '../../components/header';
import World from '../../../src/assets/world.svg';
import Time from '../../../src/assets/time.svg';
import Star from '../../../src/assets/star.svg';
import Person from '../../../src/assets/person.svg';
import Flag from '../../../src/assets/flag.svg';
import Iconlink from '../../../src/assets/iconlink.svg';
import Iconjob from '../../../src/assets/person.svg';
import Iconlocal from '../../../src/assets/iconlocal.svg';
import { Search } from "../../../src/assets/search.svg";
import { Modaltag } from "../../components/modaltag"

import {
    Container,
    Avatar,
    Searchinput,
} from './styled';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export { useQuery };

export default function UseRepositories({ props }) {
    const query = useQuery();
    const [user, setUser] = useState({});
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        Api.getByUsername(query.get("text")).then(res => setUser(res.data));
        // Api.getByUsername(query.get("text")).then(res => console.log(res, "oii"));
        Api.getReposByUsername(query.get("text")).then(res =>
            setRepositories(res.data));
    }, []);

    return (
        <>
            <Header />

            <Container>
                {/* Contem as informacoes  do usuario de login */}
                <div className="user-left">

                    <>
                        <div className="user-info">
                            <Avatar className="avatar"
                                src={user.avatar_url}
                                alt="avatar"
                            ></Avatar>
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
                            <p><img src={Iconjob} alt="iconjob" />{user.company}</p>
                            <br></br>
                            <p><img src={Iconlocal} alt="iconlocal" />{user.location}</p>
                            <br></br>
                            <p><img src={Iconlink} alt="iconlink" />{user.blog}</p>
                        </div>

                        <div className="important">
                            <h1>Destaques</h1>
                            <br></br>
                            <img src={Flag} alt="iconejob" />
                        </div>
                    </>
                </div>

                {/* Parte dos repositorios do usuario e os inputs de pesquisa */}
                <div className="user-right">

                    <Searchinput
                        placeholder="Buscar um repositório..."
                        type={"text"} />
                    {
                        repositories.map((repo, index) =>
                            <div key={index}>
                                <div className="repo-info">
                                    <h1>{repo.name}</h1>
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
                        )
                    }
                </div>
            </Container>
        </>
    )
};