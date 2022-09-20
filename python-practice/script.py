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

money: int = 100
gameEndMoneyThreshold: int = 1000
rate: int = 1


def howMuchMoney():
    return "所持金は" + str(money) + "$ です。"


def displayCard(cardNumber: int):
    match cardNumber:
        case "1":
            return "｜１｜"
        case "2":
            return "｜２｜"
        case "3":
            return "｜３｜"
        case "4":
            return "｜４｜"
        case "5":
            return "｜５｜"
        case "6":
            return "｜６｜"
        case "7":
            return "｜７｜"
        case "8":
            return "｜８｜"
        case "9":
            return "｜９｜"
        case "10":
            return "｜１０｜"
        case "11":
            return "｜Ｊ｜"
        case "12":
            return "｜Ｑ｜"
        case "13":
            return "｜Ｋ｜"
        case _:
            return "1～13以外の数字が格納されています：" + str(cardNumber)

def cardBattle():
    

print("最初に１枚カードが出ますから掛け金を決めてください。")
print("次に出るカードが前のカードと同じか大きければ、あなたの勝ちです。")
print("掛け金が戻りますから、続けるかどうかを決めてください。")
print("続けて勝てば掛け金は２倍になります。")
print("以降、４倍、８倍と戻るお金が増えます。")
print("ただし、負けるとそれまでの勝ちはなくなります。")
print("所持金が無くなって破産するか、" + str(gameEndMoneyThreshold) + "$ を超えるとゲーム終了です。")
print("----------------------------------------------")
print("ゲームを開始します。" + howMuchMoney())


# while True:
print("最初のカードです。")

firstCardNumber: int = randrange(1, 14, 1)
secondCardNumber: int = randrange(1, 14, 1)

print(displayCard(firstCardNumber))

betMoney: int = int(input("いくら賭けますか？(1$ ～" + money + "$ )"))

print(displayCard(secondCardNumber))

if secondCardNumber >= firstCardNumber:
    winMoney: int = betMoney * rate
    print("あなたの勝ち。" + winMoney + "$ の勝ちです。")
    rate *= 2
    gameContinueFlag = input("倍率は" + rate + "倍。続けますか？（1=Yes 0=No）")
    if gameContinueFlag == "0":
        money += winMoney
        print(howMuchMoney())
    elif gameContinueFlag == "1":
        # ここにwhile文でsecondCardで勝負し続ける処理を書く

    else:
        print("0か1の数字を入力してください")

elif secondCardNumber < firstCardNumber:
    money -= betMoney
    print("あなたの負け。所持金は " + str(money) + "$ です。")
else:
    print("不正な値が含まれています。1枚目のカード：" + str(firstCardNumber))
    print("2枚目のカード：" + str(secondCardNumber))
