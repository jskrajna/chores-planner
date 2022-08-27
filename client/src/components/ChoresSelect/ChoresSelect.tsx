import { useState } from 'react';
import { Select } from '@mui/material';
import { FormControl, InputLabel, MenuItem } from '@mui/material/';
import { CategoryType } from '../AddChore';

const ChoresSelect = ({ list }: any) => {
    const [category, setCategory] = useState('');


    // 1. validation stage: is anything written to "Name" field and selected in "Category"

    // 2. validation stage: are those fields already in database


    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                name={'category'}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"

            >
                {list.map(({ _id, name }: CategoryType) => {
                    return <MenuItem key={name} value={name}>{name}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export { ChoresSelect };