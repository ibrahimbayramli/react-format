import './App.css';
import {FormattedMessage, IntlProvider} from "react-intl";
import {useEffect, useState} from "react";


const messages = {
    "tr-TR": {
        title: "Merhaba Dünya",
        description: "{count} yeni mesajınız var"
    },
    "en-US": {
        title: "Hello World",
        description: "You have {count} new messages"
    }

}

function App() {
    const isLocale = localStorage.getItem("locale");
    const defaultLocal = isLocale ? isLocale : navigator.language;
    const [locale, setLocale] = useState(defaultLocal);
    useEffect(() => {
        localStorage.setItem("locale", locale)
    }, [locale])

    return (
        <div className="App">
            <IntlProvider messages={messages[locale]}>
                <FormattedMessage id={"title"}></FormattedMessage>
                <p>
                    <FormattedMessage id={"description"} values={{count: 5}}></FormattedMessage>
                </p>
                <br/><br/>
                <button onClick={() => setLocale("tr-TR")}>TR</button>
                <button onClick={() => setLocale("en-US")}>EN</button>
            </IntlProvider>
        </div>
    );
}

export default App;
