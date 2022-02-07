import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClick}></div>;
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
			{createPortal(<Backdrop onClick={props.onClick} />, portalElement)}

			{createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</>
	);
};
