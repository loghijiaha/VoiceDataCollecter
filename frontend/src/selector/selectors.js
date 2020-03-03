import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';

// import Radio from './radioButton/radioButton.js';

require ('./selectors.scss');


class Selector extends Component {

    render() {
      var names = ['Elderly', 'Bank'];
      var namesSinhala=['වැඩිහිටි සුරැකුම් ක්ෂේත්‍රය','බැංකු ක්ෂේත්‍රය']
      var radioButtons=[];
      // var namesListSinhala = namesSinhala.map(function(name,index){});
      var namesList = namesSinhala.map(function(name,index){
      radioButtons.push(
      <ReversedRadioButton
      value={names[index]} key={index}
      pointColor={'#1E90FF'} 
      rootColor={'black'}
      padding={10}
      >
      {name}
      </ReversedRadioButton>);
      // {['වැඩිහිටි සුරැකුම් ක්ෂේත්‍රය','බැංකු ක්ෂේත්‍රය'][{index}]}
      });

      return (
        <div className="selector" >

        <h4>හඬ පටිගත කිරීම සඳහා ක්ෂේත්‍රයක්(domain)තෝරන්න</h4>
        <p>මෙම ව්‍යාපෘතිය සදහා අප තෝරාගත් ක්ෂේත්‍ර වනුයේ  "බැංකු ක්ෂේත්‍රය " සහ "වැඩිහිටි සුරැකුම්"  ක්ෂේත්‍රයය් (domain). ඔබට හඬ පටිගත කිරීම සඳහා මින් ඕනෑම ක්ෂේත්‍රයක් තෝරාගත හැක. ඔබට ක්ෂේත්‍ර දෙකෙන්ම හඬ පටිගත කල හැකිනම් එය මහත් උපකාරයකි.</p>
        <RadioGroup 
          onChange={ this.props.handleDomainChanges} 
          horizontal
        >
        {radioButtons}
        </RadioGroup>
        </div>
      );
    }
  }

  export default Selector;