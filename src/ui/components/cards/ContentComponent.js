
import React from 'react'; 
import { Column, Row } from 'simple-flexbox'; 
import { StyleSheet, css } from 'aphrodite/no-important'; 
import MiniCardComponent from './MiniCardComponent'; 
 
 
const styles = StyleSheet.create({ 
    cardsContainer: { 
        marginRight: -30, 
        marginTop: -30 
    }, 
    cardRow: { 
        marginTop: 30, 
        '@media (max-width: 48rem)': { 
            marginTop: 0 
             
        } 
    }, 
    miniCardContainer: { 
        flexGrow: 1, 
        marginRight: 30, 
        
        '@media (max-width: 48rem)': { 
            marginTop: 30, 
            maxWidth: 350, 
        } 
    }, 
    
}); 
 
function ContentComponent() { 
    return ( 
        <Column> 
            <Row  
            className={css(styles.cardsContainer)}  
            wrap  
            flexGrow={1}  
            horizontal="space-between"  
            breakpoints={{ 48: 'column' }} 
            > 
                
                
                <Row  
                className={css(styles.cardRow)} 
                 wrap  
                 flexGrow={1}  
                 horizontal="space-between"  
                 breakpoints={{ 24: 'column' }}> 
                <MiniCardComponent  
                className={css(styles.miniCardContainer)} 
                 title="Documentos" value="60" /> 
              
                </Row> 
                <Row  
                className={css(styles.cardRow)} 
                 wrap  
                 flexGrow={1}  
                 horizontal="space-between"  
                 breakpoints={{ 24: 'column' }}> 
                <MiniCardComponent  
                className={css(styles.miniCardContainer)} 
                 title="Revisados" value="16" /> 
              
                </Row> 
                <Row  
                className={css(styles.cardRow)} 
                 wrap  
                 flexGrow={1}  
                 horizontal="space-between"  
                 breakpoints={{ 24: 'column' }}> 
                <MiniCardComponent  
                className={css(styles.miniCardContainer)} 
                 title="Copias Destacadas" value="43" /> 
              
                </Row> 
            </Row> 
            
        </Column> 
    ); 
} 
 
export default ContentComponent;

