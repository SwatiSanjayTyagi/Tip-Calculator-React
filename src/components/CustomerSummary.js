import React , {Component} from 'react'

class CustomerSummary extends Component {
    constructor (props) {
        super (props)
        this.state={
            totalTip: 0
        }
    }
    
    
    customerTotal = (event) =>  { var totalTip =0 , custCount = 0
                                    {this.props.customerSummaryArray.map((item)=>
                                        (totalTip += item.tip))}
                                        this.setState({totalTip: totalTip,
                                        custCount: this.props.customerSummaryArray.length}
                                            )
                                    }
    render () {
            return(
            <div>
                <input type= 'button' value = 'Calculate Tip & Customer'
                 onClick= {this.customerTotal} />
                <table border="3" width='100%'>
                    <tr>
                        <th> Total Customer </th>
                        <th> Tip </th>
                    </tr>
                    <tr>
                        <th> {this.state.custCount} </th>
                        <th> {this.state.totalTip} </th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default CustomerSummary