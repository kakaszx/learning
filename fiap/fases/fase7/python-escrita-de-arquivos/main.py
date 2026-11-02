def listar_tarefas():
    arquivo_tarefas = open(
        "tarefas.txt",
        mode="r",
        encoding="utf-8",
    )

    print("Tarefas: ")
    print(arquivo_tarefas.read())


arquivo_tarefas = open(
    "tarefas.txt",
    mode="a",
    encoding="utf-8",
)

arquivo_tarefas.write("\n- Preparar café")
arquivo_tarefas.close()

listar_tarefas()
