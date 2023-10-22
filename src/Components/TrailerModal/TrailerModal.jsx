import Modal from 'antd/es/modal/Modal'
import React, { useEffect } from 'react'

const TrailerModal = ({ isModalOpen, onCancel, contentModal, }) => {
    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <Modal title="Trailer" open={isModalOpen} onCancel={onCancel} footer={null}
            width={1000} afterClose={() => {
                let iframe = document.querySelector('iframe');
                if (iframe) {
                    let src = iframe.src;
                    iframe.src = src;
                }
            }}>
            {contentModal}
        </Modal>
    )
}

export default TrailerModal