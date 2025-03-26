# ANTISCAM
новый проект для поиска мошенников в интернете. 


https://badvino-ctrl.github.io/ANTISCAM/






# Решение задач на Python

## Задача «А»: Найти минимальный и максимальный элементы массива

```python
import random

# Создаем массив из 5 случайных чисел от 1 до 10
array = [random.randint(1, 10) for _ in range(5)]

# Находим минимальный и максимальный элементы
min_element = min(array)
max_element = max(array)

# Выводим результаты
print("Массив:")
print(' '.join(map(str, array)))
print("\nМинимальный элемент:")
print(f"A[{array.index(min_element) + 1}]={min_element}")
print("Максимальный элемент:")
print(f"A[{array.index(max_element) + 1}]={max_element}")
```

## Задача «В»: Найти максимальный элемент и второй максимум

```python
import random

# Создаем массив из 5 случайных чисел от 1 до 10
array = [random.randint(1, 10) for _ in range(5)]

# Находим уникальные элементы и сортируем их по убыванию
unique_sorted = sorted(list(set(array)), reverse=True)

# Выводим массив
print("Массив:")
print(' '.join(map(str, array)))

# Выводим максимальный элемент
print("\nМаксимальный элемент:")
max_indices = [i+1 for i, x in enumerate(array) if x == unique_sorted[0]]
for idx in max_indices:
    print(f"A[{idx}]={unique_sorted[0]}")

# Выводим второй максимум, если он существует
if len(unique_sorted) > 1:
    print("Второй максимум:")
    second_max_indices = [i+1 for i, x in enumerate(array) if x == unique_sorted[1]]
    for idx in second_max_indices:
        print(f"A[{idx}]={unique_sorted[1]}")
else:
    print("Второго максимума нет - все элементы одинаковые")
```

### Примечания:
1. В обеих задачах создается массив из 5 случайных чисел от 1 до 10.
2. В задаче «А» находятся и выводятся минимальный и максимальный элементы с их индексами.
3. В задаче «В» сначала находятся все уникальные значения, затем сортируются по убыванию, чтобы определить первый и второй максимумы.
4. Если в массиве несколько элементов с максимальным или вторым максимальным значением, выводятся все их индексы.
5. Если все элементы массива одинаковые (только один уникальный элемент), выводится сообщение об отсутствии второго максимума.