import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./../components/Card"
import "./Home.css"

function Home() {

  const [user, setUser] = useState([])
  const [search, setSearch] = useState('')
  const [filterdata, setFilterdata] = useState([])

  const loadUser = async () => {
    const responce = await axios.get("https://run.mocky.io/v3/9936ff4a-7946-41d2-938c-596aa875b566")
    setUser(responce.data.users)
  }
  useEffect(() => {
    loadUser()
  }, [])

  useEffect(() => {
    const filterdata = user.filter((obj) => {
      const query = search.toLowerCase()

      return (obj.name.toLowerCase().includes(query))
    })
    setFilterdata(filterdata)
  }, [user, search])

  return (
    <div>
      <h1 className='head'>Employee Bank Details</h1>

      <input
        placeholder='Search Employee'
        className='input-box'
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />

      <div className='displycard'>
        {
          filterdata.map((user, inex) => {
            const { name, email, avatar, bankAccounts } = user;
            return (
              <Card key={inex} img={avatar} name={name} email={email} bankAccounts={bankAccounts} />
            )
          })
        }
        {
          filterdata.length === 0 ? <p className='not-found'>Employee Details Not found</p> : null
        }

      </div>
    </div>
  )
}

export default Home