import React from 'react'; 
import { Column, Row } from 'simple-flexbox'; 
import { StyleSheet, css } from 'aphrodite/no-important'; 
import ItemsDocuments from './ItemsDocuments'; 
 
 
const styles = StyleSheet.create({ 
    
    lastdocuments: { 
        marginRight: 30, 
        '@media (max-width: 64rem)': { 
            marginRight: 0 
        } 
    }, 
   
}); 
 
export const LastsDocuments = ()=> { 
    return ( 
        <Column> 
            <Row horizontal="space-between"  breakpoints={{ 64: 'column' }}> 
                <ItemsDocuments containerStyles={styles.lastdocuments} />    
            </Row> 
        </Column> 
    ); 
}