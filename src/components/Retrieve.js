import React,{Component} from 'react';


class Retrieve extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[],
          isLoaded:false,
        }
      }
    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')  
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
          })
      }
    
      render() {
    
        var { isLoaded, items } = this.state;
    
        if (!isLoaded) {
          return <div>Loading...</div>
        }
        else {
          return (
            <div className="App">
              Data has been loaded
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    {item.name} | {item.email}
                  </li>
                ))}
              </ul>
    
            </div>
          )
        }
        
        
      }
}
 
export default Retrieve;