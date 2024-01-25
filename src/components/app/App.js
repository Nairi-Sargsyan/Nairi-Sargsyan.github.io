import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import OurMenu from '../../pages/OurMenu';
import About from '../../pages/About';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';
import BlogCardInfo from '../../pages/BlogCardInfo';
import Page404 from '../../pages/404';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import GoingSoon from '../../pages/GoingSoon';
import ShoppingBasket from '../shopping-basket/ShoppingBasket';
import { MenuContext } from '../Context/MenuContext';
import './App.scss';

const App = () => {

    const [menuList, setMenuList] = useState([
        {
            dishesImage: './image/menu__dishes_01.jpg',
            dishesName: 'SMOKED CHICHEN SALAD WITH LETTUCE LEAVES',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 15,
            id: 1
        },
        {
            dishesImage: './image/menu__dishes_02.jpg',
            dishesName: 'CAESAR SALAD',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 20.99,
            product: 'salad',
            id: 2
        },
        {
            dishesImage: './image/menu__dishes_03.jpg',
            dishesName: 'SALAD WITH WHITE MUSHROOMS AND COUSCOUS',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 24,
            product: 'salad',
            id: 3
        },
        {
            dishesImage: './image/menu__dishes_04.jpg',
            dishesName: 'SALAD WITH VEAL AND HAZELNUTS',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 34.49,
            product: 'salad',
            id: 4
        },
        {
            dishesImage: './image/menu__dishes_05.jpg',
            dishesName: 'SALAD WITH CHICKEN LIVER AND PEACHES',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 28,
            product: 'salad',
            id: 5
        },
        {
            dishesImage: './image/menu__dishes_06.jpg',
            dishesName: 'NIÇOISE WITH FRESH TUNA',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 19.67,
            id: 6
        },
        {
            dishesImage: './image/menu__dishes_07.jpg',
            dishesName: 'GEORGIAN SALAD',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 22.55,
            product: 'salad',
            id: 7
        },
        {
            dishesImage: './image/menu__dishes_08.jpg',
            dishesName: 'DUMPLINGS WITH MEAT/CABBAGE/POTATOES AND MUSHROOMS',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 32.57,
            product: 'hotDish',
            id: 8
        },
        {
            dishesImage: './image/menu__dishes_09.jpg',
            dishesName: 'PANCAKES WITH SOUR CREAM/ WITH BACON AND SOUR CREAM',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 39.99,
            id: 9
        },
        {
            dishesImage: './image/menu__dishes_10.jpg',
            dishesName: 'BEEF AND BACON BURGER',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 15.87,
            id: 10
        },
        {
            dishesImage: './image/menu__dishes_11.jpg',
            dishesName: 'MUSSELS IN CREAMY CHEESE SAUCE',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 45,
            id: 11
        },
        {
            dishesImage: './image/menu__dishes_12.jpg',
            dishesName: 'POTATOES WITH MUSHROOMS/POTATOES WITH MEAT/MUSHROOMS BAKED ON KETSA',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 29.99,
            product: 'hotDish',
            id: 12
        },
        {
            dishesImage: './image/menu__dishes_13.jpg',
            dishesName: 'MUSHROOMS STUFFED WITH CHEESE',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 12.35,
            product: 'snack',
            id: 13
        },
        {
            dishesImage: './image/menu__dishes_14.jpg',
            dishesName: 'UKRAINIAN BORSCH',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 37.5,
            product: 'hotDish',
            id: 14
        },
        {
            dishesImage: './image/menu__dishes_15.jpg',
            dishesName: 'KHARCHO',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 40.8,
            product: 'hotDish',
            id: 15
        },
        {
            dishesImage: './image/menu__dishes_16.jpg',
            dishesName: 'VEGETABLE GRILL',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 11,
            product: 'snack',
            id: 16
        },
        {
            dishesImage: './image/menu__dishes_17.jpg',
            dishesName: 'SHASHLIK WITH PORK',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 35,
            product: 'snack',
            id: 17
        },
        {
            dishesImage: './image/menu__dishes_18.jpg',
            dishesName: 'MACKEREL',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 24.99,
            product: 'snack',
            id: 18
        },
        {
            dishesImage: './image/menu__dishes_19.jpg',
            dishesName: 'WHITE AMUR FILLET',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 42.8,
            product: 'snack',
            id: 19
        },
        {
            dishesImage: './image/menu__dishes_20.jpg',
            dishesName: 'ADJARULI KHACHAPURI',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 15.99,
            product: 'snack',
            id: 20
        },
        {
            dishesImage: './image/drink__01.jpg',
            dishesName: 'MOJITO',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 13.99,
            product: 'drink',
            id: 21
        },
        {
            dishesImage: './image/drink__02.jpg',
            dishesName: 'LONG ISLAND ICED TEA',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 21.5,
            product: 'drink',
            id: 22
        },
        {
            dishesImage: './image/drink__03.jpg',
            dishesName: 'Piña Colada',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 34,
            product: 'drink',
            id: 23
        },
        {
            dishesImage: './image/drink__04.jpg',
            dishesName: 'Tequila Sunrise',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 25,
            product: 'drink',
            id: 24
        },
        {
            dishesImage: './image/drink__05.jpg',
            dishesName: 'Sex on the Beach',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 21,
            product: 'drink',
            id: 25
        },
        {
            dishesImage: './image/drink__06.jpg',
            dishesName: 'Cosmopolitan',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 27,
            product: 'drink',
            id: 26
        },
        {
            dishesImage: './image/drink__07.jpg',
            dishesName: 'Bloody Mary',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 34.87,
            product: 'drink',
            id: 27
        },
        {
            dishesImage: './image/drink__08.jpg',
            dishesName: 'Cuba Libre',
            dishesSubTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            dishesDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus officia quibusdam itaque vitae aspernatur ratione? Debitis quas hic voluptas facilis deleniti esse totam, quidem voluptatum, a adipisci illo tempora.',
            dishesPrice: 16.45,
            product: 'drink',
            id: 28
        }
    ]);
    const [selectedDish, setSelectedDish] = useState([]);
    const [cartCounter, setCartCounter] = useState(0)


    return (
        <div className="app" >
            <MenuContext.Provider value={{
                menuList,
                setMenuList,
                selectedDish,
                setSelectedDish,
                cartCounter,
                setCartCounter
            }}>
                <BrowserRouter>
                    <ScrollToTop />
                    <header>
                        <NavBar />
                    </header>
                    <main>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/OurMenu' element={<OurMenu />} />
                            <Route path='/AboutUs' element={<About />} />
                            <Route path='/Blog' element={<BlogCardInfo />} />
                            <Route path='*' element={<Page404 />} />
                            <Route path='/ShoppingCart' element={<ShoppingBasket selectedDish={selectedDish} setSelectedDish={setSelectedDish} />} />
                            <Route path='/ContactUs' element={<GoingSoon />} />
                        </Routes>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </BrowserRouter>
            </MenuContext.Provider>
        </div >
    )
}

export default App;