# -----------------------------------------------------------
# Condições simples
# -----------------------------------------------------------


# Cap 4 Figura 1 - App para o cálculo da média de um aluno

# nota_1 = float(input("Informe a primeira nota: "))
# nota_2 = float(input("Informe a segunda nota: "))

# media = (nota_1 + nota_2) / 2

# print("A média do aluno é " + str(media))


# ---------------------------------------------------------


# Cap 4 Figura 4 - Recuo do escopo

# if media > 8:
#     print("O aluno está aprovado")
# else:
#     print("O aluno está reprovado")
# print(f"A média final do aluno é {media}")


# ---------------------------------------------------------


# Cap 4 Figura 5 - Uso do Elif

# nota_1 = float(input("Informe a primeira nota: "))
# nota_2 = float(input("Informe a segunda nota: "))

# media = (nota_1 + nota_2) / 2

# if media >= 7:
#     print("O aluno está aprovado")
# elif media >= 5:
#     print("O aluno está com a aprovação condicional")
# else:
#     print("O aluno está reprovado")

# print(f"A média final do aluno é {media}")


# ---------------------------------------------------------


# Cap 4 Figura 6 - Ifs aninhados


# nota_1 = float(input("Informe a primeira nota: "))
# nota_2 = float(input("Informe a segunda nota: "))

# fez_projeto = input("Informe se o aluno fez o projeto (S/N): ")

# media = (nota_1 + nota_2) / 2

# if media >= 7:
#     print("O aluno está aprovado")
# elif media >= 5:
#     if fez_projeto == "S":
#         print("O aluno está com a aprovação condicional")
#     else:
#         print("O aluno será aprovado se fizer o projeto")
# else:
#     print("O aluno está reprovado")

# print(f"A média final do aluno é {media}")


# ---------------------------------------------------------


# Cap 4 Figura 7 - Usando elif para remover if aninhado

# nota1 = float(input("Informe a primeira nota: "))
# nota2 = float(input("Informe a segunda nota: "))
# fez_projeto = input("Fez o projeto? (S/N): ")


# media = (nota1 + nota2) / 2

# if media > 7:
#     print("O aluno está aprovado!")
# elif media >= 5 and fez_projeto == "S":
#     print("O aluno sera aprovado pelo projeto")
# elif media >= 5:
#     print("o aluno sera aprovado se fizer o projeto")
# else:
#     print("O aluno está reprovado!")

# print(f"A média final do aluno é {media}")


# ---------------------------------------------------------


# Cap 4 K version

# nota_1 = float(input("Digite a nota 1: "))
# nota_2 = float(input("Digite a nota 2: "))
# fez_projeto = input("Fez o projeto? (S/N): ")

# media = (nota_1 + nota_2) / 2

# if media > 7:
#     print("Aluno aprovado")
# elif media >= 5 and fez_projeto == "S":
#     print("Aluno aprovado por causa do projeto")
# elif media >= 5:
#     print("Aluno aprovado caso faça o projeto")
# else:
#     print("Aluno reprovado")

# print(f"A média final do aluno é {media}")

# ---------------------------------------------------------

# -----------------------------------------------------------
# Condições com Match Case
# -----------------------------------------------------------

# ---------------------------------------------------------

# Cap 4

# Figura 8 - Criando variável ‘situacao’ para a ‘aprovacao’ do aluno
# AND
# Figura 9 - Usando ifs para comparar o valor da variável ‘situacao’

# nota_1 = float(input("Digite nota 1: "))
# nota_2 = float(input("Digite nota 2: "))
# fez_projeto = input("Informe se o aluno fez o projeto (S/N)")

# media = (nota_1 + nota_2) / 2

# situacao = "reprovado"

# if media > 7:
#     situacao = "aprovado"
# elif media >= 5 and fez_projeto == "S":
#     situacao = "aprovado"
# elif media >= 5:
#     situacao = "aprovacao condicional"

# if situacao == "aprovado":
#     print("O aluno está aprovado")
# elif situacao == "aprovacao condicional":
#     print("O aluno sera aprovado se fizer o projeto")
# else:
#     print("O aluno está reprovado")

# print(f"A média final do aluno é {media}")

# -----------------------------------------------------------

# Cap 4

# Figura 10 - Usando match case para checar a variável ‘situacao’
# AND
# Figura 11 - Usando match case para lidar com um case não esperado

# nota_1 = float(input("Digite nota 1: "))
# nota_2 = float(input("Digite nota 2: "))
# fez_projeto = input("Informe se o aluno fez o projeto (S/N)")

# media = (nota_1 + nota_2) / 2

# situacao = "reprovado"

# if media > 7:
#     situacao = "aprovado"
# elif media >= 5 and fez_projeto == "S":
#     situacao = "aprovado"
# elif media >= 5:
#     situacao = "aprovacao condicional"

# situacao = "aprovado com resalvas"  # situação não prevista

# match situacao:
#     case "reprovado":
#         print("O aluno está reprovado")
#     case "aprovado":
#         print("O aluno está aprovado")
#     case "aprovacao condicional":
#         print("O aluno sera aprovado se fizer o projeto")
#     case _:
#         print(f"Oops!essa situação aqui não estava prevista: {situacao}")

