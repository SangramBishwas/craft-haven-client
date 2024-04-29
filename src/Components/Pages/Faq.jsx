import { Slide } from "react-awesome-reveal";

const Faq = () => {
    return (
        <div className="my-20 mx-5 md:mx-10 lg:mx-20">
            <Slide duration={2000}>
                <h2 className="font-bold mb-10 text-2xl md:text-3xl text-center">
                    Frequently Asked Questions
                </h2>
            </Slide>
            <div className="space-y-5">
                <div className="collapse collapse-arrow bg-base-200 hover:bg-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How can I purchase items from your website?
                    </div>
                    <div className="collapse-content">
                        <p>To purchase items from our website, simply browse through our collection, select the items you wish to purchase, and add them to your cart. Then proceed to the checkout page to complete your purchase by providing your shipping and payment information.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 hover:bg-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer international shipping?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer international shipping to many countries around the world. Shipping costs and delivery times may vary depending on your location. You can find more information about our international shipping policy on our shipping page.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 hover:bg-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I return or exchange an item if I amm not satisfied with it?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we have a hassle-free return and exchange policy. If you are not completely satisfied with your purchase, you can return the item(s) within [number] days of receiving them for a full refund or exchange. Please refer to our returns and exchanges policy for more details.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 hover:bg-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Are your products handmade?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, the majority of our products are handmade by skilled artisans. We take pride in offering unique, handcrafted items that reflect the creativity and craftsmanship of our artisans.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 hover:bg-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer customization or personalization options?
                    </div>
                    <div className="collapse-content">
                        <p>Some of our products may offer customization or personalization options. Please check the product description or contact our customer support team to inquire about customization possibilities for specific items.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 hover:bg-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you have a physical store where I can view your products in person?
                    </div>
                    <div className="collapse-content">
                        <p>At the moment, we operate exclusively online and do not have a physical retail store. However, we strive to provide detailed product descriptions and high-quality images to help you make informed purchasing decisions. If you have any questions about our products, feel free to contact our customer support team for assistance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;