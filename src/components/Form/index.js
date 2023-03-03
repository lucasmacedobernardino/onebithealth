import React, {useState, useEffect} from "react";
import { TextInput, View, Text, Button} from "react-native"
import ResultImc from "./ResultImc/"
export default function Form() {
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [classificacao, setClassificacao] = useState("")
    const [messageImc, setMessageImc] = useState("preenchao peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        if (setImc((weight / (height * height)).toFixed(2)) <= 18.5) {
            setClassificacao('baixo peso')
        }else
            if (setImc((weight / (height * height)).toFixed(2)) <= 24.9) {
                setClassificacao('eutrofia')
            }
            else
                if (setImc((weight / (height * height)).toFixed(2)) <= 29.9) {
                    setClassificacao('sobrepeso')
                } else {
                    setClassificacao('obesidade')
                }
        return imc
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
        setClassificacao('')
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric" />
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 80.45"
                    keyboardType="numeric" />
                <Button
                    onPress={() => validationImc()}
                    title={textButton} />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            <Text>{classificacao}</Text>
        </View>
    )
}