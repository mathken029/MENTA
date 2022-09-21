# 以下のサイトの内容をPythonで書き換えます
# http://www.kitako.tokyo/lib/CTask.aspx

# 注意点：pip install 〇〇 --user にしないとコケる

# 1 ～ 6 の数字を 10 回表示する(上記と同じページ)
# from random import randrange

# count = 0
# while count < 10:
#     print(randrange(1, 7, 1))
#     count += 1

# ■レーダー<http://www.kitako.tokyo/lib/CTask.aspx?id=1>
# from random import randrange

# count = 0
# targetPosition = 0
# radarPosition = 0
# radarRange = 0

# print("☆レーダー☆")
# print("ターゲットとして 0～100 のうち１つの数が設定されます。探索する位置と範囲を入力してターゲットを見つけてください。")
# print("ターゲットと探索位置の差が探索範囲以下であればヒットです。探索範囲より大きければ、はずれです。")
# print("探索位置とターゲットが一致すれば正解です。")
# print("----------------------------------------------")
# print("ゲームを開始します。")

# while True:
#     if count == 0:
#         print("ターゲットが設定されました。")
#         targetPosition = randrange(1, 101, 1)

#     radarPosition = int(input("位置は？"))
#     radarRange = int(input("範囲は？"))

#     if radarPosition == targetPosition:
#         # 1)文字列リテラルについて下記を参照
#         # https://note.nkmk.me/python-f-strings/
#         print(f"おめでとう！{count}回目で正解です！")
#         # 2)多重ループ内のbreakの処理に注意
#         # breakはあくまで1つのループを抜けるのみ
#         # pythonにはC言語にあるようなgoto文はなく、flag等で管理する必要がある
#         endFlag = False
#         while True:
#             continueGame = input("もう一度やりますか？（1=Yes 0=No）")
#             if continueGame == "0":
#                 endFlag = True
#                 break
#             elif continueGame == "1":
#                 count = 0
#                 break
#             else:
#                 print("0か1の数字を入力してください")
#         if endFlag:
#             break
#     elif (
#         radarPosition <= targetPosition + radarRange
#         and radarPosition >= targetPosition - radarRange
#     ):
#         print("ヒットしました。")
#         count += 1
#     elif (
#         radarPosition > targetPosition + radarRange
#         or radarPosition < targetPosition - radarRange
#     ):
#         print("はずれました。")
#         count += 1
#     else:
#         print("範囲外の数字が入力されたようです。0～100の数字を入力してください")

# ■すごろく<http://www.kitako.tokyo/lib/CTask.aspx?id=2>
from random import randrange

print("\n")
print("30マス先にゴールがあります。")
print("1,2,3の3つの目を持つ特別なサイコロ10個を、好きな数だけ振って駒を進めます。")
print("ぴったり上がりに止まれば終わりです。目の数が多ければ、余った目の数だけ戻ります。")
print("----------------------------------------------\n")

gameRound: int = 1
position: int = 0
goalPosition: int = 30
goalDistance: int = 0
roadInLeftMark: str = ""
roadInRightMark: str = ""
mark: str = "▲"
road: str = "_ "
goal: str = "|上がり！"
diceAmount: int = 0
dice: int = 0
diceSum: int = 0
gameContinueFlag: str = "1"

while True:
    goalDistance = goalPosition - position
    roadInLeftMark = road * (position)
    roadInRightMark = road * (goalDistance)

    print(f"{roadInLeftMark}{mark}{roadInRightMark}{goal}")

    diceAmount = int(input(f"残り{goalDistance}マスです。サイコロの数は？"))

    for i in range(diceAmount):
        dice += randrange(1, 4, 1)

    diceSum += dice
    print(f"出た目の合計  {diceSum}")

    if dice == goalDistance:
        print(f"おめでとう！！ {gameRound}回目で上がりです")

        while True:
            gameContinueFlag = input("もう一度やりますか？（0=No 1=Yes）")
            if gameContinueFlag == "0":
                break
            elif gameContinueFlag == "1":
                position = 0
                break
            else:
                print("0か1の数字を入力してください")

        if gameContinueFlag == "0":
            break

    elif dice < goalDistance:
        position += dice

    elif dice > goalDistance:
        position = goalPosition - (dice - goalDistance)

    dice = 0
    gameRound += 1

# ■ハイカード<http://www.kitako.tokyo/lib/CTask.aspx?id=3>
# from random import randrange

# money: int = 100
# gameEndMoneyThreshold: int = 1000
# rate: int = 1


# def howMuchMoney():
#     return f"所持金は{money}$ です。"


# def displayCard(cardNumber: int):
#     match str(cardNumber):
#         case "1":
#             return "｜１｜"
#         case "2":
#             return "｜２｜"
#         case "3":
#             return "｜３｜"
#         case "4":
#             return "｜４｜"
#         case "5":
#             return "｜５｜"
#         case "6":
#             return "｜６｜"
#         case "7":
#             return "｜７｜"
#         case "8":
#             return "｜８｜"
#         case "9":
#             return "｜９｜"
#         case "10":
#             return "｜１０｜"
#         case "11":
#             return "｜Ｊ｜"
#         case "12":
#             return "｜Ｑ｜"
#         case "13":
#             return "｜Ｋ｜"
#         case _:
#             return f"1～13以外の数字が格納されています：{cardNumber}"


# print("最初に１枚カードが出ますから掛け金を決めてください。")
# print("次に出るカードが前のカードと同じか大きければ、あなたの勝ちです。")
# print("掛け金が戻りますから、続けるかどうかを決めてください。")
# print("続けて勝てば掛け金は２倍になります。")
# print("以降、４倍、８倍と戻るお金が増えます。")
# print("ただし、負けるとそれまでの勝ちはなくなります。")
# print(f"所持金が無くなって破産するか、{gameEndMoneyThreshold}$ を超えるとゲーム終了です。")
# print("----------------------------------------------")
# print("ゲームを開始します。" + howMuchMoney())


# while True:
#     print("最初のカードです。")
#     firstCardNumber: int = randrange(1, 14, 1)
#     print(displayCard(firstCardNumber))

#     betMoney: int = int(input(f"いくら賭けますか？(1$ ～{money}$ )"))

#     nextGameFlag: bool = False
#     while True:
#         secondCardNumber: int = randrange(1, 14, 1)
#         print(displayCard(secondCardNumber))

#         if secondCardNumber >= firstCardNumber:
#             winMoney: int = betMoney * rate
#             print(f"あなたの勝ち。{winMoney}$ の勝ちです。\n")
#             rate *= 2

#             while True:
#                 gameContinueFlag: int = int(input(f"倍率は{rate}倍。続けますか？（1=Yes 0=No）"))
#                 if gameContinueFlag == 0:
#                     money += winMoney
#                     print(f"{howMuchMoney()}\n")
#                     nextGameFlag = True
#                     break
#                 elif gameContinueFlag == 1:
#                     break
#                 else:
#                     print("0か1の数字を入力してください")
#         elif secondCardNumber < firstCardNumber:
#             money -= betMoney
#             print(f"あなたの負け。{howMuchMoney()}\n")
#             nextGameFlag = True
#         else:
#             print(f"不正な値が含まれています。1枚目のカード：{firstCardNumber}")
#             print(f"2枚目のカード：{secondCardNumber}")
#         if nextGameFlag is True:
#             break
#     if money > 1000:
#         print(f"所持金が{money}$ で1000$ を超えたため上がりです。")
#         break
#     elif money <= 0:
#         print(f"所持金が{money}$ で0$ 以下となり破産したためゲームを終了します。")
#         break
