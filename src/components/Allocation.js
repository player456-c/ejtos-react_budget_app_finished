import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Allocation = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        if(cost > remaining) {
            alert("The value cannot exceed remaining funds  £"+remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='alert alert-primary'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <select className="custom-select" id="inputGroupSelect03" onChange={(event) => setAction(event.target.value)}>
                        <option value="Pound" name="Pound">£</option>
                        <option value="Dollar" name="Dollar">$</option>
                        <option value="Euro" name="Euro">€</option>
                        <option value="Ruppee" name="Ruppee">₹</option>
                    </select>
                </div>
            </div>

                {/* <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option value="Pound" name="Pound">£</option>
                        <option value="Dollar" name="Dollar">$</option>
                        <option value="Euro" name="Euro">€</option>
                        <option value="Ruppee" name="Ruppee">₹</option>
                    </select>
                </div> */}

        </div>
    );
};

export default Allocation;








