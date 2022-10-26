import DetailProduct from "./DetailProduct";
import SliderProduct from "./SliderProduct";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:py-11 md:px-14">
            <SliderProduct />
            <DetailProduct />
        </main>
    );
};

export default MainProduct