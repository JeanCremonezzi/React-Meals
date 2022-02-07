import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
	return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

export const Modal = (props) => {
	return (
		<>
			{createPortal(<Backdrop />, portalElement)}
            
			{createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</>
	);
};
