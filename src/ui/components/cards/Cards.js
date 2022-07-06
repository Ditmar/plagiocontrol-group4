import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

import ContentComponent from './ContentComponent';
import '../../../App.css';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: 850
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});
class Cards extends React.Component {

    

 

    resize = () => this.forceUpdate();

    render() {
     
        return (
            <Row className={css(styles.container)}>
                
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                 
                    <div className={css(styles.content)}>
                        <ContentComponent />
                    </div>
                </Column>
            </Row>
        );
    }
}

export default Cards;
