import React from 'react'
import { NavLink } from 'react-router-dom'

const Bill = () => {
  return (
    <>
         <div className="col-sm-3 col-md-4 offset-md-1 mobile">
            <div className="py-4 d-flex justify-content-end">
                <h6><a href="/order">Cancel and return to website</a></h6>
            </div>
            <div className="bg-light rounded d-flex flex-column">
                <div className="p-2 ml-3"><h4>Order Recap</h4></div>
                <div className="p-2 d-flex">
                    <div className="col-8">Contracted Price</div>
                    <div className="ml-auto">$186.76</div>
                </div>
                <div className="p-2 d-flex">
                    <div className="col-8">Amount toward deductible</div>
                    <div className="ml-auto">$0.00</div>
                </div>
                <div className="p-2 d-flex">
                    <div className="col-8">Coinsurance( 0% )</div>
                    <div className="ml-auto">+ $0.00</div>
                </div>
                <div className="p-2 d-flex">
                    <div className="col-8">Copayment</div>
                    <div className="ml-auto">+ $40.00</div>
                </div>
                <div className="border-top px-4 mx-3">
                </div>
                <div className="p-2 d-flex pt-3">
                    <div className="col-8">Total Deductible, Coinsurance, and Copay</div>
                    <div className="ml-auto">$40.00</div>
                </div>
                <div className="p-2 d-flex">
                    <div className="col-8">Maximum out-of-pocket on Insurance Policy (not reached)</div>
                    <div className="ml-auto">$6500.00</div>
                </div>
                <div className="border-top px-4 mx-3"></div>
                <div className="p-2 d-flex pt-3">
                    <div className="col-8">Insurance Responsibility</div>
                    <div className="ml-auto"><b>$71.76</b></div>
                </div>
                <div className="p-2 d-flex">
                    <div className="col-8">Patient Balance  <span className="fa fa-question-circle text-secondary"></span></div>
                    <div className="ml-auto"><b>$71.76</b></div>
                </div>
                <div className="border-top px-4 mx-3"></div>
                <div className="p-2 d-flex pt-3">
                    <div className="col-8"><b>Total</b></div>
                    <div className="ml-auto"><b className="green">$85.00</b></div>
                </div>
                </div>
                <NavLink className='btn' to="/order/bill/payment">Go to Payment Page</NavLink>
                
                </div>

    </>
    )
}

export default Bill