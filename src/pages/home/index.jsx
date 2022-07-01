import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import men from '../../assets/men.svg';
import github from '../../assets/github.svg';

import {
    Phrase,
    Figure,
    Logo,
    Title,
    Text,
    Input,
    Button,
} from './styled';

export default function Home() {
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <Logo src={github} alt="github" />
            <Title>Buscar usuário</Title>
            <Text>Crie sua conta através do seu usuário do GitHub</Text>
            <Input value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="@username"
                type={"text"} />
            <Button type="button">
                <Link to={`/user-list?text=${searchText}`}
                >Cadastrar</Link>
            </Button>
            <Figure src={men} alt="men" />
            <Phrase>Gerencie e adicione tags ao seus repositórios favoritos.</Phrase>
        </>
    )
}