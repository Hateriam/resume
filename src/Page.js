import React, { useState } from 'react'
import AboutMe from './AboutMe'
import CompAndMe from './CompAndMe'
import Inspiration from './Inspiration'
import Coding from './Coding'
import Plan from './Plan'
import Skills from './Skills'

function Page() {
const [shortView, setShortView] = useState(true)

    return <div id="wrapper">
        <header>
        </header>
        <div id="container">
            <main>
            <h1>Резюме</h1>
            <p>Доброго времени суток! Хочу представиться и рассказать немного о себе. <button onClick={() => setShortView(!shortView)}>{shortView ? 'Подробнее' : 'Свернуть'}</button> </p>
            <h2>Коротко о себе</h2>
                <AboutMe 
                shortView={shortView}
                />
            <h2>Компьютер и я</h2>
                <CompAndMe
                shortView={shortView}
                />
            <h2>Вдохновение</h2>
                <Inspiration 
                shortView={shortView}
                />
            <h2>Программирование</h2>
                <Coding 
                shortView={shortView}
                />
            <h2>Планы</h2>
                <Plan />    
            <h2>Навыки</h2>
                <Skills /> 
                </main>
            </div>
            <footer>
            </footer>
    </div>
}

export default Page