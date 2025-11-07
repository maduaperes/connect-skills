import { Ionicons } from '@expo/vector-icons';
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
    View,
} from "react-native";
import { useAuth } from "../../contexts/authContext";
import { styles } from "./styles";

export default function Register() {
    const router = useRouter();
    const { signIn, signUp } = useAuth(); // agora temos signUp também

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        setLoading(true);

        try {
            // Cadastrar usuário
            await signUp(email, password);

            // Fazer login automaticamente
            await signIn(email, password);

            Alert.alert("Sucesso", "Cadastro realizado!");
            router.push("/"); 
        } catch (error: any) {
            Alert.alert("Erro", error.message || "Não foi possível realizar o cadastro.");
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
                    {/* Botão de voltar */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.push("/login")}
                    >
                        <Text style={styles.backButtonText}>Voltar</Text>
                    </TouchableOpacity>

                    {/* Título */}
                    <Text style={styles.title}>Cadastrar</Text>

                    {/* Subtítulo */}
                    <Text style={styles.subtitle}>
                        Conecte-se com pessoas e compartilhe suas habilidades.
                    </Text>

                    {/* Inputs */}
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#aaa"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#aaa"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    {/* Senha com olho */}
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.inputPassword}
                            placeholder="Senha"
                            placeholderTextColor="#aaa"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeButton}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={24}
                                color="rgba(255,255,255,0.4)"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Confirmar senha com olho */}
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.inputPassword}
                            placeholder="Confirmar senha"
                            placeholderTextColor="#aaa"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeButton}
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            <Ionicons
                                name={showConfirmPassword ? "eye" : "eye-off"}
                                size={24}
                                color="rgba(255,255,255,0.4)"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Botão Cadastrar */}
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

                    {/* Divider "ou" */}
                    <View style={styles.dividerContainer}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>ou</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Link de login */}
                    <TouchableOpacity onPress={() => router.push("/login")}>
                        <Text style={styles.linkText}>
                            Já tem uma conta?{" "}
                            <Text style={styles.linkHighlight}>Entrar</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
