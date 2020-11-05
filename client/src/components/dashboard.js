import {useState, useEffect} from 'react';
import {apiClient} from '../services/ApiClient';

const initialState = {
  status: 'idle', // can be 'idle', 'loading', 'success', 'error'
  options: {
    tools: []
  },
  error: null
}

export const Dashboard = () => {
  const [state , setState] = useState(initialState)

  const {status, options, error} = state;


  useEffect(() => {
    if (options.tools?.length) return

    setState(({status, options, error}) => ({status: 'loading', options, error}));
      apiClient('default/tools',{}).then(
        data => {
          setState(({status, options, error}) => ({status: 'success', options: {tools: data}, error: null}));
          console.log(options)

        }, error =>  {
          setState(({status, options, error}) => ({status: 'error', options, error: error}));
          console.log(error)
        }
      )
  }, [state])

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';
  return (
    <>
      <div>{state.status}</div>
      <div>{isSuccess ? options.tools.map(tool => <div>{tool}</div>) : isError ? 'Error while retrieving options' : isLoading ? 'Loading Data' : null}</div>
    </>
  );
}