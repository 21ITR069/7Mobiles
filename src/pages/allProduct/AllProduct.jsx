import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";
import { motion } from "framer-motion";

const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="py-8"
            >
                <div className="">
                    <h1 className="text-center mb-5 text-2xl font-semibold">All Products</h1>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex justify-center">{loading && <Loader />}</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {getAllProduct.map((item, index) => {
                                const { id, title, price, productImageUrl } = item;
                                return (
                                    <div key={index} className="max-w-xs border border-gray-300 rounded-lg overflow-hidden shadow-md">
                                        <div onClick={() => navigate(`/productinfo/${id}`)} className="cursor-pointer">
                                            <img
                                                className="w-full h-40 object-contain"
                                                src={productImageUrl}
                                                alt={title}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h2 className="text-xs text-gray-400 mb-1">7Mobiles</h2>
                                            <h1 className="text-lg font-medium text-gray-900 mb-2">{title.substring(0, 25)}</h1>
                                            <h1 className="text-lg font-medium text-gray-900 mb-2">₹{price}</h1>
                                            <div className="flex justify-center">
                                                {cartItems.some((p) => p.id === item.id) ? (
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="bg-red-700 hover:bg-red-600 w-full text-white py-2 rounded-lg font-bold"
                                                    >
                                                        Remove from Cart
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="bg-green-500 hover:bg-green-600 w-full text-white py-2 rounded-lg font-bold"
                                                    >
                                                        Add to Cart
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </motion.div>
        </Layout>
    );
};

export default AllProduct;
