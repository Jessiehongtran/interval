import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      intervals: [[205, 220], [210, 230], [240, 260], [250, 300], [225, 310]]
    }
  }

  render(){

    const { intervals } = this.state;

    let newIntervals = []
    let pre = null
    for (let i = 0; i < intervals.length; i++){
      if (pre === null || intervals[i][0] <= pre[1]){
        newIntervals.push([intervals[i]])
      } else if (intervals[i][0] > pre[1]){
        newIntervals[newIntervals.length -1].push(intervals[i])
      } 
      pre = intervals[i]
    }

    console.log('newIntervals', newIntervals)

    return (
      <div className="App">
        { newIntervals.length > 0
        ? newIntervals.map((row, ind) => 
        <div
          style={{ display: 'flex' }}
        >
          {row.map(interval => 
            <div 
              style={{ 
                backgroundColor: 'silver', 
                height: '50px', 
                marginRight: '10px', 
                marginTop: '10px',
                paddingRight: '10px',
                paddingLeft: '10px',
                display: 'flex',
                position: 'absolute',
                left: 100 + (interval[0] - 205)*10 + 'px',
                top: 50 + 50*ind + 20*(1+ ind) + 'px',
                marginBottom: '10px',
                justifyContent: 'space-between',
                width: (interval[1] - interval[0])*10 + 'px',
                borderRadius: '40px'
              }}
                
            >
              <p>{interval[0]}</p>
              <p>{interval[1]}</p>
            </div>)}
        </div>)
        : null}
      </div>
    );
  }
}

export default App;
