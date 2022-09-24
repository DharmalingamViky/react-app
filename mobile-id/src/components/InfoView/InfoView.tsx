import React from 'react';

import styles from './InfoView.scss';

export interface InfoViewProps {
  prop?: string;
}

export function InfoView({ prop = 'default value' }: InfoViewProps) {
  return <div className={styles.InfoView}>InfoView {prop}</div>;
}
