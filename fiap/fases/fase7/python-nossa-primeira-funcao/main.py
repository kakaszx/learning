# --- Vídeo
# def minha_funcao(nome: str):
#     print("Ola, " + nome )

# minha_funcao("Aluno")
# minha_funcao("Aluna")
# minha_funcao("World")

# --- Material
# def falar(mensagem):
#     print(f"[Computador]: {mensagem}")

#     resposta = input("Sua resposta: ")
#     return resposta

# falar(f"[Usuário]: {falar("Hello, World")}")

# --- Material

def input_numero(mensagem):
    input_usuario = ""

    while not input_usuario.isnumeric():
        input_usuario = input(mensagem)
        if not input_usuario.isnumeric():
            print("Oops! A entrada informada não é um número!")

    return float(input_usuario)

a = input_numero("Informe o primeiro valor: ")
b = input_numero("Informe o segundo valor: ")

resultado = a + b

print(f"O resultado é: {resultado}")