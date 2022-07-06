import React from 'react'; 
import { Column, Row } from 'simple-flexbox'; 
import { StyleSheet, css } from 'aphrodite'; 
 
import {LastsDocuments} from './LastsDocuments'; 
import '../../../App.css'; 
 
const styles = StyleSheet.create({ 
    container: { 
        height: '100%', 
        minHeight: '100vh' 
    }, 
    content: { 
        marginTop: 54 
    }, 
    mainBlock: { 
        backgroundColor: '#F7F8FC', 
        padding: 30 
    } 
}); 
 
class RecentDocuments extends React.Component { 
 
 
 
    resize = () => this.forceUpdate(); 
 
    render() { 
         
        return ( 
            <Row className={css(styles.container)}> 
                
                <Column flexGrow={1} className={css(styles.mainBlock)}> 
                   
                    <div className={css(styles.content)}> 
                        <LastsDocuments /> 
                    </div> 
                </Column> 
            </Row> 
        ); 
    } 
} 
 
export default RecentDocuments;