import React from 'react';
import './button.component.class.css';

export interface IClassButtonProps {
    buttonText: string;
}

interface IClassButtonState {
    buttonText: string;
}
 
export default class ButtonComponentClass extends React.Component<IClassButtonProps, IClassButtonState> {
    private button: HTMLElement | null = null;

    constructor(props: IClassButtonProps) {
        super(props);

        this.state = {
            buttonText: props.buttonText
        }
    }

     // react to an event
    handleEvent() {
        alert("Clicked the class component button");
    }

    /**
     * Component did mount is fired once the component is available in the DOM.
     * This allows for operations that manipulate the DOM, for instance, adding an
     * event listener, to be fired when the element is available.
     * 
     * optional
     */
    componentDidMount() {
        this.button = document.getElementById('class-button');

        if (this.button !== null) {
            debugger;
            this.button.addEventListener('click', this.handleEvent);
        }
    }

    /**
     * shouldComponentUpdate is fired on every render and receives the latest props.
     * 
     * By default this method is no-op that returns true
     * 
     * This method provides a potential performance increase by checking if the props have changed before 
     * the render cycle starts and skipping render for this component if they haven't.
     * 
     * When returning true, the logic in componentDidUpdate will be called
     * 
     * optional
     * 
     * @param nextProps 
     * @returns boolean
     */
    shouldComponentUpdate(nextProps: IClassButtonProps) {
        if (this.state.buttonText !== nextProps.buttonText) {
            debugger;
            return true;
        }
        return false;
    }

    /**
     * componentDidUpdate will fire on every render if the shouldComponentUpdate method is omitted
     * 
     * When fired, logic here can be used to update the components internal state with the latest
     * data from the new props.
     * 
     * optional
     * 
     */
    componentDidUpdate() {
        debugger;
        this.setState({
            ...this.state,
            buttonText: this.props.buttonText
        })  
    }

    /**
     * componentWillUnmount is called when the component is about to be removed from the DOM
     * (onDestoy in angularJS terms)
     * 
     * An example of using this method would be to clear up an event listener to aovid memory leaks
     * 
     * optional
     */
    componentWillUnmount() {
        if (this.button !== null) {
            debugger;
            this.button.removeEventListener('click', this.handleEvent);
        }
    }

    /**
     * render is only method REQUIRED in a class component. It is this method that returns
     * the markup to be added to the DOM
     * 
     * required
     * 
     */
    render() {
        return (
            <div className="example-class-button" id="class-button">{this.state.buttonText}</div>
        );
    }
}