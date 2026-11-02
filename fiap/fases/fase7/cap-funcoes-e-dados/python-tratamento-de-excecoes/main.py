# Video

# import sys

# try:
#     arquivo_tarefas = open(
#         "tarefas.txt",
#         mode="r",
#         encoding="utf-8",
#     )

#     print("Tarefas: ")
#     print(arquivo_tarefas.read())

#     arquivo_tarefas.close()
# except FileNotFoundError:
#     print("Crie o arquvio tareafs.txt para usar esse programa")
#     sys.exit(1)
# except Exception as exception:
#     print(f"Erro: {exception}")
#     sys.exit(1)

# Material


def carregar_usuarios():
    try:
        usuarios_file = open(
            "usuarios.txt",
            mode="r",
            encoding="utf-8",
        )

        usuarios = usuarios_file.read().splitlines()

        return usuarios
    except FileNotFoundError as exception:
        print("O arquivo usuarios.txt não existe!")
        exit(1)
    except Exception as exception:
        print(f"Erro inesperado: {exception}")
        exit(1)


def adicionar_usuario(usuario):
    try:
        usuario_file = open(
            "usuarios.txt",
            mode="a",
            encoding="utf-8",
        )

        usuario_file.write("\n" + usuario)
    except Exception as exception:
        print(f"Erro inesperado: {exception}")
        exit(1)


def listar_usuarios():
    usuarios = carregar_usuarios()

    print("usuários:")

    for usuario in usuarios:
        print(f" - {usuario}")


opcao = ""

while opcao != "0":
    print("\nOpções:")
    print(" 0: Sair")
    print(" 1: Listar usuários")
    print(" 2: Adicionar usuário")

    opcao = input("Sua opção: ")

    match opcao:
        case "0":
            print("Até mais!")
        case "1":
            listar_usuarios()
        case "2":
            novo_usuario = input("informe um novo usuário: ")
            adicionar_usuario(novo_usuario)
        case _:
            print("Opção inválida!")
