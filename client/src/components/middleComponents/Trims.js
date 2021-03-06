import React, { Component } from 'react'
import ButtonGrid from './ButtonGrid'
import TrimButton from './buttons/TrimButton'

class Trims extends Component {

    constructor(props) {
        super(props)

        this.fetchSpecs = this.fetchSpecs.bind(this)

        if(
            // If the user deep linked to the trims for a vehicle,
            // go get the models, years and trims.
            !this.props.trims.received
            && this.props.makes.received // makes need to load before fetch.

        ) {
            let trimUrl = [
                '/api',
                this.props.params.make,
                this.props.params.model,
                this.props.params.year
            ].join('/')

            this.props.fetchActions.fetchModels(this.props.params.make)
            this.props.fetchActions.fetchYears(this.props.params.model)
            this.props.fetchActions.fetchTrims(trimUrl)

        }
    }

    fetchSpecs(event) {
        let trimId = event.target.value   
        let specsUrl = '/api/' + trimId
        this.props.fetchActions.fetchSpecs(specsUrl)
    }

    render() {
        return(
            <ButtonGrid>
                {
                    this.props.trims.trims.map((trim) => {
                        return <TrimButton
                                    key={trim.id}
                                    trim={trim}
                                    params={this.props.params}
                                    fetchSpecs={this.fetchSpecs}
                                />
                    })
                }
            </ButtonGrid>
        )
    }
}

export default Trims