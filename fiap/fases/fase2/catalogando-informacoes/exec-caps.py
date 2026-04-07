# Figura 1 - Usando múltiplas variáveis para guardar nomes

# nome1 = "Anna"
# nome2 = "Emily"


# print(f"{nome1} -> {nome1.upper()}")
# print(f"{nome2} -> {nome2.upper()}")

# ---------------------------------------------------------


# Figura 2 - Aumentando a quantidade de nomes com uma nova variável

# nome1 = "Anna"
# nome2 = "Emily"
# nome3 = "Lucas"


# print(f"{nome1} -> {nome1.upper()}")
# print(f"{nome2} -> {nome2.upper()}")
# print(f"{nome3} -> {nome3.upper()}")

# ---------------------------------------------------------


# Figura 3 - Declarando listas vazias e com itens

# lista_vazia = []
# nomes = ["Anna", "Alice", "Lucas", "Andre"]

# print(f"A -> {lista_vazia}")
# print(f"B -> {nomes}")


# ---------------------------------------------------------


# Figura 5 - Acessando valores de uma lista através de seu índice

# nomes = ["Anna", "Alice", "Lucas", "Andre"]

# print(f"0 -> {nomes[0]}")
# print(f"1 -> {nomes[1]}")
# print(f"2 -> {nomes[2]}")
# print(f"3 -> {nomes[3]}")

# ---------------------------------------------------------


# Figura 6 - Editando um item da lista através de seu índice (2)

# nomes = ["Anna", "Alice", "Lucas", "Andre"]

# print(f"0 -> {nomes[0]}")
# print(f"1 -> {nomes[1]}")
# print(f"2 -> {nomes[2]}")
# print(f"3 -> {nomes[3]}")

# # Atualizando os valores pelo índice
# nomes[1] = "Larissa"

# print("\n------\n")
# print(f"0 -> {nomes[0]}")
# print(f"1 -> {nomes[1]}")
# print(f"2 -> {nomes[2]}")
# print(f"3 -> {nomes[3]}")


# ---------------------------------------------------------


# Figura 7 - Invertendo a posição de itens na lista

# nomes = ["Anna", "Alice", "Lucas", "Andre"]

# print(f"0 -> {nomes[0]}")
# print(f"1 -> {nomes[1]}")
# print(f"2 -> {nomes[2]}")
# print(f"3 -> {nomes[3]}")

# # Trocando posições
# auxiliar = nomes[0]
# nomes[0] = nomes[3]
# nomes[3] = auxiliar

# print("\n------\n")
# print(f"0 -> {nomes[0]}")
# print(f"1 -> {nomes[1]}")
# print(f"2 -> {nomes[2]}")
# print(f"3 -> {nomes[3]}")


# ---------------------------------------------------------


# Figura 8 - Guardando nomes informados em uma lista

# fila = []

# while len(fila) < 12:
#     pessoa = input(f"Informe o {len(fila) + 1}º nome: ")

#     fila.append(pessoa)

# print(fila)

# ---------------------------------------------------------

# Figura 9 - Iterando sobre uma lista e exibindo seus valores

# fila = []

# while len(fila) < 12:
#     pessoa = input(f"Informe o {len(fila) + 1}º nome: ")

#     fila.append(pessoa)

# print("\nFila:")
# for pessoa in fila:
#     print(f" - {pessoa}")

# ---------------------------------------------------------

# Figura 10 - Atendendo a fila em blocos de 3 itens

# fila = []

# while len(fila) < 12:
#     pessoa = input(f"Informe o {len(fila) + 1}º nome: ")

#     fila.append(pessoa)

# while len(fila) > 0:
#     proximos_a_atender = fila[0:3]
#     restante_na_fila = len(fila) - len(proximos_a_atender)

#     print(f"\nAtendendo agora: ({restante_na_fila} na fila)")
#     for pessoa in proximos_a_atender:
#         print(f" = {pessoa}")

