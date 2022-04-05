import React from 'react'
import { useEffect, useState } from 'react'
import FilterInput from '../components/FilterInput'
import ProductList from '../components/ProductList'

const SearchWord = () => {
    return (
        <div>
            <FilterInput />
            <ProductList />
        </div>
    )
}

export default SearchWord