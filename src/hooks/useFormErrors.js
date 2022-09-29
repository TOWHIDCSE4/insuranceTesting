import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {LOADING_STATUS} from '../ultis/constant';

function useFormErrors(form) {
  const {loading, errors} = useSelector((state) => state.loading);

  useEffect(() => {
    if (loading === LOADING_STATUS.failed && errors.length > 0) {
      let fieldErrors = []
      errors.map((value) => {
        return fieldErrors.push({ name: value.field, errors: [value.message] })
      })
      form.setFields(fieldErrors);
    }
  }, [errors])
}

export default useFormErrors