#     for pessoa in proximos_a_atender:
#         fila.remove(pessoa)

# ---------------------------------------------------------

# Figura 13 - Python lidando com slice fora dos limites

# fila = []

# while len(fila) < 12:
#     pessoa = input(f"Informe o {len(fila) + 1}º nome: ")

#     fila.append(pessoa)

# while len(fila) > 0:
#     proximos_a_atender = fila[0:8]
#     restante_na_fila = len(fila) - len(proximos_a_atender)

#     print(f"\nAtendendo agora: ({restante_na_fila} na fila)")
#     for pessoa in proximos_a_atender:
#         print(f" = {pessoa}")

#     for pessoa in proximos_a_atender:
#         fila.remove(pessoa)

# ---------------------------------------------------------

# Figura 14 - Usando nomes para criar lista VIP

# fila = []
# while len(fila) < 12:
#     pessoa = input(f"Informe o {len(fila) + 1}º nome:")
#     fila.append(pessoa)

# vip = []
# for pessoa in fila:
#     if pessoa[0].upper() == "A":
#         vip.append(pessoa)

# print(f"\nVIP -> {vip}")

# while len(fila) > 0:
#     proximos_a_atender = fila[0:8]
#     restante_na_fila = len(fila) - len(proximos_a_atender)

#     print(f"\nAtendendo agora: ({restante_na_fila} na fila)")
#     for pessoa in proximos_a_atender:
#         print(f"- {pessoa}")

#     for pessoa in proximos_a_atender:
#         fila.remove(pessoa)

# ---------------------------------------------------------

# Figura 15 - Utilizando operador logico “in” para condicionar atendimento

# fila = []
# while len(fila) < 12:
#     pessoa = input(f"Informe o {len(fila) + 1}º nome:")
#     fila.append(pessoa)

# vip = []
# for pessoa in fila:
#     if pessoa[0].upper() == "A":
#         vip.append(pessoa)


# while len(fila) > 0:
#     proximos_a_atender = fila[0:8]
#     restante_na_fila = len(fila) - len(proximos_a_atender)

#     print(f"\nAtendendo agora: ({restante_na_fila} na fila)")
#     for pessoa in proximos_a_atender:
#         if pessoa in vip:
#             print(f" - {pessoa} *")
#         else:
#             print(f" - {pessoa}")

#     for pessoa in proximos_a_atender:
#         fila.remove(pessoa)

# ---------------------------------------------------------

# # Figura 17 - Usando List Comprehension para gerar a lista VIP

# fila = []
# while len(fila) < 12:
#     pessoa = input(f"Informe o {len(fila) + 1}º nome:")
#     fila.append(pessoa)

# vip = [pessoa for pessoa in fila if pessoa[0].upper() == "A"]


# while len(fila) > 0:
#     proximos_a_atender = fila[0:8]
#     restante_na_fila = len(fila) - len(proximos_a_atender)

#     print(f"\nAtendendo agora: ({restante_na_fila} na fila)")
#     for pessoa in proximos_a_atender:
#         if pessoa in vip:
#             print(f" - {pessoa} *")
#         else:
#             print(f" - {pessoa}")

#     for pessoa in proximos_a_atender:
#         fila.remove(pessoa)

# ---------------------------------------------------------

# Figura 19 - Usando List Comprehension para multiplicar números

# numbers = [1, 2, 3, 4, 5]

# doubled_numbers = [number * 2 for number in numbers]

# print(numbers)
# print(doubled_numbers)

# ---------------------------------------------------------

# Figura 20 - Inicializando tuplas

# tupla_vazia = ()
# tupla_com_um_item = ("admin",)
# tupla_com_varios_itens = ("A", "E", "I", "O", "U")

# print(tupla_vazia)
# print(tupla_com_um_item)
# print(tupla_com_varios_itens)

# ---------------------------------------------------------

# Figura 21 - Inicializando com apenas um item de forma errada

# As declarações abaxio estão incorretas

