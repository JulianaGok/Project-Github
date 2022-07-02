import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../services/api";
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import Arrow from '../../../src/assets/arrow.svg';

import {
    Container,
    Name,
    Namelogin,
    At,
    Local,
    Public,
    Avatar,
    Arrowstyle,
    Newinput,
    Newbutton,
} from './styled';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export { useQuery };

export default function UserList({ props }) {
    const query = useQuery();
    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([]);
    //const [setRepositories] = useState([]);

    useEffect(() => {
        Api.getByUsername(query.get("text")).then(res => setUsers([...users, res.data]));

        // Api.getReposByUsername(query.get("text")).then(res =>
        //     setRepositories(res.data));

    }, //[query.get("text")]

    );

    const getUser = () => {
        Api.getByUsername(searchText).then(res => setUsers([...users, res.data]));
    }

    return (
        <>
            <Header />
            <Newinput value={searchText} onChange={e => setSearchText(e.target.value)}
                type={"text"} placeholder="@username" />
            <Newbutton onClick={() => getUser()}> Adicionar Novo</Newbutton>
            {
                users.map(user =>
                    <>
                        <Container>
                            <Avatar className="avatar"
                                src={user.avatar_url}
                                alt="avatar">
                            </Avatar>

                            <Arrowstyle src={Arrow} alt="arrow" />
                            <Name type="button">
                                <Link to={`/user-repositories?text=${user.login}`}
                                >{user.name}</Link>
                            </Name>
                            <Namelogin>{user.login}</Namelogin>
                            <At>{user.company}</At>
                            <Local>{user.location}</Local>
                            <Public>{user.public_repos}</Public>

                        </Container>
                    </>
                )
            }
        </>
    );
};