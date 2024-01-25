import { Link } from 'react-router-dom';
import './header-cover.scss';

const HeaderCover = () => {
    return (
        <section className="header__cover container-fluid">
            <div className="container">
                <div className="header__cover_content">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <div className="content__body">
                                <h2 className="content__title">Welcome to</h2>
                                <h2 className="content__title">Restaurant</h2>
                                <p className="content__subtitle">The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</p>
                                <div className="content__btn">
                                    <Link to={'/OurMenu'} className="btn__view-menu">View Menu</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeaderCover;