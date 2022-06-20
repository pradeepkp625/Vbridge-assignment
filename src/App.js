import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import DetailsPage from './components/AddResourses/JDDetailPage';
import ListContext from './components/ContextApi/ListContext';
import Header from './components/Homepage/Header';
import Homepage from './components/Homepage/Homepage';

import './globalStyle.css';
function App() {
  const [userData,setUserData]=useState([]);
  const [candidateData,setCandidateData]=useState([]);

  function setUserList(data){
    setUserData([...userData, data]);
  }
  function setCandidateDatacall(data){
    setCandidateData([...candidateData, data]);
  }
let {id}=useParams()
  return (
    <div className="App">
      <ListContext.Provider
        value={{
          setUserList:setUserList,
          userData:userData,
          setCandidateDatacall:setCandidateDatacall,
          candidateData:candidateData
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Homepage />
                </>
              }
            />
             <Route
              path="/addResourse/:id"
              element={
                <>
                <DetailsPage/>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ListContext.Provider>
    </div>
  );
}
export default App;
