import React from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {debounce} from '../utils/utils';
import SearchIcon from '@material-ui/icons/Search';
import { SearchContainer} from './Styled';

function Search({ search }) {
    return (
        <SearchContainer>
            <Grid container spacing={1} alignItems="center">
                <Grid item>
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        onChange={(e) => debounce(search, e.target.value)()} />
                </Grid>
                <Grid item>
                    <SearchIcon />
                </Grid>
            </Grid>

        </SearchContainer>
    )
}

export default Search

Search.propTypes = {
    search: PropTypes.string
}