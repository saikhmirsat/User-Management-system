import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'


export default function Allroutes() {
    return (
        <Routes>
            <Route path="/" element={<Page1 />}></Route>
            <Route path="/page2" element={<Page2 />}></Route>
            <Route path="/page3" element={<Page3 />}></Route>
        </Routes>
    )
}
