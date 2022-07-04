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

import {
    Container,
    Name,
    Namedescription,
    Worldstyle,
    Namelanguage,
    Timestyle,
    Updated,
    Starstyle,
    Numbstargazers,
    Personstyle,
    Numbwatchers,
    Avatar,
    Flagstyle,
    Jobstyle,
    Localstyle,
    Linkstyle,
} from './styled';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export { useQuery };

export default function UseRepositories({ props }) {
    const query = useQuery();
    const [users, setUsers] = useState([]);
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        Api.getByUsername(query.get("text")).then(res => setUsers([...users, res.data]));

        Api.getReposByUsername(query.get("text")).then(res =>
            setRepositories(res.data));
    }, [query, users]);

    return (
        <>
            <Header />
            <Container>
                <div className="user-left">
                    {
                        users.map(user =>
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
                                    <p><Jobstyle src={Iconjob} alt="iconjob" />{user.company}</p>
                                    <br></br>
                                    <p><Localstyle src={Iconlocal} alt="iconlocal" />{user.location}</p>
                                    <br></br>
                                    <p><Linkstyle src={Iconlink} alt="iconlink" />{user.blog}</p>
                                </div>

                                <div className="important">
                                    <h1>Destaques</h1>
                                    <br></br>
                                    <Flagstyle src={Flag} alt="iconejob" />
                                </div>
                            </>
                        )
                    }
                </div>



                <div className="user-right">
                    {
                        repositories.map(repo =>
                            <>
                                <div className="repo-info">
                                    <Name>{repo.name}</Name>
                                    <Namedescription>{repo.description}</Namedescription>
                                    <br></br>

                                    <div className="info">
                                        <Worldstyle src={World} alt="world" />
                                        <Namelanguage>{repo.language}</Namelanguage>
                                        <Timestyle src={Time} alt="time" />
                                        <Updated>{repo.updated_at}</Updated>
                                        <Starstyle src={Star} alt="star" />
                                        <Numbstargazers>{repo.stargazers_count}</Numbstargazers>
                                        <Personstyle src={Person} alt="person" />
                                        <Numbwatchers>{repo.watchers_count}</Numbwatchers>
                                    </div>
                                </div>
                            </>
                        )
                    }

                </div>
            </Container>
        </>
    )
};