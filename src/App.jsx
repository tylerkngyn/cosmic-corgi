import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Connect from "./components/Connect.jsx";
import Customize from "./components/Customize.jsx";
import Pet from "./components/Pet.jsx";
import Friends from "./components/Friends.jsx";
import React, {useState, useEffect} from 'react';
import Tasks from "./components/Tasks.jsx";
import Checkin from "./components/Checkin.jsx";
import Connected from "./components/Connected.jsx";


const GlobalStyle = createGlobalStyle`
    *{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        body {
            background-color: #2a1f2d;
            justify-content: center;
            
        }
    }
`
const router = createBrowserRouter(
    [{path:"*", Component: Root},]
);

function Root(){
    return(
            <Routes>
                <Route path={`/*`} element={<Home />} />
                <Route path={`/login`} element={<Login />} />
                <Route path={`/signup`} element={<Signup />} />
                <Route path={`/connect`} element={<Connect />} />
                <Route path={`/pet`} element={<Pet />} />
                <Route path={`/customize`} element={<Customize />} />
                <Route path={`/friends`} element={<Friends />} />
                <Route path={`/tasks`} element={<Tasks />} />
                <Route path={`/checkin`} element={<Checkin/>} />
                <Route path={`/connected`} element={<Connected/>} />
            </Routes>
    )
}

export default function App() {

  return (
    <>
        <GlobalStyle />
        <RouterProvider router={router} />
    </>
  )
}