import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);



    const changeCurrency = (newCurrency) => {

        /* if(cost > remaining) {
            alert("The value cannot exceed remaining funds  "+currency+remaining);
            return;
        } */
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });

    };

    return (
        <div>
            <div className='alert alert-primary'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <select className="custom-select" id="inputGroupSelect03" onChange={(event) => changeCurrency(event.target.value)}>
                        <option value="£" name="Pound">£ Pound</option>
                        <option value="$" name="Dollar">$ Dollar</option>
                        <option value="€" name="Euro">€ Euro</option>
                        <option value="₹" name="Ruppee">₹ Ruppee</option>
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

export default Currency;








