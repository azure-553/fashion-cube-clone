import { Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import Auth from "../../modules/Auth/index.js"
// import EmptyCart from "../../assets/images/emptyCart.png"


export default function HomeCartView(props) {
    // const navigate = useNavigate();

    // const goTocheckout = () => {
    //     navigate('/fashion-cube/cart');
    // }

    return(
        <Modal {...props} className="right">
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
                {props.item !== undefined && props.item !== null ? (
                    <span className="checkout--btn" onClick={() => console.log("aa")}>
                        checkout{" "}
                    </span>
                ): null}
            </Modal.Header>
            <Modal.Body className="modal-body-content">
                {props.Auth.getUserDetails()}
            </Modal.Body>
        </Modal>
    );
}