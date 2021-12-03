import Header from './header';
import Content from './content';
import Actions from './actions';
import { Modal } from './modal';

export default Object.assign(Modal, { Header, Content, Actions });
export type { ModalProps } from './modal';
