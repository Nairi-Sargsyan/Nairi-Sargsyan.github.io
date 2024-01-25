import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentsItem from '../comments-item/CommentsItem';
import LoadingInfo from '../../loadingInfo/LoadingInfo';

import './BlogInfo.scss';

const BlogInfo = () => {

    const [itemComments, setItemComments] = useState([]);

    const fetchingComments = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            const limitedComments = response.data.slice(0, 5);
            setItemComments(limitedComments);
        } catch {
            console.error('error')
        }
    }

    useEffect(() => {
        fetchingComments();
    }, [])


    return (
        < section className='blog-info' >
            <div className="container-fluid">
                <div className="blog-info__body">
                    <div className="container">
                        <div className="blog-info__title text-center pt-5">
                            <h5 className="content__aside_title">blog</h5>
                            <div className="inner__title_text text-center">
                                <h3 className="inner__title">Be First Who Read News</h3>
                                <p className="inner__text">Explore the latest stories about our dishes, offers,</p>
                                <p className="inner__text mb-0">events and future plans here.</p>
                            </div>
                        </div>
                        <div className="blog-info__content">
                            <div className="content_main my-5">
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis, labore, architecto enim nobis a eius, tenetur cumque facere reprehenderit magnam similique cum. Deleniti blanditiis hic ea animi enim aliquid quos cum necessitatibus laboriosam. Officia earum nemo a quam reiciendis magnam mollitia recusandae aut suscipit perferendis et ex nulla ea, repellat voluptates in accusamus nostrum sapiente voluptate minima accusantium consequatur. Quo voluptas ipsam, hic quasi praesentium incidunt exercitationem accusamus ipsa ea omnis, et nobis quis dolorem nisi sequi error veritatis tempore possimus iure adipisci corrupti minima. Provident cumque impedit sequi, nesciunt cupiditate optio iusto quibusdam ullam excepturi dolorem cum tenetur odit minus porro ad quidem earum molestiae nostrum consequuntur? Illo ex, facere fuga asperiores unde optio, quaerat quam accusantium odit magnam blanditiis quis. Rerum quod, velit laudantium inventore eaque ullam repellendus cumque! Temporibus veritatis tenetur dolorem! Harum saepe quasi consequatur praesentium nesciunt fuga hic tempore, placeat earum magnam tempora natus?</h3>
                            </div>
                            <hr />
                            <div className="content_comments">
                                <p className="inner__text">Comments</p>

                                {
                                    itemComments.length === 0
                                        ? <LoadingInfo />
                                        : itemComments.map(comment => <CommentsItem comment={comment} key={comment.id} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BlogInfo;