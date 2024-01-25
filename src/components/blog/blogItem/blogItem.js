import { Link } from "react-router-dom";

const BlogItem = ({ card }) => {


    return (
        <div className="col-lg-6">
            <div className="content__article">
                <div className="artiсle__image">
                    <img className="img__cover h-100" src={card.imgSrc} alt={card.subtitle} />
                    <Link
                        to={`/Blog`}
                        className="navbar__reservation">View More</Link>
                </div>
                <div className="article__body p-5 border border-1 border-secondary">
                    <div className="article__subtitle mb-3 d-flex justify-content-start align-items-center">
                        <h5 className="content__aside_title me-5">{card.subtitle}</h5>
                        <h5 className="content__aside_title">{card.date}</h5>
                    </div>
                    <div className="article__title mb-3">
                        <h5 className="dishe__name">{card.title}</h5>
                    </div>
                    <div className="article__text">
                        <p className="dishe__text">{card.cardText}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogItem;