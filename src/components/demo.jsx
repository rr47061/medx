import React,{Component} from 'react';

class Demo extends Component{


    state = {
        products: []
    }

    componentDidMount() {
    }
    getProducts = => {
        fetch('http://localhost:5000/products')
}
}