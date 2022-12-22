import React from 'react'
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

function JornadasPage() {
    return (
        <>
            <Pagination
                count={12}
                defaultPage={6}
                boundaryCount={2}
                color="primary"
            />
        </>
    )
}

export default JornadasPage
