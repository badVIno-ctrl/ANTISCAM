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







Вот решения для каждой из задач на языке программирования Python:

1. **Нахождение максимального и минимального из чётных положительных элементов массива:**

```python
def find_max_min_even(arr):
    even_positives = [x for x in arr if x > 0 and x % 2 == 0]
    if not even_positives:
        print("Нет чётных положительных элементов.")
    else:
        print(f"Максимальный: {max(even_positives)}, Минимальный: {min(even_positives)}")

# Пример использования:
arr = list(map(int, input("Введите массив: ").split()))
find_max_min_even(arr)
```

2. **Количество элементов, имеющих максимальное значение:**

```python
def count_max_elements(arr):
    max_val = max(arr)
    count = arr.count(max_val)
    print(f"Количество элементов с максимальным значением: {count}")

# Пример использования:
arr = list(map(int, input("Введите массив: ").split()))
count_max_elements(arr)
```

3. **Три различных элемента, которые меньше всех остальных:**

```python
def find_three_min(arr):
    unique_sorted = sorted(list(set(arr)))
    if len(unique_sorted) >= 3:
        print(f"Три минимума: {unique_sorted[:3]}")
    else:
        print("Недостаточно уникальных элементов.")

# Пример использования:
arr = list(map(int, input("Введите массив: ").split()))
find_three_min(arr)
```

4. **Длина самой длинной последовательности стоящих рядом одинаковых элементов:**

```python
import random

def longest_sequence(arr):
    max_len = 1
    current_len = 1
    for i in range(1, len(arr)):
        if arr[i] == arr[i-1]:
            current_len += 1
            if current_len > max_len:
                max_len = current_len
        else:
            current_len = 1
    print(f"Длина самой длинной последовательности: {max_len}")

# Пример использования:
arr = [random.randint(10, 12) for _ in range(20)]
print("Массив:", arr)
longest_sequence(arr)
```

5. **Номера всех элементов, равных значению X:**

```python
import random

def find_indices(arr, x):
    indices = [i for i, val in enumerate(arr) if val == x]
    print(f"Индексы элементов, равных {x}: {indices}")

# Пример использования:
arr = [random.randint(0, 4) for _ in range(20)]
x = int(input("Введите значение X: "))
print("Массив:", arr)
find_indices(arr, x)
```

6. **Перестановка соседних элементов:**

```python
import random

def swap_neighbors(arr):
    for i in range(0, len(arr)-1, 2):
        arr[i], arr[i+1] = arr[i+1], arr[i]
    print("Массив после перестановки:", arr)

# Пример использования:
arr = [random.randint(0, 10) for _ in range(10)]
print("Исходный массив:", arr)
swap_neighbors(arr)
```

7. **Реверс для 1-ой и 2-ой половин массива:**

```python
import random

def reverse_halves(arr):
    half = len(arr) // 2
    arr[:half] = arr[:half][::-1]
    arr[half:] = arr[half:][::-1]
    print("Массив после реверса половин:", arr)

# Пример использования:
arr = [random.randint(0, 10) for _ in range(10)]
print("Исходный массив:", arr)
reverse_halves(arr)
```

8. **Реверс для части массива между элементами с индексами K и M:**

```python
import random

def reverse_between(arr, k, m):
    arr[k:m+1] = arr[k:m+1][::-1]
    print("Массив после реверса части:", arr)

# Пример использования:
arr = [random.randint(0, 10) for _ in range(10)]
k = int(input("Введите индекс K: "))
m = int(input("Введите индекс M: "))
print("Исходный массив:", arr)
reverse_between(arr, k, m)
```

Эти программы решают поставленные задачи, используя различные методы работы с массивами в Python. Вы можете адаптировать их под свои нужды или расширить функциональность.


