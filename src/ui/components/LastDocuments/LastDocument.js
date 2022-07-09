import React from 'react'; 
import { Column, Row } from 'simple-flexbox'; 
import { StyleSheet, css } from 'aphrodite/no-important'; 
 
const styles = StyleSheet.create({ 
  container: { 
    backgroundColor: '#FFFFFF', 
    border: '0.063rem solid #DFE0EB', 
    borderRadius: 4, 
    padding: '1.5rem 2rem 0.75rem 2rem', 
  }, 
  containerMobile: { 
    padding: '0.75rem 1rem 0.375rem 1rem !important', 
  }, 
  itemContainer: { 
    marginLeft: -32, 
    marginRight: -32, 
    paddingLeft: 32, 
    paddingRight: 32, 
    paddingBottom: 18, 
    paddingTop: 18, 
    maxHeight: 22, 
    borderBottom: '0.063rem solid #DFE0EB', 
    ':last-child': { 
      borderBottom: 'none', 
    }, 
  }, 
  itemContainerMobile: { 
    marginLeft: -16, 
    marginRight: -16, 
    paddingLeft: 16, 
    paddingRight: 16, 
  }, 
 
  subtitle: { 
    fontFamily: 'Muli', 
    fontStyle: 'normal', 
    fontWeight: 'normal', 
    fontSize: 12, 
    lineHeight: '1rem', 
    letterSpacing: '0.006rem', 
    color: '#9FA2B4', 
  }, 
  subtitle2: { 
    color: '#252733', 
    marginLeft: 2, 
  }, 
  title: { 
    fontFamily: 'Muli', 
    fontStyle: 'normal', 
    fontWeight: 'bold', 
    fontSize: 19, 
    lineHeight: '1.5rem', 
    letterSpacing: '0.025rem', 
    color: '#252733', 
  }, 
}); 
 
export const LastDocument = (props) => { 
  function renderItem(item, index) { 
    return ( 
      <Column 
        flexGrow={1} 
        className={css(styles.itemContainer)} 
        key={`item-${index}`} 
        breakpoints={{ 426: css(styles.itemContainerMobile) }} 
      > 
        {item} 
      </Column> 
    ); 
  } 
  const { title, subtitle, subtitleTwo, items, containerStyles } = props; 
  return ( 
    <Column 
      flexGrow={1} 
      className={css(styles.container, containerStyles)} 
      breakpoints={{ 426: css(styles.containerMobile) }} 
    > 
      <Row horizontal='space-between'> 
        <Column> 
          <span className={css(styles.title)}>{title}</span> 
          <Row style={{ marginTop: 8, marginBottom: 16 }}> 
            <span className={css(styles.subtitle)}>{subtitle}</span> 
            {subtitleTwo && ( 
              <span className={css(styles.subtitle, styles.subtitle2)}> 
                {subtitleTwo} 
              </span> 
            )} 
          </Row> 
        </Column> 
      </Row> 
      {items.map(renderItem)} 
    </Column> 
  ); 
};