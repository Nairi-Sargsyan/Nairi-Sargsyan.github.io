import './clients-item.scss';

const ClientItem = ({ srcImage, clientName, clientAddress, clientResporse }) => {
    return (
        <div className="card__inner">
            <div className="item p-4">
                <div className="card-header mb-3 border-2 border-bottom d-flex justify-content-start align-items-center">
                    <div className="card-img">
                        <img className="client-image" src={srcImage} alt={clientName} />
                    </div>
                    <div className="card-title ms-3">
                        <h4 className="card-name">{clientName}</h4>
                        <p className="card-address">{clientAddress}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{clientResporse}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientItem;