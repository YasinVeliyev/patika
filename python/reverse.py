"""
Verilen listenin içindeki elemanları tersine döndüren bir fonksiyon yazın. 
Eğer listenin içindeki elemanlar da liste içeriyorsa onların elemanlarını da tersine döndürün. 
Örnek olarak:
    input: [[1, 2], [3, 4], [5, 6, 7]]
    output: [[7, 6, 5], [4, 3], [2, 1]]
"""


def reverse(arr):
    arr.reverse()
    for i in arr:
        if type(i) == type([]):
            reverse(i)
    return arr


r = [[1, 2], [[5, 6, 7]], [3, 4], [5, 6, 7]]
print(reverse(r))  # [[7, 6, 5], [4, 3], [[7, 6, 5]], [2, 1]]
