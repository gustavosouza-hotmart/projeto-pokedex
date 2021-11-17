import React, { useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import "@cosmos/modal";
import "@cosmos/modal/modal-header";
import "@cosmos/modal/modal-body";
import "@cosmos/modal/modal-footer";

import "./modal.style.scss";
import { Treinador } from "../../modules/Treinador/models/treinador";

interface ModalProps {
    show: boolean;
    onSubmitModal(): any;
    onClose(): void;
}

function Modal(props: ModalProps) {
    const [show, setShow] = useState(props.show);
    const modalRef = useRef<any>();

    useEffect(effectMount, []);
    useEffect(effectChangeShow, [props.show]);

    function effectMount() {
        modalRef.current && modalRef.current.addEventListener("close", onClose);
        return () => {
            if (modalRef.current) {
                modalRef.current.removeEventListener("close", onClose);
            }
        };
    }

    function effectChangeShow() {
        if (!props.show) {
            modalRef.current && modalRef.current.closeModal();
        } else setShow(props.show);
    }

    function onClose() {
        setShow(false);
        props.onClose();
    }

    function onConfirm() {
        setShow(false);
        props.onSubmitModal();
    }

    return createPortal(
        <hot-modal
            ref={modalRef}
            onClick={(e: any) => e.stopPropagation()}
            {...(show && { open: true })}
            position="centered"
        >
            <hot-modal-header>
                <h4>Tem certeza que deseja excluir este treinador?</h4>
            </hot-modal-header>
            <hot-modal-body>
                <div className="modal-buttons">
                    <button
                        className="hot-button hot-button--tertiary _mr-4"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button
                        className="hot-button hot-button--primary _mr-4"
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                </div>
            </hot-modal-body>
        </hot-modal>,
        document.body
    );
}

export default Modal;
