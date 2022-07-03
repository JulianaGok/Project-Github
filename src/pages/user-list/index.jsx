import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../services/api";
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import Arrow from '../../../src/assets/arrow.svg';
import Iconjob from '../../../src/assets/iconjob.svg';
import Iconlocal from '../../../src/assets/iconlocal.svg';
import Star from '../../../src/assets/star.svg';
import Trash from '../../../src/assets/trash.svg';

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
    Jobstyle,
    Localtyle,
    Starstyle,
    Trashstyle,
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

                            <div className="name-login">
                                <Name type="button">
                                    <Link to={`/user-repositories?text=${user.login}`}
                                    >{user.name}</Link>
                                </Name>
                                <br></br>
                                <Namelogin>{user.login}</Namelogin>

                                <div className="info">
                                    <Jobstyle src={Iconjob} alt="iconejob" />
                                    <At>{user.company}</At>
                                    <Localtyle src={Iconlocal} alt="iconlocal" />
                                    <Local>{user.location}</Local>
                                    <Starstyle src={Star} alt="star" />
                                    <Public>{user.public_repos}</Public>
                                </div>
                            </div>
                            <Arrowstyle src={Arrow} alt="arrow" />
                            <Trashstyle src={Trash} alt="trash" />
                        </Container>
                    </>
                )
            }
        </>
    );
};