import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/filterSlice'
import { setValue } from './redux/slices/testSlice'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import './scss/app.scss'

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const testValue = useSelector((state) => state.test.value)

  return (
    <div className='wrapper'>
      <div>
        <div>
          {/* <button aria-label='Increment value' onClick={() => dispatch(increment())}>
            Increment
          </button> */}
          <span>{testValue}</span>
          {/* 
          <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
            Decrement
          </button> */}
          <button onClick={() => dispatch(setValue())}>test button</button>
        </div>
      </div>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
