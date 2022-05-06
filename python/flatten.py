
def flatten(arr: list, newarr=[]) -> list:
    for i in arr:
        if type(i) == type([]):
            newarr.extend(flatten(i, newarr=[]))
        else:
            newarr.append(i)
    return newarr


l = [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]
print(flatten(l))  # [1, 'a', 'cat', 2, 3, 'dog', 4, 5]


def reverse(arr):
    arr.reverse()
    for i in arr:
        if type(i) == type([]):
            reverse(i)
    return arr


r = [[1, 2], [[5, 6, 7]], [3, 4], [5, 6, 7]]
print(reverse(r))  # [[7, 6, 5], [4, 3], [[7, 6, 5]], [2, 1]]
