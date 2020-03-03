import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './recorder/recorder2.js';
import Selector from './selector/selectors.js';
import TextArea from './textArea/textArea.js';
import {Container,Row,Col} from 'react-grid-system';
import { Provider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
// import Popup from 'react-popup';
// import Dropdown from 'react-dropdown'

// import ReactDOM from 'react-dom';


// import './dropdown.scss';

//drop down
import Dropdown from './dropDown/dropDown.js';
var num = null;


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      command:'0',
      domain:'Bank',
      capability:'0',
      fixedIntentsToDropDown:[],
      gender:'Male',
      age:'22',
      ethnicity: 'Tamil',
      place: 'Jaffna',
      newIntentOrder:null,
      //These lines are newly uncommented ----------------------------------------------------->>>>>>>>>>>>>
      namesListSinhala:['නව බැංකු ගිණුමක් විවෘත කිරීම','බැංකු ගිණුමේ ශේෂය විමසීම'],
      fixedCommandsToTxtArea:[],
      shuffledOrder:[],
    }
    this.shuffle = this.shuffle.bind(this);
    this.changeTheOrderOfCommands = this.changeTheOrderOfCommands.bind(this);
    this.generateTheOrderedCommandList = this.generateTheOrderedCommandList.bind(this);
    // this.handleChanges=this.handleChanges.bind(this);
  }

  componentDidMount() {

    var bankCommands = ['புதிய கணக்கு', 'சேமிப்பு கணக்கு', 'நிலையான வைப்புத் திறப்பு'
      ,'சேமிப்பு கணக்கு வகை','அவர்களின் கணக்கைத் தேர்ந்தெடுப்பது','மீண்டும் முயற்சிக்கிறது','மீண்டும் முயற்சிக்கவில்லை',
      'தகவல் சரியானது','தகவல் தவறானது','உறுதிப்படுத்தல்','வேலையை நிறுத்து','கால எல்லை',
      'முதிர்ச்சியில் வட்டி பெறுதல்','மாதந்தோறும் வட்டி பெறுதல்'];

   
    const numbers=Array.from(Array(bankCommands.length).keys());
    console.log("numbers"+numbers);
    const shuffledNumbers = this.shuffle(numbers);
    console.log("shuffledNumbers"+shuffledNumbers);
    this.setState({
      fixedIntentsToDropDown:bankCommands,
      newIntentOrder:shuffledNumbers.join(),
    })
  }


  handleDomainChanges(e){
    // Popup.alert('I am alert, nice to meet you');
    this.setState({
      domain:e,
      capability:'0'
    })

  }

  /**
   * function to be called when the command is selected
   * @param e
   */
  handleCommandChanges(e){
    console.log(e);
    //alert("selected the command as "+e);
    var command_correct_no=this.state.shuffledOrder[e];
   // alert("The correct command "+command_correct_no);
    this.setState({
      command:command_correct_no
    })
  }

  /**
   *callback function to update which intent is selected
   * @param e
   */
  handleSelectChanges = (e) => {
    this.generateTheOrderedCommandList(e.target.value);
    this.setState({
      capability: e.target.value
    })
  }

  /**
   *callback function to update which intent is selected
   * @param e
   */
  handleAgeChanges = (e) => {
    console.log(e.target.value);
    this.setState({
      age: e.target.value
    })
  }
  
   /**
   *callback function to update which intent is selected
   * @param e
   */
  handleGenderChanges = (e) => {
    console.log(e.target.value);
    this.setState({
      gender: e.target.value
    })
  
  }
  /**
   *callback function to update which intent is selected
   * @param e
   */
  handleEthnicityChanges = (e) => {
    console.log(e.target.value);
    this.setState({
      ethnicity: e.target.value
    })
  
  }
  /**
   *callback function to update which intent is selected
   * @param e
   */
  handleNativePlaceChanges = (e) => {
    console.log(e.target.value);
    this.setState({
      place: e.target.value
    })
  
  }
  /*  handleSelectChanges(e){
      console.log(this.state.command);
      this.setState({
        capability:e.target.value,
        // command : null
      })
      console.log(this.state.command+"after");
    }*/
  //--------------------------------------------------------------------------------------------------------
  /**
   * Shuffle the order of commands that are shown
   * @param a
   * @returns {*}
   */
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

  /**
   * change the order of the commands
   * @param fixedCommands
   * @returns {Array}
   */
  changeTheOrderOfCommands(fixedCommands){
    const numbers=Array.from(Array(fixedCommands.length).keys());
    let shuffledNumbers = this.shuffle(numbers);
    let orderedCommands=[];
    for(let i=0; i<fixedCommands.length; i++){
      // push the component to orderedCommands!
      orderedCommands.push(fixedCommands[shuffledNumbers[i]]);
    }

    if (orderedCommands.length > 7){
      orderedCommands=orderedCommands.slice(0,7);
      shuffledNumbers=shuffledNumbers.slice(0,7);
    }
    return [orderedCommands,shuffledNumbers] ;

  }

  generateTheOrderedCommandList(capability){
    let shuffledNumbers=[];
    let commands = [];
    let fixedCommands = [];
    switch(this.state.domain){
      case "Bank":
        switch(capability) {
          case "0":
            fixedCommands = [
              // 'මට නව ගිණුමක් විවෘත කරන්න ඕන.',
              // 'මට අලුත් ගිණුමක් විවෘත කරන්න ඕන',
              // 'එකව්න්ට් එකක් ඕපන් කරන්න ඕනි',
              // 'අලුත් එකව්න්ට් එකක් ඕපන් කරන්න ඕනි',
              // 'ගිණුමක් විවෘත කරන්න ඕන',
              // 'මට අලුත් එකවුන්ට් එකක් අරින්න ඕන',
              // 'අලුත් එකව්න්ට් එකක් හදන්න',
              // 'එකව්න්ට් එකක් ඕපන් කරන්නේ කොහොමද?',
              // 'අලුත් ගිණුමක් අරින්න'
              'நான் ஒரு புதிய கணக்கைத் திறக்க விரும்புகிறேன்.',
            'நான் ஒரு புதிய கணக்கைத் திறக்க விரும்புகிறேன்',
            'கணக்கைத் திற',
            'புதிய கணக்கைத் திறக்கவும்',
            'கணக்கைத் திற',
            'நான் புதிய கணக்கு திறக்க வேண்டும்',
            'புதிய கணக்கை உருவாக்கு',
            'கணக்கை எவ்வாறு திறப்பது',
            'புதிய கணக்கைத் திற',

            ];
            //updated code----------------------------------------------------->>>>>>>>>>>>
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "1":
            fixedCommands = [
              // 'ඉතිරීකිරීමේ ගිණුමක්',
              // 'ඉතිරීකිරීමේ ගිණුමක් විවෘත කරන්න ඕනි',
              // 'මට ඕන ඉතිරිකිරීමේ ගිණුමක්',
              // 'මට සේවින්ග්ස් එකව්න්ට් එකක් ඕපන් කරන්න ඕන',
              // 'මට අලුත් සේවින්ග්ස් එකව්න්ට් එකක් පටන් ගන්න ඕන',
              // 'මට ඉතිරි කිරීමේ ගිණුමක් අරින්න අවශ්‍යයි',
              // 'ඉතුරුම් ගිණුමක් හදන්න',
              // 'මට සේවින්ග්ස් එකව්න්ට් එකක් ඕපන් කරගන්න ඕන'
              'சேமிப்பு கணக்கு',
            'சேமிப்புக் கணக்கைத் திறக்க வேண்டும்',
            'எனக்கு சேமிப்புக் கணக்கு வேண்டும்',
            'நான் சேமிப்புக் கணக்கைத் திறக்க விரும்புகிறேன்',
            'நான் ஒரு புதிய சேவை சேவையைத் தொடங்க விரும்புகிறேன்',
            'நான் சேமிப்புக் கணக்கைத் திறக்க விரும்புகிறேன்',
            'சேமிப்பு கணக்கை உருவாக்கு',
            'நான் சேமிப்புக் கணக்கைத் திறக்க விரும்புகிறேன்'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "2":
            fixedCommands = [
              // 'ස්ථාවර තැන්පතුවක්',
              // 'ස්ථාවර තැන්පතුවක් විවෘත කරන්න ඕනි.',
              // 'මට ඕන ස්ථාවර තැන්පතුවක්',
              // 'මට ඵෆ්ඩි එකක් ඕපන් කරන්න ඕන',
              // 'මට ඕන ඵෆ්ඩි එකක්',
              // 'මට ස්ථාවර තැන්පතුවක් අරින්න අවශ්‍යයි',
              // 'ස්ථාවර තැන්පතුවක් දාන්න ඕන',
              // 'ඵෆ්ඩි එකක් දාන්න ඕන'
              'நிலையான வைப்பு',
            'ஒரு நிலையான வைப்புத் திறக்க வேண்டும்',
            'எனக்கு ஒரு நிலையான வைப்பு வேண்டும்',
            'நான் ஒரு FD ஐ திறக்க விரும்புகிறேன்',
            'எனக்கு ஒரு ஆஃபி வேண்டும்',
            'நான் ஒரு நிலையான வைப்புத் திறக்க விரும்புகிறேன்',
            'ஒரு நிலையான வைப்பு செய்யுங்கள்',
            'FD செய்ய வேண்டும்'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "3":
            fixedCommands = [
              // 'සාමානය ඉතුරුම් ගිණුමක්',
              // 'කාන්තා ඉතුරුම් ගිණුමක්',
              // 'යොවුන් ඉතුරුම් ගිණුමක් ',
              // 'ජේයෂ්ට පුරවැසි ඉතුරුම් ගිණුමක්'
              'சாதாரண சேமிப்பு கணக்கு',
            'பெண்கள் சேமிப்பு கணக்கு',
            'இளைஞர் சேமிப்பு கணக்கு',
            'மூத்த குடிமக்கள் சேமிப்பு கணக்கு'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "4":
            fixedCommands = ['ஒன்று',
            "இரண்டு",
            'மூன்று',
            'நான்கு',
            'ஐந்து'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "5":
            fixedCommands = [
              // 'ඔව්',
              // 'මට නැවත උත්සහ කිරීමට අවශ්‍යයි',
              // 'ආයෙත් උත්සහ කරන්න ඕන',
              // 'ආයෙත් ට්‍රයි කරන්න ඕන',
              // 'නැවත ට්‍රයි කිරීමට ඕන',
              // 'නැවත ට්‍රයි කරලා බලන්න ඕන',
              // 'ආයේ ට්‍රයි කරන්න ඕන',
              // 'තව ට්‍රයි එකක් ඕන',
              // 'ආයෙත් පටන් ගන්න',
              // 'මට මේක ආයේ ට්‍රයි කරන්න පුලුවන්ද',
              // 'මට ආපහු ට්‍රයි කරන්න ඕන',
              // 'තව පාරක් කරලා බලන්න'
              'ஆம்',
            'நான் மீண்டும் முயற்சிக்க விரும்புகிறேன்',
            'மீண்டும் முயற்சிக்கவும்',
            'மீண்டும் முயற்சிக்கவும்',
            'மீண்டும் எழுத முயற்சிக்கிறது',
            'மீண்டும் முயற்சித்தேன்',
            'மீண்டும் செய்',
            'எனக்கு இன்னொரு முயற்சி தேவை',
            'மீண்டும் தொடங்கவும்',
            'இதை மீண்டும் முயற்சிக்கலாமா?',
            'நான் மீண்டும் முயற்சிக்க விரும்புகிறேன்',
            'வேறு வழி செய்யுங்கள்'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "6":
            fixedCommands = [
            //   'නෑ',
            // 'නැත',
            // 'නැහැ',
            // 'නෑ ඕන නෑ',
            // 'ඇති',
            // 'ආයෙත් උත්සහා කරන්න ඕන නැහැ',
            // 'ආයිත් ට්‍රයි කරන්න ඕන නැත',
            // 'නැවත උත්සහ කරන්න අවශ්‍ය නැත',
            // 'තව දුරටත් ඉස්සරහට යන්න ඕන නෑ',
            // 'තව ට්‍රයි එකක් ඕන නැත',
            // 'නැවත උත්සහ කිරීමට අනවශ්‍යයි',
            // 'නැවත උත්සහ කරන්න එපා.'
              'இல்லை',
            'இல்லை',
            'இல்லை',
            'தேவையில்லை',
            'போதும்',
            'மீண்டும் முயற்சிக்க தேவையில்லை',
            'மீண்டும் முயற்சிக்க தேவையில்லை',
            'மீண்டும் முயற்சிக்க தேவையில்லை',
            'நான் மேலும் செல்ல விரும்பவில்லை',
            'மற்றொரு ட்ரை தேவையில்லை',
            'மீண்டும் முயற்சிக்க தேவையில்லை',
            'மீண்டும் முயற்சிக்க வேண்டாம்.'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "7":
            fixedCommands = [
              // 'හරි',
              // 'තොරතුරු හරි',
              // 'තොරතුරු නිවැරදියි',
              // 'ඒක හරි',
              // 'ඔව් ඔක්කොම නිවැරදියි',
              // 'ඉහත තොරතුරු නිවැරදියි',
              // 'ඔව් හරි',
              // 'මගේ ඩීටේයිල්ස් හරි',
              // 'මේ ඩීටේයිල්ස් හරි',
              // 'විස්තර ඕකේ',
              // 'මේ ඉන්ෆොමේෂන් හරි'
              'சரி',
            'தகவல் சரியானது',
            'தகவல் சரியானது',
            'அது சரி',
            'ஆமாம்', 'சரி',
            'மேற்கண்ட தகவல்கள் சரியானவை',
            'ஆம் சரி',
            'எனது விவரம் சரியானது',
            'இந்த விவரம் சரியானது',
            'விபரங்கள் Okay',
            'இந்த தகவல் சரியானது'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "8":
            fixedCommands = [
              // 'තොරතුරු වැරදියි',
              // 'නෑ, වැරදියි.',
              // 'ඔව්, වැරදියි',
              // 'ඒ තොරතුරු වැරදියි',
              // 'මේ තොරතුරු වැරදි කියල සනාථ කරනවා',
              // 'තොරතුරු වැරදි බව සනාථ කරන්න ඕන',
              // 'ඔය තොරතුරු වැරදියි',
              // 'මේ විස්තර වැරදියි',
              // 'ඩීටෙයිල්ස් වල වැරද්දක් තියනවා',
              // 'ඕක වැරදියි'
              'தகவல் தவறு',
            'இல்லை, தவறு.',
            'ஆம், தவறு',
            'அந்த தகவல் தவறு',
            'இந்த தகவல் தவறாக நிரூபிக்கப்பட்டுள்ளது',
            'தகவலின் சான்று தவறு',
            'அந்த தகவல் தவறு',
            'இந்த விவரங்கள் தவறானவை',
            'விரிவாக ஏதோ தவறு இருக்கிறது',
            'அது தவறு'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "9":
            fixedCommands = [
              // 'ඔව්, විවෘත කරන්න',
              // 'ඔව්, ගිණුම විවෘත කරන්න',
              // 'තහවුරු කරනවා',
              // 'ඔව්, තහවුරු කරනවා',
              // 'කරගෙන යන්න'
              'ஆம், திற',
            'ஆம், கணக்கைத் திறக்கவும்',
            'உறுதி',
            'ஆம், உறுதிப்படுத்துகிறது',
            'தொடருங்கள்'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
          case "10":
            fixedCommands = [
              // 'කාර්ය නතර කරන්න',
              // 'ගිණුම විවෘත කිරීම නතර කරන්න',
              // 'ගිණුම විවෘත කිරීම නවත්තන්න',
              // 'දැන් මේ වැඩේ නතර කරන්න ඕන',
              // 'මට නවත්තන්න ඕන',
              // 'ඇති',
              // 'වැඩේ නවත්තනවා',
              // 'මට මේක නවතලා දාන්න ඕන.'
              'வேலையை நிறுத்து',
            'கணக்கு திறப்பதை நிறுத்து',
            'கணக்கு திறப்பதை நிறுத்து',
            'இந்த விஷயத்தை இப்போது நிறுத்துங்கள்',
            'நான் நிறுத்த விரும்புகிறேன்',
            'போதும்',
            'வேலையை நிறுத்து',
            'இதை நிறுத்த விரும்புகிறேன்.'
            ];
            var output=this.changeTheOrderOfCommands(fixedCommands);
            commands= output[0];
            shuffledNumbers=output[1];
            break;
      case "11":
        fixedCommands = [
          // 'මාස තුනයි',
          // 'මාස  හයයි',
          // 'මාස දොළහයි',
          // 'මාස තුන',
          // 'මාස හය',
          // 'මාස දොළහ'
          'மூன்று மாதங்கள்',
        'ஆறு மாதங்கள்',
        'பன்னிரண்டு மாதங்கள்',
        'மூனு மாசம்',
        'ஆறு மாசம்',
        'பன்ரெண்டு மாசம்'

        ];
        var output=this.changeTheOrderOfCommands(fixedCommands);
        commands= output[0];
        shuffledNumbers=output[1];
        break;
      case "12":
        fixedCommands = [
          // 'කල් පිරීමේදී ලබා ගන්නවා',
          // 'පොළිය කල් පිරීමේදී ලබා ගන්නවා',
          // 'කල් පිරුනම ගන්නවා ',
          // 'කල් පිරීමේදී ලබාගන්න ඕන ',
          // 'කල් පිරීමේදී'
          'முதிர்ச்சியுங்கள்',
        'வட்டி முதிர்ச்சியில் கிடைக்கிறது',
        'முதிர்ந்த முதிர்ந்த',
        'முதிர்ச்சியடை',
        'முதிர்ச்சியில்'
        ];
        var output=this.changeTheOrderOfCommands(fixedCommands);
        commands= output[0];
        shuffledNumbers=output[1];
        break;
      case "13":
        fixedCommands = [
          // 'මාසිකව ලබා ගන්නවා',
          // 'පොළිය මාසිකව ලබා ගන්නවා',
          // 'මාසිකව ලබාගන්න ඕන',
          // 'මාසිකව ගන්නවා',
          // 'මාසිකව'  
        'மாதாந்தம் கிடைக்கும்',
        'வட்டி மாதந்தோறும் சம்பாதிக்கப்படுகிறது',
        'மாதாந்தம் கிடைக்கும்',
        'மாதந்தோறும் எடுக்கப்பட்டது',
        'மாதாந்திர'
        ];
        var output=this.changeTheOrderOfCommands(fixedCommands);
        commands= output[0];
        shuffledNumbers=output[1];
        break;
    }
    break;
      case "usecase2":
        switch(this.props.capability) {
          case "0":
            commands = [
              // 'ලයිට් එක දාන්න',
              // 'මට එලිය ඕනි',
              // 'අදුරුයි',
              // 'ලයිට් එක ON කරන්න'
              'ஒளியை இயக்கவும்',
               'எனக்கு ஒளி வேண்டும்',
               'கிரேட்டர் இருள்',
               'ஒளியை இயக்கவும்'
            ];
            break;
          case "1":
            commands = [
              // 'ලයිට් එක නිවන්න',
              // 'මට එලිය එපා',
              // 'එලිය වැඩියි',
              // 'ලයිට් එක OFF කරන්න'
              'ஒளியை அணைக்க',
               'என்னை ஒளிரச் செய்யாதே',
               'அதிக ஒளி',
               'ஒளியை அணைக்கவும்'
            ];
            break;
          case "2":
            commands = [
              // 'කවුරුත් නැද්ද',
              // 'කාටවත් ඇහෙන්නෙ නැද්ද',
              // 'මට අමාරුයි කාටවත් ඇහෙන්නෙ නැද්ද',
              // 'මට අමාරුයි කවුරුත් නැද්ද'
              'யாரும் டஸ்',
               'யாராலும் கேட்க முடியாது',
               'என்னால் யாரையும் கேட்க முடியாது',
               'யாரும் எனக்கு கடினமாக இல்லை'
            ];
            break;
          case "3":
            commands = [
              // '119 ට ඇමතුමක් ගන්න',
              // '119 ට call එකක් ගන්න',
              // 'මට අමාරුයි කාටවත් ඇහෙන්නෙ නැද්ද',
              // 'මට අමාරුයි කවුරුත් නැද්ද',
              // 'ඇම්බියුලන්ස් එකකට කතා කරන්න',
              // 'ගිලන් රථයකට කතා කරන්න',
              // 'ගිලන් රථයකට call කරන්න'
              'அழைப்பு 119',
               '119 க்கு அழைப்பு விடுங்கள்',
               'என்னால் யாரையும் கேட்க முடியாது',
               'இது எனக்கு கடினம்',
               'ஆம்புலன்ஸ் அழைக்கவும்',
               'ஆம்புலன்ஸ் அழைக்கவும்',
               'ஆம்புலன்ஸ் அழைக்கவும்'
            ];
            break;
          case "4":
            commands = [
              // 'දැන් වේලාව කීයද',
              // 'මට දැන් වෙලාව කියන්න',
              // 'දැන් වෙලාව කීය විතර වෙලා ඇතිද',
              // 'වේලාව කීයද'
              'இப்போது நேரம் என்ன',
               'இப்போது சொல்லுங்கள்',
               'இப்போது எவ்வளவு நேரம்',
               'நேரம் என்ன'
            ];
            break;
        }
        break;
    }
    this.setState({
      fixedCommandsToTxtArea:commands,
      shuffledOrder:shuffledNumbers,
    })
  }
  //------------------------------------------------------------------------------------------------------



  render() {
    var genders = [
      <option value={'Male'}  >
      {'Male'}
      </option>,
      <option value={'Female'}  >
        {'Female'}
      </option>];
    var options = {
      position: 'top center',
      timeout: 5000,
      offset: '10px',
      transition: 'fade'
    }
    var slct ={
      background: 'transparent',
      width: 268,
      padding: 5,
      border: '1px solid black',
      height: 34,
    
  }
  var ethnicities = [
    <option value={'Tamil'}  >
      {'Tamil'}
      </option>,
      <option value={'Sinhala'}  >
        {'Sinhala'}
      </option>,
      <option value={'Burgher'}  >
      {'Burgher'}
      </option>,
      <option value={'Muslim'}  >
        {'Muslim'}
      </option>
  ];
  var places = [
    <option value={'Jaffna'}  >
      {'Jaffna'}
      </option>,
      <option value={'Trinco'}  >
        {'Trinco'}
      </option>,
      <option value={'Batticaloa'}  >
      {'Batticaloa'}
      </option>,
      <option value={'Colombo'}  >
        {'Colombo'}
      </option>,
      <option value={'Vavuniya'}  >
        {'Vavuniya'},
      <option value={'Upcountry'}  >
        {'Upcountry'}
      </option>
      </option>
  ];
  var ages = [];
    for(var i=18;i<75;i++){
      ages.push(<option value={i} key={i} >
        {i}
    </option>);
    }

    return (
      <Provider template={AlertTemplate} {...options}>
      <div className="App">
      <Container>
        <Row>
          <Col sm={12}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <br />
        {/* <Selector 
          handleDomainChanges={this.handleDomainChanges.bind(this)}
          namesListSinhala={this.state.namesListSinhala}
       /> */}
       <br/>
       </Col>
       </Row>
       <Row>
       <Col sm={3}>
       <h4>Select your age</h4>
       <p></p>
       <div className="dropdown" >
        <select style={slct}
        onChange= {this.handleAgeChanges}
        
        >
        {ages}
        </select>
        
        </div> 
       </Col>
       <Col sm={3}>
       <h4>Select your gender</h4>
       <p></p>
       <div className="dropdown" >
        <select style={slct}
          onChange= {this.handleGenderChanges.bind(this)}
          value={this.props.selectValue}
        >
        {genders}
        </select>
        </div> 
       </Col>
       <Col sm={3}>
       <h4>Select your ethnicity</h4>
       <p></p>
       <div className="dropdown" >
        <select style={slct}
          onChange= {this.handleEthnicityChanges}
        >
        {ethnicities}
        </select>
        </div> 
       </Col>
       <Col sm={3}>
       <h4>Select your Native Place</h4>
       <p></p>
       <div className="dropdown" >
        <select style={slct}
          onChange= {this.handleNativePlaceChanges}
        >
        {places}
        </select>
        </div> 
       </Col>
       <br/>
       
       </Row>
       <Row>
       <Col sm={12}>
        <h4>Please select a command below</h4>
        {/* <p>ඔබ තෝරාගත් ක්ෂේත්‍රය (domain) යටතේ හඬ පටිගත කිරීමට ඇති විධාන(commands) පහත මෙනුවේ (drop-down) දැක්වේ. ඉන් එකක් තෝරන්න. (ඔබට විධාන කිහිපයක්  සඳහා හඬ පටිගත කල හැකිනම් එය මහත් උපකාරයකි.) </p> */}
        <p>There are commands below for recording. Please select one (It will be helpfull when you try more commands.) </p>

         <Dropdown
             handleSelectChanges={this.handleSelectChanges.bind(this)}
             //setTheFirstIntentAfterOrdering = {this.setTheFirstIntentAfterOrdering.bind(this)}
             //selectedCommand={this.state.capability}
             bankCommands = {this.state.fixedIntentsToDropDown}
             shuffledNumbers = {this.state.newIntentOrder}
             domain = {this.state.domain} />
      </Col>
      <br />
      </Row>
      
      <Row>
      <Col sm={5}>
      <h4> Select command for recording </h4>
      <p>Find the forms below for your selected commnad. Please select one. (It will be helpfull when you try more commands.)</p>
      <br/>
      <TextArea
            capability={this.state.capability}
            fixedCommandsToTxtArea={this.state.fixedCommandsToTxtArea}
            handleCommandChanges={this.handleCommandChanges.bind(this)}
            //domain = {this.state.domain}
            command ={this.state.command}
      />
    </Col>
    <Col sm={2}>
    </Col>
    <Col sm={5}>
    <h4>Start recording</h4>
    <p>Press `microphone` button to start. Press `stop` button after recording. Your recording will be successfully uploaded.</p>
      <br/>
      <Demo 
        domain ={this.state.domain}
        capability ={this.state.capability}
        command = {this.state.command}
        age = {this.state.age}
        gender = {this.state.gender}
        ethnicity = {this.state.ethnicity}
        place = {this.state.place}
      />
      </Col>
      </Row>
     </Container>
      </div>
      </Provider>
       
    )}
}


export default App;
