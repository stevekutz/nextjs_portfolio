import React, {Component} from 'react'
import BaseLayout from '../component/Layout/BaseLayout'

class Portfolio extends Component {

    render() {

        const {myAppProps} = this.props

        return (
            <BaseLayout>
                <p className = "customClassFromSCSS" > Portfolio Page with global style passed in</p>
                <p>{myAppProps}</p>
            </BaseLayout>
        )
    }

}

export default Portfolio