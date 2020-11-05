import {useState, useEffect} from 'react';
import {apiClient} from '../services/ApiClient';

const initialState = {
  status: 'idle', // can be 'idle', 'loading', 'success', 'error'
  options: {
    tools: []
  },
  error: null
}
const initialConfig = {
  tools: [],
  enableZoom: true // default setting
}

export const Dashboard = () => {
  const [state , setState] = useState(initialState)
  const [newConfig, setNewConfig] = useState(initialConfig)
  const {status, options, error} = state;


  useEffect(() => {
    if (options.tools?.length) return
    setState(({status, options, error}) => ({status: 'loading', options, error}));
      apiClient('default/tools',{}).then(
        data => {
          setState(({status, options, error}) => ({status: 'success', options: {tools: data}, error: null}));
        }, error =>  {
          setState(({status, options, error}) => ({status: 'error', options, error: error}));
        }
      )
  }, [state])

  const handleConfigSave = (event) => {
    event.preventDefault();
    alert('saved');
  }

  const handleZoomChange = (event) => {
    console.log(event.target.checked);
    setNewConfig(({tools, enableZoom})=>({tools, enableZoom: !enableZoom}))
  }

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  const tools = options.tools.map(tool => <option value={tool}>{tool}</option>)
  return (
    <>
    {
      isLoading
        ? <div>Loading Data ... </div>
        : isError
          ? <div>Error while loading data</div>
          : isSuccess
            ? <form onSubmit={handleConfigSave}>
                <div>
                  <label htmlFor="tools">Please select your UI Tools</label>
                </div>
                <div>
                  <select name="tools" id="tools" multiple>
                    {tools}
                  </select>
                </div>
                <div>
                  <label htmlFor="enableZoom">Enable Zoom function?</label>
                  <input type="checkbox" name="enableZoom" id="enableZoom" checked={newConfig.enableZoom} onChange={handleZoomChange}></input>
                </div>
                <div>
                  <button className="form-save" type="submit">Save</button>
                </div>
              </form>
            : <div>unhandled exception</div>
    }
    </>
  );
}