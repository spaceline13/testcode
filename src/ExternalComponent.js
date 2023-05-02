import React from "react"
import * as FEAAS from "@sitecore-feaas/clientside/react"



export function FEAASComponent() {
    const src = window.location.search.match(/feaasSrc=([^&]+)/)?.[1]
    return <FEAAS.Component src={src} />
}


export function MyComponent(props){
    return React.createElement('div', {},
        `Hello my name is
      ${props.test}
      `
    );
}
const schema = {
    title: 'MyComponent',
    description: 'Description of MyComponent.',
    type: 'object',
    required: [ /* any required props */ ],
    properties: {
        /* your component props */
    }
}
console.log('came here??')
FEAAS.External.registerComponent(MyComponent, schema)
