import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Box, Button, TextField, IconButton } from '@mui/material/';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { ChoresSelect } from '../ChoresSelect';
import { fetchData } from '../../utils/fetchData';

type Category = {
    _id: string,
    name: string;
    category: string,
    user: string,
}

const KEY = 'category' as const;

const AddChore = () => {
    const [value, setValue] = useState('');
    const [chores, setChores] = useState<{}[]>([]);
    const [categoriesList, setCategoriesList] = useState<any[]>([]);
    const [error, setErrors] = useState(false);
    const nameInput = useRef(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const validateInput = (typedValues: { name: string, category: string }, fetchedData: []) => {
        if (Object.values(typedValues).some((val) => val !== '')) return;

        const { name: typedName, category: typedCategory } = typedValues;
        return fetchedData.some(({ name, category }) => name === typedName && category === typedCategory);
    }


    useEffect(() => {
        (async function () {
            let chores = await fetchData('chores');
            const categories = chores.map((entry: Category) => {
                return entry[KEY];
            });

            setCategoriesList(categories);
        })();
    }, [])

    const handleChoreAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
        (async function () {
            let chores = await fetchData('chores');
            console.log(validateInput({
                name: 'Dishwash', category: 'Kitchen'
            }, chores));

            // if !validateInput() return;
            // const validateInput = () => {

        })();
    };



    return (
        <Box component="form" noValidate
            autoComplete="off" sx={{ display: 'flex', alignItems: 'center' }}>

            <TextField inputRef={nameInput} error={error} helperText={error ? 'Something is wrong, please try again' : ''} id="outlined-basic" name={'name'} label="Name" variant="outlined" />

            <ChoresSelect list={categoriesList} />
            <Button onClick={handleChoreAdd}
                variant="outlined" size="large" sx={{ margin: '8px' }}>
                Add chore
                <IconButton
                    aria-label="toggle chore visibility"
                    //   onMouseDown={}
                    edge="end"
                >
                    {value !== '' ? <AddTaskOutlinedIcon color={'secondary'} /> :
                        <AddTaskOutlinedIcon color={'disabled'} />}
                </IconButton>
            </Button>
        </Box>
    );
};

export { AddChore };