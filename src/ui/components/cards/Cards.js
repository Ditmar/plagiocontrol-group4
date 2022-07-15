import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { ContentComponent } from './ContentComponent';
import './style.css';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    minHeight: '45.563rem',
  },
  content: {
    marginTop: 54,
  },
  mainBlock: {
    backgroundColor: '#F7F8FC',
    padding: 30,
    marginLeft: 255,
    '@media (max-width: 67.5rem)': {
      marginLeft: 0,
      padding: 10,
    },
  },
});
export const Cards = () => {
  return (
    <Row className={css(styles.container)}>
      <Column flexGrow={1} className={css(styles.mainBlock)}>
        <div className={css(styles.content)}>
          <ContentComponent />
        </div>
      </Column>
    </Row>
  );
};
