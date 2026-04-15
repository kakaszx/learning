# 1 parte

# nome = input("Digite se nome: ")
# idade = int(input("Digite a sua idade: "))
# eh_menor_idade = idade < 18

# print("Hello,", nome)

# if eh_menor_idade:
#     print("Você não pode usar esta aplicação")
# else:
#     print("Seja bem-vindo(a)")

# if eh_menor_idade:
#     print("Procure um responsavel")
# else:
#     print("Informe o seu CPF")


# 2 parte

# for numero in range(101):
#     resto = numero % 2
#     if resto == 0:
#         print(numero)

# 3 parte

# usuario = {
#     "email": "kauaaurelio14@fiap.com.br",
#     "nome": "Kauã",
#     "idade": 18,
# }

# print("Dados", usuario)

# 3.5 parte com json
import json

usuario = {
    "email": "kauaaurelio14@fiap.com.br",
    "nome": "Kauã",
    "idade": 18,
}

print("Dados", usuario)
print("Dados", json.dumps(usuario))
