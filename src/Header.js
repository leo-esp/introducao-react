import React from 'react'

export default class Header extends React.Component{
    render(){
        return (
            <div>
                <div className="jumbotron" style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <img src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png" style={{ width: 200 }} />
                </div>
            </div>
        );
    }
}