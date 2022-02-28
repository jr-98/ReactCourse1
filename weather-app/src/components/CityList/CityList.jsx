import { Grid, List, ListItem } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

//REnderCityAndCOuntry sera una funcion que retorne otra funcion
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry
    return (
        <ListItem
            button
            key={city}
            onClick={eventOnClickCity}>
            <Grid container
                direction='row'
                alignContent='center'
                alignItems='center'>
                <Grid item
                    xs={6}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    xs={6}>
                    <Weather temperature={12} state='sunny' />
                </Grid>
            </Grid>
        </ListItem>
    );
}
//Recibe vomo entrada un array
const CityList = ({ cities, onClickCity }) => {
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </List>
    );
}

CityList.propTypes = {
    cities: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }),
    onClickCity: PropTypes.func.isRequired,

}

export default CityList