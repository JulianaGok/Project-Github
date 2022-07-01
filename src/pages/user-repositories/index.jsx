import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../services/api";
import { Header } from '../../components/header';

import {
    Container,
    Name,
    Namedescription,
    Namelanguage,
    Numbwatchers,
    Numbstargazers,
    Updated,

    ContainerUser,
    Avatar,

    ContainerAbout,
    ContainerEmphasis,
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

    });

    return (
        <>
            <Header />

            {
                repositories.map(repo =>
                    <>
                        <Container>
                            <Name>{repo.name}</Name>
                            <Namedescription>{repo.description}</Namedescription>
                            <Namelanguage>{repo.language}</Namelanguage>
                            <Numbwatchers>{repo.watchers_count}</Numbwatchers>
                            <Numbstargazers>{repo.stargazers_count}</Numbstargazers>
                            <Updated>{repo.updated_at}</Updated>
                        </Container>
                    </>
                )
            }

            {
                users.map(user =>
                    <>
                        <ContainerUser>
                            <Avatar className="avatar"
                                src={user.avatar_url}
                                alt="avatar"
                            ></Avatar>
                            <Name>{user.name}</Name>
                            {user.login}
                            <p>Seguidores: {user.followers}</p>
                            <p>Seguindo: {user.following}</p>
                            <p>Favoritos: {user.starred}</p>
                        </ContainerUser>

                        <ContainerAbout>
                            <h1>Sobre</h1>
                            <p>{user.bio}</p>
                            <p>{user.company}</p>
                            <p>{user.location}</p>
                        </ContainerAbout>

                        <ContainerEmphasis>
                            <h1>Destaques</h1>
                        </ContainerEmphasis>
                    </>
                )
            }
        </>
    )
};