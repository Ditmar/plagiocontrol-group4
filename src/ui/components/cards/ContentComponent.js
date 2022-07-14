import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import {MiniCardComponent} from './MiniCardComponent';


const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30,
      
    },
    cardRow: {
        flexGrow: 1,
        marginTop: 30,
        '@media (max-width: 48rem)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
   
        marginRight: 30,
        '@media (max-width: 48rem)': {
            marginTop: 30,
            marginLeft:60,
            
        }
    },
 
});
export const ContentComponent=()=> {
    return (
        <Column>
            <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" >
                <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" >
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Documentos" value="60" />
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Revisados" value="16" />
                    <MiniCardComponent className={css(styles.miniCardContainer)}  title="Copias Destacadas" value="43" />
                </Row>
                
            </Row>
          
        </Column>
    );
}