# exemplo_com_int = 5
# exemplo_com_float = 3.14
# exemplo_com_string = "admin"

# print(f"exemplo_com_int -> {type(exemplo_com_int)}")
# print(f"exemplo_com_float -> {type(exemplo_com_float)}")
# print(f"exemplo_com_string -> {type(exemplo_com_string)}")

# exemplo_com_string.capitalize <---------- Incorreto


# As declarações abaxio estão CORRETAS

# exemplo_com_int = (5,)
# exemplo_com_float = (3.14,)
# exemplo_com_string = ("admin",)

# print(f"exemplo_com_int -> {type(exemplo_com_int)}")
# print(f"exemplo_com_float -> {type(exemplo_com_float)}")
# print(f"exemplo_com_string -> {type(exemplo_com_string)}")

# exemplo_com_string.__add__ <--------- Correto


# ---------------------------------------------------------

# Figura 22 - Usando tuplas para representar os dias da semana

# dias_da_semana = (
#     "Domingo",
#     "Segunda",
#     "Terça",
#     "Quarta",
#     "Quinta",
#     "Sexta",
#     "Sábado",
# )

# print(f"Terceiro dia da semana: {dias_da_semana[2]}")

# print("\nDias da semana:")
# for dia in dias_da_semana:
#     print(f" - {dia}")

# ---------------------------------------------------------


# Figura 23 - Tentando alterar a ordem de itens em uma tupla

# dias_da_semana = (
#     "Domingo",
#     "Segunda",
#     "Terça",
#     "Quarta",
#     "Quinta",
#     "Sexta",
#     "Sábado",
# )

# # Tentativa de alterar os itens da TUPLA (Não funciona)

# auxiliar = dias_da_semana[0]
# dias_da_semana[0] = dias_da_semana[6]
# dias_da_semana[6] = auxiliar


# print(f"Terceiro dia da semana: {dias_da_semana[2]}")

# print("\nDias da semana:")
# for dia in dias_da_semana:
#     print(f" - {dia}")


# ---------------------------------------------------------

# Figura 24 - Usando uma lista de tuplas para representar um histórico de partidas

# jogos = [
#     ("01/06", 0, 2),
#     ("15/06", 3, 2),
#     ("29/06", 1, 1),
#     ("13/06", 4, 3),
# ]

# print("Placares: ")
# for placar in jogos:
#     print(f" {placar[0]}")
#     print(f" {placar[1]} x {placar[2]}\n")

# ---------------------------------------------------------

# Figura 25 - Sorteando 10 números

# import random

# valor_maximo = 25

# for _ in range(10):
#     valor_sorteado = random.randint(1, valor_maximo)

#     print(valor_sorteado)

# import random

# valor_maximo = 9

# for _ in range(6):
#     valor_sorteado = random.randint(0, valor_maximo)
#     print(valor_sorteado) ptpas # 8 0 1 1 3 9


# ---------------------------------------------------------

# Figura 26 - Usando um set para guardar os números sorteados

# import random

# valor_maximo = 25

# valores_sorteados = set()

# USANDO WHILE <------

# while len(valores_sorteados) < 10:
#     valor_sorteado = random.randint(1, valor_maximo)

#     valores_sorteados.add(valor_sorteado)

# print(f"Valores:\n {valores_sorteados}")


# USANDO FOR <-------

# for _ in range(10):
#     valor_sorteado = random.randint(1, valor_maximo)

#     valores_sorteados.add(valor_sorteado)

# print(f"Valores:\n {valores_sorteados}")

# ---------------------------------------------------------

# Figura 27 - Usando o método “delete” para corrigir um erro no conjunto


# import random

# valor_maximo = 25
# valores_sorteados = set()

# while len(valores_sorteados) < 10:
#     valor_sorteado = random.randint(1, valor_maximo)
#     valores_sorteados.add(valor_sorteado)

# # Correção temporária: troca 20 por 40, se 20 existir
# if 20 in valores_sorteados:
#     valores_sorteados.remove(20)
#     valores_sorteados.add(40)

