# ■デスクトップ上の画像をテンプレートマッチングで認識してクリックする(例:ゴミ箱等)
# https://code-graffiti.com/opencv-template-matching-in-python/
import pyautogui as pg
import cv2

clickPositionX: int = 0
clickPositionY: int = 0

# デスクトップのスクリーンショット画像を読み込む
full_img = cv2.imread("images/desktop.png")
full_img = cv2.cvtColor(full_img, cv2.COLOR_BGR2RGB)

# ごみ箱の画像を読み込む
trashCan_img = cv2.imread("images/trashCan.png")
trashCan_img = cv2.cvtColor(trashCan_img, cv2.COLOR_BGR2RGB)

height, width, channels = trashCan_img.shape

# テンプレートマッチングでデスクトップのスクリーンショット画像のうち、ごみ箱の部分を赤枠で囲った画像を表示する

full_copy = full_img.copy()

method = eval("cv2.TM_CCOEFF")

res = cv2.matchTemplate(full_copy, trashCan_img, method)

min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)

top_left = max_loc

bottom_right = (top_left[0] + width, top_left[1] + height)

cv2.rectangle(full_copy, top_left, bottom_right, 255, 10)

print(width)
print(top_left)

# ごみ箱の位置を変数に格納する
# (仮の数字を格納する)

clickPositionX = top_left[0] + width / 2
print(clickPositionX)

clickPositionY = top_left[1] + height / 2
print(clickPositionY)

# clickPositionX = 10
# clickPositionY = 15

# ごみ箱の位置をダブルクリックする
pg.click(x=clickPositionX, y=clickPositionY, clicks=2, interval=0, button="left")
