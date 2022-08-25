import { AddChore } from "../../components/AddChore";
import { Typography } from "@mui/material";

const Panel = () => {
    return (
        <>
            <Typography variant="h1" marginBottom="2rem">
                Dashboard
            </Typography>
            <AddChore />
        </>
    );
};

export { Panel };