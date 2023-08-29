import Header from '../../components/Header'
import ProductInfo from "../../components/ProductInfo";
import Buttons from '../../components/Buttons';
import { Component } from 'react';

export default function ProdList() {
    return (
        <>
            <div className='bg-light bg-darken-xl'>
                <Header />
                <Buttons />
                <ProductInfo />
            </div>
        </>
    )
}