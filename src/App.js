import React, { Component, Fragment } from 'react';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import {TestForm} from './components/form/form';
import {SubmitButtons} from './components/submit-buttons/submit-buttons';
import {getServerResponse} from './services/helpers';

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

    componentDidMount() {
        console.log('Initialized with ', this.form.current.getModel());
    }

    changeIsSubmitting = isSubmitting => {
        this.setState({isSubmitting});
    };

    submit = () => {
        this.form.current.submit();
    };

    submitWithoutValidation = async () => {
        this.changeIsSubmitting(true);

        const response = await getServerResponse(this.form.current.getModel());
        console.log('Submitted with ', response);

        this.changeIsSubmitting(false);
    };

    render() {
        return (
          <JssProvider jss={jss} generateClassName={generateClassName}>
              <Fragment>
                  <SubmitButtons
                    isSubmitting={this.state.isSubmitting}
                    onSubmit={this.submit}
                    onSubmitWithoutValidation={this.submitWithoutValidation}
                  />

                  <TestForm ref={this.form} changeIsSubmitting={this.changeIsSubmitting} />
              </Fragment>
          </JssProvider>
        );
    }
}
