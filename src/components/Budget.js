import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);


    
    const setBudget=(newBudget)=>{

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        //console.log(totalExpenses);

        if(newBudget>20000){
            alert("You are not allowed to have more than 20000 units of money in the budget.");
        }else if(newBudget<totalExpenses){
            alert("You cannot reduce the budget value lower than the spending.");
        }else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        };
    };

    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{width: '80px', size: 10}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );

};
export default Budget;