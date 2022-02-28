import React from 'react'
import PropTypes from 'prop-types'
import {
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm
} from 'react-icons/wi'
import { IconContext } from 'react-icons/lib'

export const validValues = [
    "clouds",
    "sunny",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm"
]

const stateByName = {
    clouds: WiDayCloudy,
    sunny: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm
}

const IconState = ({ state, value }) => {
    const StateByName = stateByName[state]
    return (
        <IconContext.Provider value={{ size: value }}>
            <StateByName />
        </IconContext.Provider>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
    value: PropTypes.string.isRequired,
}

export default IconState