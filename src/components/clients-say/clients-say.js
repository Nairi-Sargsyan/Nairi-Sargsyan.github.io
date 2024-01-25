import FormClientSay from '../form-client-say/FormClientSay';
import CarouselClientsSay from '../carouselClientsSay/carouselClientsSay';
import ClientItem from '../clients-item/clients-item';

import './clients-say.scss';

const ClientSay = ({ cleintsItemData, addClientComment }) => {
    return (
        <section className="client-say">
            <div className="container-fluid">
                <div className="client-say__inner">
                    <div className="container">
                        <h5 className="section_title">Testimonial</h5>
                        <div className="inner__title_text mb-5">
                            <h3 className="inner__title text-white">Our clients say</h3>
                            <p className="inner__text text-white">We love to hear from customers, so please leave a comment or say hello in an email.</p>
                        </div>
                        <FormClientSay addClientComment={addClientComment} />
                        <CarouselClientsSay>
                            {cleintsItemData.map((itemData, index) =>
                                <ClientItem key={itemData.id} {...itemData} number={index + 1} />
                            )}
                        </CarouselClientsSay>
                        <div className="pagination mb-5 d-flex justify-content-center align-items-center">
                            <span className="pagination__item active"></span>
                            <span className="pagination__item ms-2"></span>
                            <span className="pagination__item ms-2"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="client__cover"></div>
            </div>
        </section>
    )
}

export default ClientSay;