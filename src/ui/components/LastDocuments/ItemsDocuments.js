import React from 'react'; 
import { Row } from 'simple-flexbox'; 
import { StyleSheet, css } from 'aphrodite/no-important'; 
import LastDocument from './LastDocument'; 
 
const styles = StyleSheet.create({ 
    itemTitle: { 
        fontFamily: 'Muli', 
        fontStyle: 'normal', 
        fontWeight: '600', 
        fontSize: 14, 
        lineHeight: '1.25rem', 
        letterSpacing: '0.013rem', 
        color: '#252733' 
    }, 
   
    link: { 
        fontFamily: 'Muli', 
        fontStyle: 'normal', 
        fontWeight: '600', 
        fontSize: 14, 
        lineHeight: '1.25rem', 
        letterSpacing: '00.013rem', 
        color: '#3751FF', 
        textAlign: 'right', 
        cursor: 'pointer',  
        marginRight:10 
    }, 
    itemValue: { 
        color: '#9FA2B4' 
    }, 
   
}); 
 
class ItemsDocuments extends React.Component { 
 
    renderStat(title, value, link) { 
        return (<Row flexGrow={1} horizontal="space-between" vertical="center"> 
            <span className={css(styles.itemTitle)}>{title}</span> 
            <Row > 
            <span className={css(styles.link)}>{link}</span> 
            <span className={css(styles.itemTitle, styles.itemValue)}>{value}</span> 
            </Row> 
        </Row>); 
    } 
 
    render() { 
        return ( 
            <LastDocument containerStyles={this.props.containerStyles} title="Ultimos Documentos Publicados" 
              subtitle="Group:" subtitleTwo="Support" 
                items={[ 
                    this.renderStat('Análisis de la investigación sobre radio en Bolivia ...',  '321 Pag.', 'View details' ), 
                    this.renderStat('Análisis bibliométrico y de redes sociales en tesis ...', '120 Pag.', 'View details' ), 
                     
                     
                ]}   
            /> 
        ); 
    } 
} 
 
export default ItemsDocuments;