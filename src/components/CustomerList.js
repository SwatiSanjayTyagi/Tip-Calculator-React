import React , {Component} from 'react'


class CustomerList extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            <div>
                <strong>Customer List</strong>
                <ul>
                {this.props.customerListArray.map((item, index) => (
                    <li key={index}><strong>{`${item.name} offered a tip of Rs. ${item.tip }`}</strong></li>
                        ))}
                    
                </ul>
            </div>
        )
    }
}

export default CustomerList