import React, { Component } from 'react';

class Products extends Component {

    constructor() {
        console.log("constructor called");
        super();
        this.state = {
            categories: [],
            products: [],
            // selectedCategory: "electronics",
            selectedCategory: null,
        }
    }

    componentDidMount() {
        console.log("component did mount");
        this.getAllCategories();
    }

    componentWillUnmount() {
        //clean up logic will come inside this function 

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log({ prevProps, prevState, snapshot });
        // if (this.state.selectedCategory !== prevState.selectedCategory) {
        if (this.state.selectedCategory !== prevState.selectedCategory) {
            this.getProductsBySelectedCategory();
        }
        console.log("this.state: ", this.state);
    }

    getAllCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    categories: json,
                });
                console.log("categories: ", this.state.categories);
            })
    }

    getProductsBySelectedCategory() {
        const url = `https://fakestoreapi.com/products/category/${this.state.selectedCategory}`;
        console.log("url: ", url);
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({ products: json });
            })
    }

    handleCategoryChange = (e) => {
        console.log("handleCategory, category selected: ", e.target.value);
        this.setState({ selectedCategory: e.target.value.toLowerCase() });
        console.log("this.state", this.state);
    }

    render() {
        console.log("component did rendered");
        return (
            <div>
                <select name="categories" id="categories" onChange={this.handleCategoryChange}>
                    {this.state.categories.map((category) => (<option key={category} value={category}>{category.toUpperCase()}</option>)
                    )}
                </select>
                <div className='products'>
                    <h1>Products:</h1>
                    <ul>
                        {this.state.products?.map((product) => {
                            return <li key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <h2>{product.title}</h2>
                                <p>${product.price}</p>
                                <p className='description'>{product.description}</p>
                            </li>
                        }
                        )}

                    </ul>
                </div>
            </div>
        );
    }
}

export default Products;