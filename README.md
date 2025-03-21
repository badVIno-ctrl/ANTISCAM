# ANTISCAM
новый проект для поиска мошенников в интернете. 


https://badvino-ctrl.github.io/ANTISCAM/






find_max_min_even(arr):
    even_positives = [x for x in arr if x > 0 and x % 2 == 0]
    if not even_positives:
        print("Нет чётных положительных элементов.")
    else:
        print(f"Максимальный: {max(even_positives)}, Минимальный: {min(even_positives)}")

# Пример использования:
arr = list(map(int, input("Введите массив: ").split()))
find_max_min_even(arr)



def count_max_elements(arr):
    max_val = max(arr)
    count = arr.count(max_val)
    print(f"Количество элементов с максимальным значением: {count}")

# Пример использования:
arr = list(map(int, input("Введите массив: ").split()))
count_max_elements(arr)



