// import { Children } from 'react';
import './FormButtons.scss';

const FormButtons = ({ buttonItem, sortMenulist }) => {
    return (
        <div className="col-md-2 col-sm-3 col-6 me-sm-3 mb-lg-0 mb-3 text-center">
            <div className="sorting__parameter">
                <button
                    type='button'
                    key={buttonItem.product}
                    onClick={() => sortMenulist(buttonItem.product)}
                    className='sorting__btn'
                >{buttonItem.lable}</button>
            </div>
        </div>
    )
}
export default FormButtons;