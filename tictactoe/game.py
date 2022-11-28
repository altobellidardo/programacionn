import random

class Player:
    def __init__(self,symbol):
        self.symbol = symbol

class Game:
    def __init__(self,symbol):
        self.turn = 1
        self.computerSymbol = symbol 
    
    def switchTurn(self):
        self.turn *= -1
    
    def computerMove(self,tablero):
        if tablero[0] == [str(symbol),str(symbol),str(symbol)]:
            print("lleno")
        
        print(f"The computer selected {computerOption}")

symbol = input("What symbol do you want?: ")
player = Player(symbol)
game = Game("O")

tablero = [["1","2","3"],["4","5","6"],["7","8","9"]]

while True:
    line1 = tablero[0][0]+" "+tablero[0][1]+" "+tablero[0][2]
    line2 = tablero[1][0]+" "+tablero[1][1]+" "+tablero[1][2]
    line3 = tablero[2][0]+" "+tablero[2][1]+" "+tablero[2][2]
    print(line1)
    print(line2)
    print(line3)

    if game.turn > 0:
        option = input("What number? ")

        if option in tablero[0]:
            tablero[0][tablero[0].index(option)] = player.symbol
        elif option in tablero[1]:
            tablero[1][tablero[1].index(option)] = player.symbol
        elif option in tablero[2]:
            tablero[2][tablero[2].index(option)] = player.symbol
        else:
            print("Invaalid option")

        game.switchTurn()

    else:
        game.computerMove(tablero)
        game.switchTurn()