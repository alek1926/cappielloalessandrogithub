import React from 'react'; 
import Dropdown from 'react-bootstrap/Dropdown';

export const MenuClassi = () => {
    return (
        <div className="MenuClassi">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Seleziona la classe</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">FSD 1°</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">FSD 2°</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">CYBERSEC 1°</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">CYBERSEC 2°</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}