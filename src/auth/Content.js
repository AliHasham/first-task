import React from 'react'

const Content = () => {
    const Card = (number="drdr",name="ftgft") => {
       return( <div className="col col-12 col-md-3 col-lg-3 col-xl-3">
            <div className="content-card">
             <div className="content-number green">
                    <span style={{ color: ' rgb(65, 131, 196)' }}>
                        {number}</span>
                </div>

                <div className="content-card-title">
                    <h5 className="content-text ">{name}</h5>
                
                
                </div>
              
            </div>
        </div>)
    }
    return (
        <div className=''>
             <div className="">
                    <div className="alert alert-primary mx-3" role="alert"
                        style={{ fontSize: '16px', padding: '18px' }}>
                        The NZULM drug database was last updated on 09/09/2022
                    </div>
                </div>
            <div className='row dishborad-content'>
               
                {Card("786","Blood product")}
                {Card("436","Hormonal")}
                {Card("329","Supportive")}
                {Card("786","Cytotoxic")}
                {Card("282","MISC")}
                {Card("402","Fluid")}
                {Card("735","Ancillary")}
                {Card("700","Biological")}
                {Card("29"," Targeted small molecule")}
              
            </div>
            <footer className='para-fotter'><p>Raurau Ngaehe version 1.12.0 © Powered by Valentia</p></footer >
           
         
        </div>
    )
}

export default Content
