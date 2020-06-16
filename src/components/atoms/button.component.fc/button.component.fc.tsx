import React, { useEffect } from 'react';
import './button.component.fc.css';

export interface IFCButtonProps {
    buttonText: string;
}

// A simple example of a function component using React hooks

export const TestFunctionComponent = (props: IFCButtonProps) => {

    // react to an event
    const handleEvent = () => {
        alert("Clicked the function component button");
    }   

    /**
     * This effect is remembered and then fired once the component 
     * is mounted in the DOM making it useful for operations that require the DOM
     * to be available, such as adding event listeners. */

    useEffect(() => {
        const thisButton = document.getElementById('fc-button');

        if (thisButton !== null) {
            debugger;
            thisButton.addEventListener('click', handleEvent);
        }

        // Returning a clean up function here to be called when the component is unmounting
        return (() => {
            if (thisButton !== null) {
                debugger;
                thisButton.removeEventListener('click', handleEvent);
            }
        });
    });
     
    /* In this example we are simply adding an event listener to the div on mounting of the component
     * and returning a clean up function to remove the event listener when the component is 
     * unmounted.
     * 
     * This works in a similar way to componentDidMount and componentWillUnmout in a class component, however,
     * UseEffect is called on every render of the component including the first.
     * 
     * In the example above this would mean that the event listener is removed and reinstatiated with each render, 
     * ensuring no leftover event listeners exist and therefore reducing the chances of a memory leak.
     * 
     * It is possible to have useEffect fire only once (first render/unmount). To do this you can
     * pass an empty array at the end of the useEffect function call.
     * 
     * IE
     * 
     * useEffect(() => {
     *  // do stuff here...
     * 
     *   return (() => cleanUp);
     * },[]);
     * 
     * */

    return (
    <div className="example-fc-button" id="fc-button">{props.buttonText}</div>
    );

}