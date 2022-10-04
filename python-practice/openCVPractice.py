# ■デスクトップ上の画像をテンプレートマッチングで認識してクリックする(例:ゴミ箱等)
# https://code-graffiti.com/opencv-template-matching-in-python/
import pyautogui as pg
import cv2

# デスクトップのスクリーンショット画像を読み込む
full_img = cv2.imread("images/desktop.png")
full_img = cv2.cvtColor(full_img, cv2.COLOR_BGR2RGB)

# ごみ箱の画像を読み込む
trashCan_img = cv2.imread("images/trashCan.png")
trashCan_img = cv2.cvtColor(trashCan_img, cv2.COLOR_BGR2RGB)

height, width, channels = trashCan_img.shape

# テンプレートマッチングでデスクトップのスクリーンショット画像のうち、ごみ箱の部分を赤枠で囲った画像を表示する
method = eval("cv2.TM_CCOEFF")

res = cv2.matchTemplate(full_img, trashCan_img, method)
min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)

# ごみ箱の位置をダブルクリックする
pg.click(
    x=max_loc[0] + width / 2,
    y=max_loc[1] + height / 2,
    clicks=2,
    interval=0,
    button="left",
)
