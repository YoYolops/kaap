import { createContext, useState } from 'react';

const TextContext = createContext({});

export function TextProvider({children}) {
    const [typedText, setTypedText] = useState('')
    const [allCleaned, setAllCleaned] = useState(false)

    function changeText(value) {
        const novoTexto = typedText + value.toUpperCase()
        setTypedText(novoTexto)
    }

    function clearAll() {
        setTypedText('')
        setAllCleaned(!allCleaned)
    }

    function deletar() {
        setTypedText(typedText.slice(0, -1))
    }

    return (
        <TextContext.Provider value={{
            typedText,
            changeText,
            clearAll,
            allCleaned,
            deletar,
        }}
        >
            {children}
        </TextContext.Provider>
    )
}

export default TextContext;