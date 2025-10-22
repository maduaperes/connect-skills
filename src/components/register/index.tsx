// register/index.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useAuth } from "../../contexts/authContext";
import { styles } from "./styles";

export default function Register() {
    const router = useRouter();
    const { signIn } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!name || !email || !password) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        setLoading(true);

        try {

            await new Promise((resolve) => setTimeout(resolve, 1500));


            await signIn(email, password);

            Alert.alert("Sucesso", "Cadastro realizado!");
            router.push("/");
        } catch (error) {
            Alert.alert("Erro", "Não foi possível realizar o cadastro.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scroll}>
                    <Text style={styles.title}>Cadastrar</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#ccc"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#ccc"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#ccc"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRegister}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push("/")}>
                        <Text style={styles.linkText}>
                            Já tem uma conta? <Text style={styles.linkHighlight}>Entrar</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
