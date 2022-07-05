import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';

import {
    Inputtagmodal,
    Title,
    Buttonsaved,
    Buttoncancel,
    Box,
    Taginput,
    Buttontag,
} from './styled';

Modal.setAppElement('#root');

export function Modaltag() {

    const [isNewTagModalOpen, setIsNewTagModalOpen]
        = useState(false);

    function hardleOpenNewTagModal() {
        setIsNewTagModalOpen(true);
    }

    function hardleCloseNewTagModal() {
        setIsNewTagModalOpen(false);
    }

    return (
        <>
            <Buttontag
                onClick={hardleOpenNewTagModal} >Adicionar tags
            </Buttontag>

            <Modal
                isOpen={isNewTagModalOpen}
                onRequestClose={hardleCloseNewTagModal}
            >
                <Box className='boxstyle'>
                    <Title>Adicionar tags</Title>

                    <Inputtagmodal
                        type="tags"
                        className='iconfilter'
                        placeholder="Adicionar tags..." />

                    <Taginput> Sugestões

                    </Taginput>
                    <Buttonsaved>Salvar</Buttonsaved>

                    <Buttoncancel
                        onClick={hardleCloseNewTagModal}> Cancelar
                    </Buttoncancel>

                </Box>
            </Modal>
        </>
    );
};
export default Modal;


