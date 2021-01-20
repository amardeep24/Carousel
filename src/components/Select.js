import React, { useState } from "react";
import { SelectContainer } from "./Styled";

export default function Select({ change, options }) {
    const [selected, setSelected] = useState(options[0]);
    const handleChange = ({ target: { value } }) => {
        setSelected(value);
        change(value);
    }
    return (
        <SelectContainer value={selected} onChange={handleChange}>
            {options.map(option => <option value={option.value}>{option.label}</option>)}
        </SelectContainer>
    );
}
