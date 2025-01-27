import React from "react";

import classnames from 'classnames'
import styles from './button-ui.module.scss'

type ButtonUIProps = {
  isForward?: boolean;
  onClick: () => void;
};

export const ButtonUI: React.FC<ButtonUIProps> = ({ onClick, isForward }) => {
  return <button onClick={onClick} className={classnames(styles.button, {[styles.button_forward]: isForward})}></button>;
};
