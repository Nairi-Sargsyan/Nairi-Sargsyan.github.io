import './CommentsItem.scss';

const CommentsItem = ({ comment }) => {

    return (
        <div className='commet__item mb-3 p-2'>
            <div className="row align-items-center p-2">
                <div className="col-lg-6">
                    <div className="item__title d-flex justify-content-start align-items-center">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-img me-3">
                                    <img className="client-image" src='../../icons/new__comment_image.png' alt={comment.name} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="commet__item_title">
                                    <h3 className='item__name'>{comment.name}</h3>
                                    <p className="item__email">{comment.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 border-start border-secondary border-2">
                    <div className="commet__item_text">
                        <h3 className='item__name'>{comment.body}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsItem;