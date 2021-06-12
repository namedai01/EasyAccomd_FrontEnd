import React from 'react'
import style from './home.header.module.css'
// import banner from '/img/apartment.jpeg'


function HomeHeader() {
    return (
        <header>
            <div className={style.banner}>
                <div className={style.quote}>
                    <h1>
                        Lorem Ipsum is simply dummy text of the p
                    </h1>
                </div>
                <form className={style.searchBox}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button></button>
                </form>
            </div>
            {/* <div className={style.fake}>

            </div> */}
        </header>
    )
}

export default HomeHeader