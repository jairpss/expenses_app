import React, {useState, useEffect} from 'react'
import {FilterContainer, Form, Input, BigInput, ButtonContainer} from './../elements/FormElements'
import {Button} from './../elements/Button'
import SelectCategory from './SelectCategory'
import {ReactComponent as PlusIcon} from './../images/plus.svg'
import DatePicker from './DatePicker'
import fromUnixTime from 'date-fns/fromUnixTime'
import getUnixTime from 'date-fns/getUnixTime'
import addExpense from './../firebase/addExpense'
import {useAuth} from './../context/AuthContext'
import Alert from './../elements/Alert'
import {useNavigate} from 'react-router-dom'
import editExpense from '../firebase/editExpense'

const ExpenseForm = ({expense}) => {
    const [inputDescription, setInputDescription] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [category, setCategory] = useState('home')
    const [date, setDate] = useState(new Date())
    const [alertState, setAlertState] = useState(false)
    const [alert, setAlert] = useState({})

    const {user} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        //check if there's an expense, if so, we set the state w/ expense values
        if(expense){
            //check if the expense is from current user, check the saved uid
            if(expense.data().uidUser === user.uid){
                setCategory(expense.data().category)
                setDate(fromUnixTime(expense.data().date))
                setInputDescription(expense.data().description)
                setInputAmount(expense.data().amount)
            } else {
                navigate('/list')
            }
        }
    }, [expense, user, navigate])

    const handleChange = (e) => {
        if(e.target.name === 'description'){
            setInputDescription(e.target.value)
        } else if (e.target.name === 'amount'){
            setInputAmount(e.target.value.replace(/[^0-9.]/g, ''))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //add to the amount two decimals after point
        let amount = parseFloat(inputAmount).toFixed(2)

        //check the fields are not empty
        if(inputDescription !== '' && inputAmount !== ''){
            if(amount) {
                if(expense){
                    editExpense({
                        id: expense.id,
                        category: category,
                        description: inputDescription,
                        amount: inputAmount,
                        date:getUnixTime(date),
                    }).then(() => {
                        navigate('/list')
                    }).catch((error) => {
                        console.log(error)
                    })
                } else {
                    addExpense({
                        category: category,
                        description: inputDescription,
                        amount: inputAmount,
                        date:getUnixTime(date),
                        uidUser: user.uid
                    })
                    .then(() => {
                        setCategory('home')
                        setInputDescription('')
                        setInputAmount('')
                        setDate(new Date())
    
                        setAlertState(true)
                        setAlert({type: 'success', message: 'The expense was added successfully.'})
                    })
                    .catch((error) => {
                        setAlertState(true)
                        setAlert({type: 'error', message: 'There was a problem trying to add the expense.'})
                    })
                }

                
            } else {
                setAlertState(true)
                setAlert({type: 'error', message: 'The value is incorrect.'})
            }
            
        } else {
            setAlertState(true)
            setAlert({type: 'error', message: 'Please fill all the fields.'})
        }
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <FilterContainer>
                <SelectCategory category={category} setCategory={setCategory}/>
                <DatePicker date={date} setDate={setDate}/>
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
                    {expense ? 'Edit Expense' : 'Add Expense'} <PlusIcon />
                </Button>
            </ButtonContainer>
            <Alert 
                type={alert.type} 
                message={alert.message}
                alertState={alertState}
                setAlertState={alertState}
            />
        </Form>
     );
}
 
export default ExpenseForm;