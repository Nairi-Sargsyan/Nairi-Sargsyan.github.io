import BlogItem from './blogItem/blogItem';

import './blog.scss';

const Blog = () => {

    const blogCard = [
        {
            title: 'The Legend of US Cuisine: The Story of Hungry People',
            subtitle: 'Delicious',
            date: 'March 19, 2022',
            imgSrc: './image/blog__img__01.png',
            cardText: 'Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.'
        },
        {
            title: 'The Most Popular Delicious Food of Mediterranean Cuisine',
            subtitle: 'Cooking',
            date: 'March 19, 2022',
            imgSrc: './image/blog__img__02.png',
            cardText: 'Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.'
        }
    ];

    return (
        <section className="blog">
            <div className="container">
                <div className="blog__title-text">
                    <h5 className="content__aside_title">blog</h5>
                    <div className="inner__title_text mb-5 text-center">
                        <h3 className="inner__title">Be First Who Read News</h3>
                        <p className="inner__text">Explore the latest stories about our dishes, offers,</p>
                        <p className="inner__text">events and future plans here.</p>
                    </div>
                </div>
                <div className="blog__content">
                    <div className="row">
                        {blogCard.map(card =>
                            <BlogItem card={card} key={card.subtitle} />
                        )}
                    </div>
                </div>
            </div >
        </section >

    )
}

export default Blog;