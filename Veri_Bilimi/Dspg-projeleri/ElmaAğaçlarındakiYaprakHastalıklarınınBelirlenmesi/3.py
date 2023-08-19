import pandas as pd
import cv2 as cv
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image


train_data = pd.read_csv("data/train.csv")
test_data = pd.read_csv("data/test.csv")

train_data["image"] = train_data['image_id'].apply(
    lambda name: Image.open(f"data/images/{name}.jpg").__array__())
