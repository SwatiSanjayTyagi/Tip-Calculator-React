import React , {Component } from 'react'
import CustomerList from '../components/CustomerList'
import CustomerSummary from './CustomerSummary'

class InputDetails extends Component {
    constructor(props) {
        super (props)
        this.state={
            custArray: []
        }
    }

    render() {
        const{ bamt  , per , custName} = this.state
        return(
            <div>
                <strong>Enter your bill amount</strong>
                <br/>
                <br/>
                <input type='text' value={bamt} onChange={(event)=>{this.setState({bamt: event.target.value})}} autoFocus/>
                <br/>
                <br/>
                <strong>How was the service</strong>
                <select value = {per} onChange={(event)=>{this.setState({per: event.target.value})}}>
                    <option value="0">Choose...</option>
                    <option value='0.2'>Excelent - 20%</option>
                    <option value='0.1'>Moderate - 10%</option>
                    <option value='0.05'>Bad - 5%</option>
                </select>
                <input type = 'text' value = {custName} placeholder ='Customer Name'
                onChange={(event)=>{this.setState({custName: event.target.value})}}/>
                <input type = 'button'  value ="Add Customer" onClick={(event)=>
                {this.setState({custArray: [ ...this.state.custArray,
                                            {name : this.state.custName,
                                             tip : this.state.bamt * this.state.per}
                                            ] , bamt: '', custName: '' , per : ''} )}
                                                            } />
                {console.log(this.state.custArray)}
                <CustomerList customerListArray={this.state.custArray}/>
                <CustomerSummary customerSummaryArray={this.state.custArray}/>
            </div>
        )
    }
    
}

export default InputDetails