import React, { Component } from 'react';
import ReactScrollableList from 'react-scrollable-list';
import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
// import Textarea from "react-textarea-autosize";


class TextArea extends Component {
   /* constructor(props) {
        super(props);
        this.shuffle = this.shuffle.bind(this);
        this.changeTheOrderOfCommands = this.changeTheOrderOfCommands.bind(this);
    }

    /!**
     * Shuffle the order of commands that are shown
     * @param a
     * @returns {*}
     *!/
    shuffle(a) {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a ;
    }

    /!**
     * change the order of the commands
     * @param fixedCommands
     * @returns {Array}
     *!/
    changeTheOrderOfCommands(fixedCommands){
        const numbers=Array.from(Array(fixedCommands.length).keys());
        const shuffledNumbers = this.shuffle(numbers);
        let orderedCommands=[];
        for(let i=0; i<fixedCommands.length; i++){
            // push the component to orderedCommands!
            orderedCommands.push(fixedCommands[shuffledNumbers[i]]);
        }
        return [orderedCommands,shuffledNumbers] ;

    }*/


    render() {
        /*let listItems = []
        let shuffledNumbers=[];
        let commands = [];
        let fixedCommands = [];
        var radioButtons=[];
        switch(this.props.domain){
            case "Bank":
                switch(this.props.capability) {
                    case "0":
                        fixedCommands = ['මට නව ගිණුමක් විවෘත කරන්න ඕනි',
                        'මට අලුත් ගිණුමක් විවෘත කරන්න ඕනි',
                        'Account එකක් open කරන්න ඕනි',
                        'අලුත් Account එකක් open කරන්න ඕනි',
                        'ගිණුමක් විවෘත කරන්න ඕනි'
                        ];
                        var output=this.changeTheOrderOfCommands(fixedCommands);
                        commands= output[0];
                        shuffledNumbers=output[1];
                        console.log("ryru"+shuffledNumbers);
                        break;
                    case "1":
                        fixedCommands = ['ඉතිරීකිරීමේ ගිණුමක්',
                        'ඉතිරීකිරීමේ ගිණුමක් විවෘත කරන්න ඕනි',
                        'මට ඕන ඉතිරිකිරීමේ ගිණුමක් '
                        ];
                        var output=this.changeTheOrderOfCommands(fixedCommands);
                        commands= output[0];
                        shuffledNumbers=output[1];
                        console.log("ryru"+shuffledNumbers);
                        break;
                    case "2":
                        fixedCommands = ['ස්ථාවර තැන්පතුවක්',
                        'ස්ථාවර තැන්පතුවක් විවෘත කරන්න ඕනි',
                        'මට ඕන ස්ථාවර තැන්පතුවක්'
                        ];
                        var output=this.changeTheOrderOfCommands(fixedCommands);
                        commands= output[0];
                        shuffledNumbers=output[1];
                        break;
                    case "3":
                        fixedCommands = ['සාමානය ඉතුරුම් ගිණුම',
                        'කාන්තා ඉතුරුම් ගිණුම',
                        'යොවුන් ඉතුරුම් ගිණුම',
                        'ජේයෂ්ට පුරවැසි ඉතුරුම් ගිණුම'
                        ];
                        var output=this.changeTheOrderOfCommands(fixedCommands);
                        commands= output[0];
                        shuffledNumbers=output[1];
                        break;
                    case "4":
                        fixedCommands = ['රුපියල් පන්සීයයි',
                        'රුපියල් දාහයි',
                        'රුපියල්  දෙදාහයි',
                        'රුපියල් පන්දාහයි',
                        'පන්සීයයි',
                        'දාහයි',
                        'දෙදාහයි',
                            'පන්දාහයි'
                        ];
                        var output=this.changeTheOrderOfCommands(fixedCommands);
                        commands= output[0];
                        shuffledNumbers=output[1];
                        break;
                    case "5":
                        fixedCommands = ['එක',
                        'දෙක',
                        'තුන',
                        'හතර'
                        ];
                        var output=this.changeTheOrderOfCommands(fixedCommands);
                        commands= output[0];
                        shuffledNumbers=output[1];
                        break;
                    default:
                        commands = [];
                        break;
                    }
                break;
            case "Elderly":
                switch(this.props.capability) {
                    case "0":
                        commands = ['ලයිට් එක දාන්න',
                        'මට එලිය ඕනි',
                        'අදුරුයි',
                        'ලයිට් එක ON කරන්න'
                        ];
                        break;
                    case "1":
                        commands = ['ලයිට් එක නිවන්න',
                        'මට එලිය එපා',
                        'එලිය වැඩියි',
                        'ලයිට් එක OFF කරන්න'
                        ];
                        break;
                    case "2":
                        commands = ['කවුරුත් නැද්ද',
                        'කාටවත් ඇහෙන්නෙ නැද්ද',
                        'මට අමාරුයි කාටවත් ඇහෙන්නෙ නැද්ද',
                        'මට අමාරුයි කවුරුත් නැද්ද'
                        ];
                        break;
                    case "3":
                        commands = ['119 ට ඇමතුමක් ගන්න',
                        '119 ට call එකක් ගන්න',
                        'මට අමාරුයි කාටවත් ඇහෙන්නෙ නැද්ද',
                        'මට අමාරුයි කවුරුත් නැද්ද',
                        'ඇම්බියුලන්ස් එකකට කතා කරන්න',
                        'ගිලන් රථයකට කතා කරන්න',
                        'ගිලන් රථයකට call කරන්න'
                        ];
                        break;
                    case "4":
                        commands = ['දැන් වේලාව කීයද',
                        'මට දැන් වෙලාව කියන්න',
                        'දැන් වෙලාව කීය විතර වෙලා ඇතිද',
                        'වේලාව කීයද'
                        ];
                        break;
                    }
                    
                break;

        }*/
        let commands = this.props.fixedCommandsToTxtArea;
        var radioButtons=[];
        var commandsList = commands.map(function(name,index){
            radioButtons.push(
                <ReversedRadioButton
                    value={index.toString()} key={index}
                    // value={index.toString()} key={index}
                    pointColor={'#1E90FF'}
                    rootColor={'black'}>
                    {name}
                </ReversedRadioButton>);
        });


        var divStyle ={
            overflow: 'auto',
            height: 300,
            width: 'auto',
            display: 'block',
            margin: 'auto',
        } ;

        return (

            <div style={divStyle }>
                <RadioGroup
                    //onChange={ this.props.handleCommandChanges}
                    onChange={this.props.handleCommandChanges}
                    value = {this.props.command}
                >
                    {radioButtons}
                </RadioGroup>
            </div>
        );
    }
  }

  export default TextArea;