import { useState, useMemo, useContext } from "react";
import MenuListForm from "./menu-list-form/MenuListForm";
import MenuListItem from "./menu-list-Item/MenuListItem";
import { MenuContext } from "../Context/MenuContext";
import './MenuList.scss';

const MenuList = () => {

    const { setCartCounter } = useContext(MenuContext);
    const { menuList, setMenuList, setSelectedDish } = useContext(MenuContext);
    const [sortMenuListItem] = useState([...menuList]);
    const [searchDishValue, setSearchDishValue] = useState('');

    const buttons = [
        { product: 'all', lable: 'All Menu' },
        { product: 'salad', lable: 'Salad' },
        { product: 'hotDish', lable: 'Hot Dish' },
        { product: 'snack', lable: 'Snack' },
        { product: 'drink', lable: 'Drink' }
    ];


    const sortMenulist = (sort) => {
        switch (sort) {
            case 'all':
                return setMenuList([...sortMenuListItem]);
            case 'salad':
            case 'hotDish':
            case 'snack':
            case 'drink':
                return setMenuList(sortMenuListItem.filter(item => item.product === sort));
            default:
                return setMenuList([...sortMenuListItem]);
        }
    }

    const filteredMenu = useMemo(() => {
        return menuList.filter(dish => dish.dishesName.toLowerCase().includes(searchDishValue.toLowerCase()));
    }, [searchDishValue, menuList]);

    const searchQuyery = (text) => {
        setSearchDishValue(text);
    }

    const hendleSelectedMenuItem = (dishItem, count) => {
        setSelectedDish((prevSelectedDish) => [...prevSelectedDish, dishItem]);
        setCartCounter(prevCount => prevCount + count);

    }

    return (
        <section className="menu__list">
            <div className="menu__list_title">
                <div className="container-fluid">
                    <div className="container">
                        <div className="title__block_content">
                            <div className="inner__title_text py-5 text-center">
                                <h5 className="content__aside_title">Menu Dishes</h5>
                                <h3 className="inner__title">The menu of our dishes</h3>
                                <p className="inner__text">Our dishes aspire to a Michelin star</p>
                                <p className="inner__text">We have dishes for vegetarians</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__list_body">
                <MenuListForm searchQuyery={searchQuyery} sortMenulist={sortMenulist} buttons={buttons} />
                <div className="menu__list_items py-5">
                    <div className="container">
                        <div className="row">
                            {
                                filteredMenu.map(itemList =>
                                    <MenuListItem
                                        itemList={itemList}
                                        key={itemList.id}
                                        hendleSelectedMenuItem={hendleSelectedMenuItem}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuList;