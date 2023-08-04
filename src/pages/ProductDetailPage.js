import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetails";



function ProductDetailPage() {
    return (
        <div>
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
        </div>
    );
}

export default ProductDetailPage;