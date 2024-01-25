import { useState } from 'react';
import HeaderCover from '../components/header-cover/header-cover';
import AboutUs from '../components/about-us/about-us';
import Menu from '../components/menu/menu';
import ClientSay from '../components/clients-say/clients-say';
import Offers from '../components/offers/offers';
import Popular from '../components/popular/popular';
import Service from '../components/our-service/our-service';
import Blog from '../components/blog/blog';
import Reservation from '../components/reservation/reservation';
import Footer from '../components/footer/footer';

const Home = () => {

    const [cleintsItemData, setCleintsItemData] = useState([
        {
            srcImage: './image/client_02.png',
            clientName: 'Natasha D',
            clientAddress: 'New York',
            clientResporse: 'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.',
            id: 1
        },
        {
            srcImage: './image/client_01.png',
            clientName: 'Jack Sparrow',
            clientAddress: 'Salt Lake City',
            clientResporse: 'I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.',
            id: 2
        },
        {
            srcImage: './image/client_04.png',
            clientName: 'Martin',
            clientAddress: 'San Diego',
            clientResporse: 'Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy.',
            id: 3
        },
        {
            srcImage: './image/client_02.png',
            clientName: 'Natasha D',
            clientAddress: 'New York',
            clientResporse: 'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.',
            id: 4
        },
        {
            srcImage: './image/client_01.png',
            clientName: 'Jack Sparrow',
            clientAddress: 'Salt Lake City',
            clientResporse: 'I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.',
            id: 5
        },
        {
            srcImage: './image/client_04.png',
            clientName: 'Martin',
            clientAddress: 'San Diego',
            clientResporse: 'Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy.',
            id: 6
        },
        {
            srcImage: './image/client_02.png',
            clientName: 'Natasha D',
            clientAddress: 'New York',
            clientResporse: 'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.',
            id: 7
        },
        {
            srcImage: './image/client_01.png',
            clientName: 'Jack Sparrow',
            clientAddress: 'Salt Lake City',
            clientResporse: 'I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.',
            id: 8
        },
        {
            srcImage: './image/client_04.png',
            clientName: 'Martin',
            clientAddress: 'San Diego',
            clientResporse: 'Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy.',
            id: 9
        }
    ]);

    // Може окремо створювати свої хуки для того щоб не дублювати код
    // Для цього потрібно створити окрему функцію за межами компоненту 
    // та внести в середину весь функціонал який потрібен, без різниці чи це будуть хуки чи колбеки.
    // Важливо правильно передати цей хук в компонент.
    // Для цього потрібно виклик функції передати в окремі змінні типу якщо у нас є 2 інпута 
    // то для двох інпутів окремі зміні передати виклик функції. 
    // Після цього при ренедері компонента потрібно вказувати змінну і через крапку функцію в середині власного хука.

    const addClientComment = (newComment) => {
        setCleintsItemData([newComment, ...cleintsItemData]);
    }

    return (
        <div className="home" >
            <HeaderCover />
            <AboutUs />
            <Menu />
            <ClientSay cleintsItemData={cleintsItemData} addClientComment={addClientComment} />
            <Offers />
            <Popular />
            <Service />
            <Blog />
            <Reservation />
        </div>
    )


}

export default Home;