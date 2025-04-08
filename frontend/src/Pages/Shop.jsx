import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import SkinCare from '../Components/SkinCare/SkinCare'
const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);
  const [skinCare, setSkinCare] = useState([]);
  const fetchInfo = () => {
    fetch('http://localhost:5000/popularinwomen')
      .then((res) => res.json())
      .then((data) => setPopular(data))
    fetch('http://localhost:5000/newcollections')
      .then((res) => res.json())
      .then((data) => setNewCollection(data))
    fetch('http://localhost:5000/SkinCare')
      .then((res) => res.json())
      .then((data) => setSkinCare(data))
  }

  useEffect(() => {
    fetchInfo();
  }, [])


  return (
    <div>
      <Hero />
      <Popular data={popular} />
      <Offers />
      <NewCollections data={newcollection} />
      <SkinCare data={skinCare} />
      <NewsLetter />
    </div>
  )
}

export default Shop
