import React from 'react';

import Homepage from '../../components/Homepage/Homepage';
import Homepage1 from '../../components/Homepage/Homepage1';
import Homepage2 from '../../components/Homepage/Homepage2';

export default class Home extends React.Component {
    state = {
        isFiltered: false
    }

    render() {
        return (
            <div className='homepage'>
                <Homepage />
                {
                    !this.state.isFiltered?
                        <Homepage1 />
                        :
                        <Homepage2 />
                }
            </div>
        );
    }
}