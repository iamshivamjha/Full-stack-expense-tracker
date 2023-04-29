import React from 'react'

import "./home.css"

import { Header } from './Header'
import { Balance } from './Balance'
import { IncomeExpenses } from './IncomeExpenses'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'
import { GlobalProvider } from '../context/GlobalState'

export const Home = () => {
  return (
    <>
    <GlobalProvider>
   <Header />
   <div className="container">
     <Balance />
     <IncomeExpenses />
    <TransactionList />
     <AddTransaction />
   </div>
 </GlobalProvider> 
    </>
  )
}
