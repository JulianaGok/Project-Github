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
    Avatar,
    Arrowstyle,
    Newinput,
    Newbutton,
    Trashstyle,
} from './styled';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export { useQuery };

export default function UserList({ props }) {
    const query = useQuery();
    const [searchText, setSearchText] = useState('');
    const [user, setUser] = useState({});
    const [setRepositories] = useState([]);

    useEffect(() => {
        Api.getByUsername(query.get("text")).then(res => setUser(res.data));
        Api.getReposByUsername(query.get("text")).then(res =>
            setRepositories(res.data));
    }, [query]);

    const getUser = () => {
        Api.getByUsername(searchText).then(res => setUser([res.data]));
    }

    return (
        <>
            <Header />
            <Newinput value={searchText} onChange={e => setSearchText(e.target.value)}
                type={"text"} placeholder="@username" />
            <Newbutton onClick={() => getUser()}> Adicionar Novo</Newbutton>
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
                        <h3>@{user.login}</h3>
                        <div className="info">
                            <img src={Iconjob} alt="iconejob" />
                            <p>{user.company}</p>
                            <img src={Iconlocal} alt="iconlocal" />
                            <p>{user.location}</p>
                            <img src={Star} alt="star" />
                            <p>{user.public_repos}</p>
                        </div>
                    </div>
                    <Arrowstyle src={Arrow} alt="arrow" />
                    <Trashstyle src={Trash} alt="trash" />
                </Container>
            </>
        </>
    );
};