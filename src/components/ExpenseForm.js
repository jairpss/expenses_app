import React, {useState} from 'react'
import {FilterContainer, Form, Input, BigInput, ButtonContainer} from './../elements/FormElements'
import Button from './../elements/Button'
import {ReactComponent as PlusIcon} from './../images/plus.svg'

const ExpenseForm = () => {
    const [inputDescription, setInputDescription] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    
    const handleChange = (e) => {
        if(e.target.name === 'description'){
            setInputDescription(e.target.value)
        } else if (e.target.name === 'amount'){
            setInputAmount(e.target.value.replace(/[^0-9.]/g, ''))
        }
    }

    return ( 
        <Form>
            <FilterContainer>
                <p>Select</p>
                <p>Date Picker</p>
            </FilterContainer>

            
            <Input 
                type="text" 
                name="description" 
                id="description" 
                placeholder="Description"
                value={inputDescription}
                onChange={handleChange}
            />
            <BigInput 
                type="text" 
                name="amount" 
                id="amount" 
                placeholder="$0.00"
                value={inputAmount}
                onChange={handleChange}
            />
            
            <ButtonContainer>
                <Button as="button" primary withIcon type="submit">
                    Add Expense <PlusIcon />
                </Button>
            </ButtonContainer>
        </Form>
     );
}
 
export default ExpenseForm;