# print(f"A média final do aluno é {media}")

# -----------------------------------------------------------

# Cap 4

# Figura 12 - Usando match case para lidar com condicionais e múltiplas opções no case

# numero = int(input("Escolha um número de 1 a 5: "))

# # Implementação com mais de 1 valor por case

# match numero:
#     case 2 | 4:
#         print("Você escolheu um número par")
#     case 1 | 3 | 5:
#         print("Você escolheu um número ímpar")

# # Implementação com condicionais nos casos
# match numero:
#     case numero if numero % 2 == 0:  # resto da divisão por 2
#         print("Você escolheu um número par")
#     case _:
#         print("Você escolheu um número impar")

# -----------------------------------------------------------

# Cap 4

# Figura 13 - Usando o while para contar até 5

# contador = 1

# while contador <= 5:
#     print(f"Vamos em : {contador}")
#     contador = contador + 1


# -----------------------------------------------------------

# Cap 4

# Figura 14 - Usando o While com uma condição que nunca será “False”

# contador = 1

# while contador > 0:
#     print(f"Olá, x{contador}")
#     contador += 1


# -----------------------------------------------------------


# Cap 4

# Figura 15 - Usando o While para validar a entrada do usuário

# numero = ""

# while not numero.isnumeric():
#     numero = input("Informe um numero positivo: ")

#     if not numero.isnumeric():
#         print(f"esse numero não é inteiro positivo")

# print(f"Boa '{numero}' vai servir :D ")


# -----------------------------------------------------------

# Cap 4

# Figura 16 - Usando o While para fazer um ‘sentinel loop’

# valor = 1

# while valor != 0:
#     valor = int(input("Digite um número e eu duplico para você (0 para sair): "))

#     print(f"2 x {valor} = {2 * valor}")

# print("Até mais")

# ---------------------------------------------------------

# Cap 4

# Figura 17 - Usando o break para encerrar um While “True” loop

# import random

# numero = random.randint(1, 100)

# while True:
#     palpite = int(input("Digite seu número: "))

#     if palpite == numero:
#         print("Nice! você acertou!")
#         break

#     if palpite < numero:
#         print("Muito baixo, tente novamente \n")
#     else:
#         print("Muito alto, tente novamente \n")

# print("Até mais")

# ---------------------------------------------------------

# Cap 4

# Figura 18 - Testando Lists e Ranges

# Listas

# idades = [23, 46, 36, 22]
# nomes = ["Lucas", "André", "João", "Tulio"]

# print("Listas: ")
# print(f" idades: {idades}")
# print(f" nomes: {nomes}")

# # Ranges

# numeros = range(10)
# numeros_pares = range(0, 10, 2)
# numeros_impares = range(1, 10, 2)


# print("Ranges: ")
# print(f"  numeros: {list(numeros)}")
# print(f"  numeros_pares: {list(numeros_pares)}")
# print(f"  numeros_impares: {list(numeros_impares)}")


# ---------------------------------------------------------

# Cap 4

# Figura 20 - Usando o For para contar até 5 com o range

# for numero in range(1, 6, 1):
#     print(numero)


# ---------------------------------------------------------

# Cap 4

# Figura 20 - Usando o For para contar até 5 com o range

# for numero in range(5:
#     print(numero + 1)

# ---------------------------------------------------------


# Cap 4

# Figura 22 - Usando o For para percorrer uma lista de nomes

# nomes = [
#     "Elly",
#     "Maria",
#     "Pedro",
#     "Anna",
#     "Gabriel",
#     "Larissa",
#     "Lucas",
#     "Rafaela",
#     "Matheus",
#     "Sofia",
# ]

# for nome in nomes:
#     print(f" - {nome}")


# ---------------------------------------------------------


# Cap 4

# Figura 23 - Usando o For para percorrer uma lista de nomes e exibir as letras em maiúsculo

# nomes = [
#     "Elly",
#     "Maria",
#     "Pedro",
#     "Anna",
# ]

# for nome in nomes:
#     print(f"{nome}:")

#     for letra in nome:
#         print(f" - {letra.upper()}")


# ---------------------------------------------------------

# Cap 4

# Figura 24 - Usando o For para percorrer uma lista de nomes e exibir as letras em maiúsculo dos nomes começados com "E"

# nomes = [
#     "Elly",
#     "Maria",
#     "Emilly",
#     "Anna",
# ]

# for nome in nomes:
#     if nome[0] == "E":
#         print(f"{nome}:")

#         for letra in nome:
#             print(f" - {letra.upper()}")


# ---------------------------------------------------------

# Cap 4

# Figura 25 - Usando o “continue” dentro do For para pular uma iteração

nomes = [
    "Elly",
    "Maria",
    "Emilly",
    "Anna",
]

for nome in nomes:
    if nome[0] != "E":
        continue

    print(f"{nome}:")

    for letra in nome:
        print(f" - {letra.upper()}")


# ---------------------------------------------------------
