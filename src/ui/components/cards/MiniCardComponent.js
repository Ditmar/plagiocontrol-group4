import React from 'react'; 
import { Column } from 'simple-flexbox'; 
import { StyleSheet, css } from 'aphrodite/no-important'; 
 
const styles = StyleSheet.create({ 
    container: { 
        backgroundColor: '#FFFFFF', 
        border: '0.063rem solid #DFE0EB', 
        borderRadius: 4, 
        cursor: 'pointer', 
        height: 70, 
        maxWidth: 350, 
        padding: '1.5rem 2rem 1.5rem 2rem', 
        ':hover': { 
            borderColor: '#3751FF', 
            ':nth-child(n) > span': { 
                color: '#3751FF' 
            } 
        } 
    }, 
    title: { 
        color: '#9FA2B4', 
        fontFamily: 'Muli', 
        fontStyle: 'normal', 
        fontWeight: 'bold', 
        fontSize: 19, 
        lineHeight: '1.5rem ', 
        letterSpacing: '0.025rem', 
        marginBottom: 12, 
        minWidth: 102, 
        textAlign: 'center' 
    }, 
    value: { 
        color: '#252733', 
        fontFamily: 'Muli', 
        fontStyle: 'normal', 
        fontWeight: 'bold', 
        fontSize: 40, 
        letterSpacing: '1px', 
        lineHeight: '50px', 
        textAlign: 'center' 
    } 
}); 
 
function MiniCardComponent({ className = '', title, value }) { 
    const composedClassName = `${css(styles.container)} ${className}`;

    return ( 
        <Column flexGrow={1} className={composedClassName} horizontal="center" vertical="center"> 
            <span className={css(styles.title)}>{title}</span> 
            <span className={css(styles.value)}>{value}</span> 
        </Column> 
    ); 
} 
 
export default MiniCardComponent;