import React, { Component } from 'react'
import CategoriesList from "../Pages/CategoriesList"
import Trendy from './Trendy';
import ColorChange from "./Color"
 class Category extends Component {
  render() {
    return (
<>
<CategoriesList />
<Trendy />
<ColorChange />
</>
    )
  }
}
export default Category;