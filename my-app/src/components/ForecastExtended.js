import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ForecastExtended extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
        };
    }

    render() {
        return (
            <div>
                Pronostico extendido para {this.state.city}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}


export default ForecastExtended;