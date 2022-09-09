# 以下のサイトの内容をPythonで書き換えます
# http://www.kitako.tokyo/lib/CTask.aspx

# 注意点：pip install 〇〇 --user にしないとコケる

# 1 ～ 6 の数字を 10 回表示する(上記と同じページ)
# from random import randrange

# count = 0
# while count < 10:
#     print(randrange(1, 7, 1))
#     count += 1

# レーダー<http://www.kitako.tokyo/lib/CTask.aspx?id=1>
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
#         print("おめでとう！" + str(count) + "回目で正解です！")
#         while True:
#             continueGame = input("もう一度やりますか？（1=Yes 0=No）")
#             if continueGame == "0":
#                 break
#             elif continueGame == "1":
#                 count = 0
#                 break
#             else:
#                 print("0か1の数字を入力してください")
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

# すごろく<http://www.kitako.tokyo/lib/CTask.aspx?id=2>
