import React, { Component, Fragment } from 'react';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import {TestForm} from './components/form/form';

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    insertionPoint: 'insertion-point-jss'
});

export default class App extends Component {
    state = {
        isSubmitting: false
    };

    form = React.createRef();

    render() {
        return (
          <JssProvider jss={jss} generateClassName={generateClassName}>
              <Fragment>
                  <TestForm ref={this.form} />
              </Fragment>
          </JssProvider>
        );
    }
}
