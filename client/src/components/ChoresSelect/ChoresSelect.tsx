import { useState } from 'react';
import { Select } from '@mui/material';
import { FormControl, InputLabel, MenuItem } from '@mui/material/';

type SelectList = {
    list: string[],
}

const ChoresSelect = ({ list }: SelectList) => {


    // 1. validation stage: is anything written to "Name" field and selected in "Category"

    // 2. validation stage: are those fields already in database


    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={''}
                name={'category'}
                // onChange={(e) => setCategory(e.target.value)}
                label="Category"

            >
                {list.map((category: string) => {
                    return <MenuItem key={category} value={category}>{category}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export { ChoresSelect };