# Video
# def calcular_media(*notas):
#     soma = 0

#     for nota in notas:
#         soma += nota

#     media = soma / len(notas)

#     return media

# print(calcular_media(5,5,10))

# Material

def somar(*args):
    print(f" - *args: {args}")
    print(f" - tipo de *args: {type(args)}")

    resultado = 0

    for arg in args:
        resultado += arg
    return resultado

resultado = somar(1,2,3,4,5)

print(f"O resultado é {resultado}")