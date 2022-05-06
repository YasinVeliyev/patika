from hashlib import new


l = [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]

def flatten(arr:list,newarr=[]) ->list:
    for i in arr:
        if type(i)==type([]):
            newarr.extend(flatten(i,newarr=[]))
        else:
            newarr.append(i)
    return newarr
  