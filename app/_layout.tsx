// app/_layout.tsx

import { Stack } from "expo-router";
// Importe hooks de tema se estiver usando o theming como no exemplo anterior
export default function RootLayout() {
  // Use hooks de tema (useColorScheme) aqui, se necessário

  return (
    // O Stack define o tipo de navegação (pilha de telas)
    <Stack>
      {/* 1. Stack.Screen SEMPRE define uma rota. 
           Quando você não especifica o 'name', o Expo Router
           automaticamente procura as rotas restantes no diretório 'app/'.
      */}

      {/* 2. Configurando a tela INICIAL (index.tsx):
           Aqui, estamos configurando a tela 'index' para não mostrar o cabeçalho.
      */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="cadastro" options={{ headerShown: false }} />
      <Stack.Screen name="timeline" options={{ headerShown: false }} />
      <Stack.Screen name="avisos" options={{ headerShown: false }} />
      {/* 3. Se houver outras rotas que você queira configurar individualmente, 
           como 'modal.tsx' (se você o tivesse), faria isso aqui:
           
        <Stack.Screen 
          name="modal" 
          options={{ presentation: 'modal', title: 'Atenção' }} 
        />
      */}
    </Stack>
  );
}
