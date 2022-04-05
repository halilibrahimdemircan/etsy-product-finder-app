import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { InputGroup, InputGroupText, Input, Form, Button } from 'reactstrap';

const FilterInput = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);
    // const handleInputChange = (e) => {
    //     e.preventDefault();
    //     console.log(e.target);


    // }

    const handleSubmit = (e) => {
        let searchTerm = inputRef.current.value;
        e.preventDefault();
        console.log(searchTerm, 'searchTerm');
        // console.log(searchTerm, 'searchTerm');
    }





    return (
        <div>

            <InputGroup style={{ margin: "3rem" }}>
                <InputGroupText style={{ marginRight: "1rem" }}>
                    Type Your Keyword
                </InputGroupText>
                <Input innerRef={inputRef} style={{ width: "20rem" }} />
                <Button onClick={handleSubmit} style={{ marginLeft: "1rem" }}>Search</Button>
            </InputGroup>

        </div>
    )
}

export default FilterInput