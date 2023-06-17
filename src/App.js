import './App.css';
import { phraseLibrary} from "./fixtures/phrases";

function App() {
    const name = 'kate';
    const personalPhrases = phraseLibrary[name];
    const finals = personalPhrases.finals;
    const adjectives = personalPhrases.adjectives;
    function getRandomInt(max)  {
        return Math.floor(Math.random() * max);
    }
    const num1 = getRandomInt(adjectives.length);
    let num2 = getRandomInt(adjectives.length);
    if(num2 === num1) {
        if(num2 === adjectives.length) {
            num2--;
        } else {
            num2++;
        }
    }

    const adjetiveA = adjectives[num1];
    const adjetiveB = adjectives[num2];
    const finalPhrase = finals[getRandomInt(finals.length)];
  return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "80vw", height: "100vh", textAlign:'center'}}>
            <div style={{marginBottom: 30}}>
                <span className={'name'}>{name[0].toUpperCase()}{name.slice(1)}{` `}</span>
                <span className={'generalText'}>you are:</span>
            </div>
            <div className={'adj1 generalText'}>{adjetiveA}</div>
            <div className={"generalText"}>{` `}and{` `}</div>
            <div className={'adj2 generalText'}>{adjetiveB},</div>
            <div className={'generalText'}> and {finalPhrase}</div>
            <div style={{marginTop: 200}}>
                <button
                    style={{padding: 30}}
                    onClick={() => {document.location.reload()}}
                >
                    <b>Tell me more nice things about me</b>
                </button>
            </div>
        </div>
      </div>
  );
}

export default App;
