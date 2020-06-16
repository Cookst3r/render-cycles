import React from 'react';
import { TestFunctionComponent } from './components/atoms/button.component.fc/button.component.fc';
import TestClassComponent from './components/atoms/button.component.class/button.component.class';
import './App.css';

interface IAppProps {}

interface IAppState {
  [key: string]: any;
  showFCButton: boolean;
  classButtonText: string;
  showClassButton: boolean;
  fcButtonText: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    
    this.state = {
      showClassButton: true,
      classButtonText: "Click Me!",
      showFCButton: true, 
      fcButtonText: "Click Me!"
    }
  }

  changeState(type: string, value: any) {
    this.setState({
      ...this.state,
      [type]: value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="example-wrapper">
          <h1>Open the dev tools</h1>
          <div className="event-wrapper">
            <div className="column">
              <div className="column__header">Class Component Example</div>
              {this.state.showClassButton && <TestClassComponent buttonText={this.state.classButtonText} />}
              <div className="remove-button" onClick={() => this.changeState('showClassButton', !this.state.showClassButton)}>
                {this.state.showClassButton ? (<>Hide class based button (show componentWillUnmount firing)</>) : (<>Reset (show componentDidMount firing)</>)} 
              </div>
              <div className="change-button-text" onClick={() => this.changeState('classButtonText', Math.random().toFixed(2))}>
                Change button text (show shouldComponentUpdate &amp; componentDidUpdate firing)
              </div>
              <p>shouldComponentUpdate will fire on every render.<br/>componentDidUpdate will be fired only if the props have changed</p>
            </div>
            <div className="column">
              <div className="column__header">Function Component Example</div>
              {this.state.showFCButton && <TestFunctionComponent buttonText={this.state.fcButtonText} />}
              <div className="remove-button" onClick={() => this.changeState('showFCButton', !this.state.showFCButton)}>
                {this.state.showFCButton ? (<>Hide FC based button (show useEffect clean up function firing)</>) : (<>Reset (UseEffect will fire just once)</>)} 
              </div>
              <div className="change-button-text" onClick={() => this.changeState('fcButtonText', Math.random().toFixed(2))}>
                Change button text (show useEffect firing on every render)
              </div>
              <p>UseEffect will fire on every render.<br />First you will see the clean up function, followed by the main function firing again to re-attach the event listener</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
