import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('aluno@teste.com');
    const [password, setPassword] = useState('123@senac');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState('');

    const submit = email.trim() !== '' && password.trim() !== '' && !loading;

    async function handleSignIn() {
        try {
            setLoading(true);

            await new Promise((r) => setTimeout(r, 600));

            if (email.toLowerCase() === 'aluno@teste.com' && password === '123@senac') {
                Alert.alert('Login realizado com sucesso');
            }
            else {
                setLoginError('Email ou senha inválidos');
            }
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <SafeAreaView>
            {/*Formulário*/}
            <View>
                {/*E-mail*/}
                <Text>E-mail</Text>
                <TextInput
                placeholder="exemplo@gmail.com"
                value={email}
                onChangeText={setEmail}
                />

                {/*Senha*/}
                <Text>Senha</Text>
                <TextInput
                placeholder="senha"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                />
            </View>
        </SafeAreaView>
    );

}
