import React from "react";
import { TEvent } from "../../services/types";
import styles from "./event-ui.module.scss"

type EventUIProps = {
  event: TEvent;
};
export const EventUI: React.FC<EventUIProps> = ({ event }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__year}>{event.year}</h2>
      <p className={styles.container__description}>{event.description}</p>
    </div>
  );
};
