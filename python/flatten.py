from hashlib import new


l = [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]


def flatten(arr: list, newarr=[]) -> list:
    for i in arr:
        if type(i) == type([]):
            newarr.extend(flatten(i, newarr=[]))
        else:
            newarr.append(i)
    return newarr


r = [[1, 2],[[5,6,7]], [3, 4], [5, 6, 7]]


def reverse(arr):
    arr.reverse()
    for i in arr:
        if type(i)==type([]):
           reverse(i)
    return arr

print(reverse(r))
