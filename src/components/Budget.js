import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const [bbudget, setBudget] = useState('');

    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={bbudget}
                    style={{size: 10}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );

};
export default Budget;