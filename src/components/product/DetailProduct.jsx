const DetailProduct = () => {
    return (
        <section className="container mx-auto px-4">
            <p className="text-orange-primary font-bold mb-3 uppercase">Sneaker Company</p>

            <h2 className="font-bold text-3xl mb-3">Fall Limited Edition Sneakers</h2>

            <p className="mb-5 text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <div className="">
                <p>
                    <span className="px-5 font-bold text-4xl">$125.00</span>
                    <span className="px-5">50%</span>
                </p>
                <p>$250.00</p>
            </div>
            <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </div>
            <div>
                <button>Add to cart</button>
            </div>
        </section>
    );
};

export default DetailProduct
