import { useState } from 'react';
import FormButtons from '../../form-client-say/form-buttons/FormButtons';
import './MenuListForm.scss';

const MenuListForm = ({ sortMenulist, buttons, searchQuyery }) => {

    const [searchValue, setSearchValue] = useState({ text: '' });

    const handleInputChange = (e) => {
        e.preventDefault();
        const searchText = e.target.value;
        setSearchValue({ text: searchText });
        searchQuyery(searchText);
    }

    return (
        <div className="menu__list_filter">
            <div className="container-fluid">
                <div className="filter__content">
                    <div className="container">
                        <form className='menu__list_form'>
                            <p className='inner__text'>You can sort the dishes for your convenience!</p>
                            <div className="input__sort_group">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 mb-lg-0 mb-3">
                                        <input
                                            className='input__search w-100'
                                            type="text"
                                            value={searchValue.text}
                                            onChange={handleInputChange}
                                            placeholder='Search'
                                        />
                                    </div>
                                    <div className="col-lg-8 mb-lg-0">
                                        <div className="row justify-content-center">
                                            {buttons.map(buttonItem =>
                                                <FormButtons sortMenulist={sortMenulist} buttonItem={buttonItem} key={buttonItem.product} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenuListForm;
