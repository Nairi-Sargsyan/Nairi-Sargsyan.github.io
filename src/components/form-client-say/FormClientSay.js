import { useRef, useState } from 'react';
import './FormClientSay.scss';

const FormClientSay = ({ addClientComment }) => {
    const [cleintsItemData, setCleintsItemData] = useState({
        srcImage: './icons/new__comment_image.png',
        clientName: '',
        clientAddress: '',
        clientResporse: ''
    });

    const [commentLength, setCommentLength] = useState(0);

    const clientNameRef = useRef(),
        clientAddress = useRef(),
        clientResporse = useRef();

    function countLengthTextarea(value) {
        setCommentLength(value.length)
    }

    const addComment = (e) => {
        e.preventDefault();
        if (cleintsItemData.clientName.trim() === '' || cleintsItemData.clientAddress.trim() === '' || cleintsItemData.clientResporse.trim() === '') {
            clientNameRef.current.style.border = '1px solid red';
            clientAddress.current.style.border = '1px solid red';
            clientResporse.current.style.border = '1px solid red';
            return;
        }

        const newComment = {
            ...cleintsItemData,
            id: Date.now()
        }

        addClientComment(newComment);
        setCleintsItemData({
            clientName: '',
            clientAddress: '',
            clientResporse: ''
        });
        setCommentLength(0);
        clientNameRef.current.style.border = '';
        clientAddress.current.style.border = '';
        clientResporse.current.style.border = '';
    }

    return (
        <form className='form_client-say'>
            <div className="row">
                <div className="col-lg-8 mb-lg-0 mb-3">
                    <div className="coment_texterea">
                        <textarea
                            onChange={e => {
                                setCleintsItemData({ ...cleintsItemData, clientResporse: e.target.value });
                                countLengthTextarea(e.target.value);
                            }}
                            ref={clientNameRef}
                            value={cleintsItemData.clientResporse}
                            className='client_comment w-100'
                            name="client_comment"
                            maxLength='200'
                            cols='1'
                            rows='1'
                            placeholder='Text...'></textarea>
                        <button
                            className='send_btn'
                            onClick={addComment}
                        >Send</button>
                        <p className="text-length">{commentLength} / 200</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="input__name_group d-flex flex-column justify-content-between h-100">
                        <input
                            onChange={e => setCleintsItemData({ ...cleintsItemData, clientName: e.target.value })}
                            ref={clientAddress}
                            value={cleintsItemData.clientName}
                            className='input_user h-100 mb-2'
                            type="text"
                            name='userName'
                            placeholder='Name' />

                        <input
                            onChange={e => setCleintsItemData({ ...cleintsItemData, clientAddress: e.target.value })}
                            ref={clientResporse}
                            value={cleintsItemData.clientAddress}
                            className='input_user h-100'
                            type="text"
                            name='userAddress'
                            placeholder='Address' />
                    </div>
                </div>
            </div>
        </form >
    )
}

export default FormClientSay;