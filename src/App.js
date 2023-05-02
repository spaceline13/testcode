import logo from './logo.svg';
import './App.css';
import * as FEAAS from "@sitecore-feaas/clientside/react"
export function MyComponent(props) {
    return (
        <div className="App">      <header className="App-header">        <img src={logo} className="App-logo" alt="logo" />        <p>          Edit <code>src/App.js</code> and save to reload.
        </p>        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >          Learn React {props.test} name: {props.name}
        </a>      </header>    </div>  );
}
const schema = {
    title: 'A registration form',
    description: 'Description of form.',
    type: 'object',
    required: ['test'],
    properties: {
        test: {
            type: 'string',
            title: 'Test'
        },
        name: {
            type: 'string',
            title: 'FirstName'
        }
    }
}
FEAAS.External.registerComponent(MyComponent, schema)

function App() {
    /* get src from querystring */
    const src = window.location.search.match(/feaasSrc=([^&]+)/)?.[1]
    return (
        /* render component in your React app */
        <FEAAS.Component src={src} />
    )
}

export default App;


