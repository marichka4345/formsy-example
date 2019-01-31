import React from 'react';
import Formsy from 'formsy-react';
import {renderControls} from './services/control-factory';
import {getServerError, getServerResponse} from '../../services/helpers';
import {TEXT1} from '../../constants/form-fields';
import styles from './form.module.css';

const renderError = error => (
  error &&
  <div className={styles.error}>{error}</div>
);

export const TestForm = React.forwardRef(({changeIsSubmitting}, ref) => {

    const onValidSubmit = async (data, resetForm, invalidateForm) => {
        changeIsSubmitting(true);

        if (data[TEXT1] !== 'sun') {
            const {errors} = await getServerError([TEXT1]);
            invalidateForm(errors);
            console.log('Got error ', errors);
            changeIsSubmitting(false);
            return;
        }

        const response = await getServerResponse(data);
        console.log('Submitted with ', response);
        changeIsSubmitting(false);
    };

    return (
      <Formsy
        ref={ref}
        onValidSubmit={onValidSubmit}
      >
          <div className={styles.fields}>
            {renderControls(renderError)}
          </div>
      </Formsy>
    );

});
