import React,{Component} from 'react'

class SearchBar extends Component{
// //UnCotrolled Element{at any given instance in time the value of the input is with the DOM and not in the react}
// onChangeHandle(e)
// {
//     console.log(e.target.value);
// }
state = {term: ' '};

onFormSubmit=(e)=>
{
    e.preventDefault();

    this.props.onSubmitt(this.state.term)
}

    render()
    {
        return(
            <div className="ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="ui field">
                            <label>Image Search</label>
                            <input type="text" value = {this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                        </div>        
                    </form>
            </div>
        );
    }
}
export default SearchBar;