# video

# def listar_tarefas():
#     arquivo_tarefas = open(
#         "tarefas.txt",
#         mode="r",
#         encoding="utf-8",
#     )
#     print("Tarefas: ")
#     print(arquivo_tarefas.read())


# with open(
#     "tarefas.txt",
#     mode="a",
#     encoding="utf-8",
# ) as arquivo_tarefas:
#     arquivo_tarefas.write("\n- Preaparar café")
#     arquivo_tarefas.close()

# listar_tarefas()

# Material


def carregar_usuarios():
    try:
        with open(
            "usuarios.txt",
            mode="r",
            encoding="utf-8",
        ) as usuarios_file:
            usuarios = usuarios_file.read().splitlines()
        return usuarios
    except FileNotFoundError as exception:
        print("O arquivo usuarios.txt não existe!")
        exit(1)
    except Exception as exception:
        print(f"Erro inesperado: {exception}")
        exit(1)