# print(f"Valores:\n {valores_sorteados}")


# ---------------------------------------------------------

# Figura 28 - Declarando uma lista de set

# sorteios = [
#     {2, 3, 4, 5, 6, 10, 14, 16, 18, 24},
#     {4, 6, 11, 16, 17, 18, 21, 22, 23, 24},
#     {1, 3, 7, 9, 12, 16, 18, 19, 21, 25},
# ]

# ultimos_sorteados = set()

# for sorteio in sorteios:
#     ultimos_sorteados = ultimos_sorteados.union(sorteio)

# print(f"Total sorteados: {len(ultimos_sorteados)}")

# nao_sorteados = [numero for numero in range(1, 26) if numero not in ultimos_sorteados]

# print(f"Não sorteados: {nao_sorteados}")

# ---------------------------------------------------------

# Figura 30 - Criando um dicionário para o inventário

# inventario = {
#     "Caneta": 2,
#     "Caderno": 5,
#     "Lápis": 10,
#     "Borracha": 3,
#     "Mochila": 1,
#     "Estilete": 4,
#     "Tesoura": 6,
#     "Marca Texto": 0,
#     "Papéis Coloriods": 12,
#     "Clips": 15,
# }

# print("Inventário: ")
# for chave in inventario:
#     print(f" - {chave}: {inventario[chave]}")

# ---------------------------------------------------------

# Figura 31 - Realizando operações básicas no dicionário

# inventario = {
#     "Caneta": 2,
#     "Caderno": 5,
#     "Lápis": 10,
#     "Borracha": 3,
#     "Mochila": 1,
#     "Estilete": 4,
#     "Tesoura": 6,
#     "Marca Texto": 0,
#     "Papéis Coloriods": 12,
#     "Clips": 15,
# }

# # Adicionando nova chave
# inventario["Folha A4"] = 100

# # Atualizando chave existente
# inventario["Caneta"] = 10

# # Incrementando o valor de cahve existentes
# inventario["Caderno"] += 10
# inventario["Borracha"] = inventario["Borracha"] + 2

# # Exlcuindo uma chave
# del inventario["Mochila"]

# print("Inventário: ")
# for chave in inventario:
#     print(f" - {chave}: {inventario[chave]}")

# ---------------------------------------------------------

# Figura 32 - Acessando chave não existente de um dicionário

# autores = {
#     "George Orwell": ["1984", "Animal Farm"],
#     "Harper Lee": ["To Kill a Mockingbird"],
# }

# print(autores["Ray Bradbury"])

# ---------------------------------------------------------

# Figura 33 - Condicionando acesso à chave do dicionário pela sua presença

# autores = {
#     "George Orwell": ["1984", "Animal Farm"],
#     "Harper Lee": ["To Kill a Mockingbird"],
# }

# if "Ray Bradbury" in autores:
#     print(autores["Ray Bradbury"])

# ---------------------------------------------------------

# Figura 34 - Usando valor padrão ao acessar uma chave que não existe no dicionário

# autores = {
#     "George Orwell": ["1984", "Animal Farm"],
#     "Harper Lee": ["To Kill a Mockingbird"],
# }

#     print(autores.get["Ray Bradbury", []])


# ---------------------------------------------------------

# CÓDIGO 2 - Declaração de listas vazias e com valores (2)

# carros = {
#     "ABC-1234": {
#         "modelo": "Fusca",
#         "ano": 1982,
#         "fabricante": "Volkswagen",
#     },
#     "XYZ-5678": {
#         "modelo": "Civic",
#         "ano": 2020,
#         "fabricante": "Honda",
#     },
#     "LMN-9876": {
#         "modelo": "F-150",
#         "ano": 2022,
#         "fabricante": "Ford",
#     },
# }
# for placa in carros:
#     print(f"{placa} - {carros[placa].get('fabricante')} | {carros[placa].get('modelo')}")


# ---------------------------------------------------------
