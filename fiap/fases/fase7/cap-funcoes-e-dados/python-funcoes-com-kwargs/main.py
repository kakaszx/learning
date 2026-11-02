# Video

# def minha_funcao(nome, **informacoes_adicionais):
#    print("Olá, " + nome)

#    if "nota_tp" not in informacoes_adicionais:
#       print("O TP não foi encotrado")
#       return
#    if informacoes_adicionais.get("nota_tp") > 7:
#       print("Parabens, você foi aprovado no TP")
#    else:
#       print("Infelizmente, você não foi aprovado no TP")
    
#    print(informacoes_adicionais)
# minha_funcao("Aluno", nota_tp = 10)

# Material
def somar(*args, **kwargs):
   print(f" - *kwargs: {kwargs}")
   print(f" - tipo de *kwargs: {type(kwargs)}")

   resultado = sum(args)

   if "acrescimo" in kwargs:
      resultado += resultado * kwargs["acrescimo"]

   return resultado

resultado = somar(4, 2, acrescimo=0.25)

print(f"O resultado é {resultado}")