import React from 'react';
import { useState } from 'react';
import { InputAdornment, FormControl, InputLabel, FilledInput, IconButton } from '@mui/material/';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

const AddChore = () => {
    const [value, setValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handleAddChoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // window.localStorage.setItem("data", JSON.stringify(data))
    }

    return (
        <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-chore">Dodaj sprawunek</InputLabel>
                <FilledInput
                    id="filled-adornment-chore"
                    type={'text'}
                    value={value}
                    onChange={handleInputChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle chore visibility"
                                //   onClick={}
                                //   onMouseDown={}
                                edge="end"
                            >
                                {value !== '' ? <AddTaskOutlinedIcon color={'secondary'} /> :
                                    <AddTaskOutlinedIcon color={'disabled'} />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

        </div>
    );
};

export { AddChore };