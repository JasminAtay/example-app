//1- Kullanilacak library import ederiz
import React from 'react'
import ReactDOM from 'react-dom'

//2- Component olusturuyoruz
const App = () =>{
    return(
        <div>
            <h1>Hi React!</h1>
        </div>
    )
}

//3- Export edilecek
ReactDOM.render(<App/>, document.querySelector('#root'))
