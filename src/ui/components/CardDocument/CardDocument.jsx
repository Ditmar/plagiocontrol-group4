import React from 'react'
import cover from './cover.png'
export const CardDocument = ({title='Autor. Ing. Raul Gomez'}) => {
    const bodyCard = {
        width: '31.188rem',
        height: '19.188rem',
        radius: '0.5rem',
        boxSizing: 'border-box',
        position: 'absolute',
        left: '0rem',
        right: '0rem',
        top: '0rem',
        bottom: '0rem',
        background: '#FFFFFF',
        border: '0.063rem solid #DFE0EB',
        borderRadius: '0.5rem',
    }
    const titleCard = {
        width: '18.063rem',
        height: '1.5rem',
        top: '2rem',
        right: '11.125rem',
        left: '2rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '43.75rem',
        fontSize: '1.188rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.025rem',
        position: 'absolute',
        color: '#252733',
    }
    const detailsCard = {
        width: '5.188rem',
        position: 'absolute',
        height: '1.25rem',
        left: '2.5rem',
        right: '0rem',
        top: '7.813rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '37.5rem',
        fontSize: '0.875rem',
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: '0.013rem',
    }
    const detailsCard1 = {
      width: '7.375rem',
      position: 'absolute',
      height: '3.125rem',
      left: '0rem',
      right: '6.25rem',
      top: '1.25rem',
      fontFamily: 'Mulish',
      fontStyle: 'normal',
      fontWeight: '37.5rem',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      textAlign: 'right',
      letterSpacing: '0.013rem',
    }
    const detailsCard2 = {
      width: '7.063rem',
      position: 'absolute',
      height: '3.125rem',
      left: '0rem',
      right: '6.25rem',
      top: '2.375rem',
      fontFamily: 'Mulish',
      fontStyle: 'normal',
      fontWeight: '37.5rem',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      textAlign: 'right',
      letterSpacing: '0.013rem',
    }
    const link = {
      width: '28.125rem',
      position: 'absolute',
      height: '3.125rem',
      left: '0rem',
      right: '6.25rem',
      top: '2.875rem',
      fontFamily: 'Mulish',
      fontStyle: 'normal',
      fontWeight: '37.5rem',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      textAlign: 'right',
      letterSpacing: '0.013rem',
    }
    const linkViewDetails = {
      textDecoration: 'none',
      color: '#3751FF',
    }
    const numberPage = {
      width: '15.625rem',
      position: 'absolute',
      height: '3.125rem',
      left: '0rem',
      right: '6.25rem',
      top: '0rem',
      fontFamily: 'Mulish',
      fontStyle: 'normal',
      fontWeight: '37.5rem',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      textAlign: 'right',
      letterSpacing: '0.013rem',
      color: '#9FA2B4',
    }
    const divider = {
      width: '20.625rem',
      position: 'absolute',
      height: '0rem',
      left: '0.063rem',
      right: '62.5rem',
      top: '11.563rem',
      border: '0.063rem solid',
      color: '#DFE0EB',
    }
    const coverImage = {
      width: '9.375rem',
      position: 'relative',
      height: '12.5rem',
      left: '18.75rem',
      top: '0.625rem',
    }
    const table = {
      paddingRight: '6.25rem',
      Border: '1.25rem',
    }
    return (
      <div style={bodyCard}>
        <div>
            <tr style={divider}></tr>
            <h1 style={titleCard}>{title}</h1> 
            <td style={link}>
                <a style={linkViewDetails} href=''>Ver detalles</a>
                <tr>
                  <img src={cover} style={coverImage} />
                </tr>       
            </td>
            <div>
              <table>
                <tbody>
                  <tr style={table}>
                    <td style={detailsCard}>
                      Análisis de la 
                      <td style={numberPage}>
                        321 Pag.
                      </td>
                      <tr style={detailsCard1}>investigación sobre</tr>
                      <tr style={detailsCard2}>radio en Bolivia ...</tr>                      
                    </td>    
                  </tr>
                </tbody>      
              </table>
            </div>
        </div>
      </div>
  )
}