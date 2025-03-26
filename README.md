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



# 🔫 Русская рулетка - сочная реализация

```python
import random
import time
import sys
from colorama import init, Fore, Back, Style
import pygame

# Инициализация цветовывода и звука
init(autoreset=True)
pygame.mixer.init()

# Звуковые эффекты
try:
    shot_sound = pygame.mixer.Sound("shot.wav")  # Создайте файл или ударите эту строку
    click_sound = pygame.mixer.Sound("click.wav")  # Создайте файл или ударите эту строку
except:
    print(Fore.YELLOW + "Звуковые эффекты не найдены, игра продолжится без них")

class Revolver:
    def __init__(self, chambers=6):
        self.chambers = chambers
        self.bullet_position = random.randint(1, chambers)
        self.current_position = 1
    
    def spin(self):
        """Крутим барабан"""
        self.bullet_position = random.randint(1, self.chambers)
        self.current_position = 1
        print(Fore.CYAN + "\nБарабан крутится...")
        time.sleep(2)
        print(Fore.GREEN + "Барабан остановился. Готов к выстрелу.")
        return self
    
    def trigger_pull(self):
        """Нажатие на курок"""
        print(Fore.WHITE + Back.RED + "\nПалец на спусковом крючке...")
        time.sleep(1.5)
        
        if self.current_position == self.bullet_position:
            print(Fore.RED + Back.WHITE + "БАХ!!!")
            try:
                pygame.mixer.Sound.play(shot_sound)
            except:
                pass
            time.sleep(1)
            print(Fore.RED + "Ты проиграл. Игра окончена.")
            self._show_bloody_animation()
            return False
        else:
            print(Fore.GREEN + "*Щелк*")
            try:
                pygame.mixer.Sound.play(click_sound)
            except:
                pass
            time.sleep(1)
            print(Fore.YELLOW + "Повезло... на этот раз.")
            self.current_position += 1
            if self.current_position > self.chambers:
                self.current_position = 1
            return True
    
    def _show_bloody_animation(self):
        """Анимация 'крови' после проигрыша"""
        blood = [Fore.RED + "✖", Fore.RED + "✗", Fore.RED + "✘", Fore.RED + "💀"]
        for _ in range(15):
            print(random.choice(blood), end=" ")
            sys.stdout.flush()
            time.sleep(0.1)
        print("\n")

def get_player_choice():
    """Получаем выбор игрока"""
    print("\n" + Fore.MAGENTA + "Выбери действие:")
    print(Fore.BLUE + "1. Крутить барабан")
    print(Fore.BLUE + "2. Нажать курок")
    print(Fore.RED + "3. Выйти")
    
    while True:
        choice = input(Fore.WHITE + "> ")
        if choice in ("1", "2", "3"):
            return int(choice)
        print(Fore.RED + "Неверный выбор. Попробуй еще раз.")

def show_intro():
    """Крутое интро"""
    print(Fore.RED + """
    ██████╗ ██╗   ██╗███████╗███████╗██╗ █████╗ ██╗   ██╗    ██████╗ ██╗   ██╗██╗     ███████╗████████╗
    ██╔══██╗██║   ██║██╔════╝██╔════╝██║██╔══██╗██║   ██║    ██╔══██╗██║   ██║██║     ██╔════╝╚══██╔══╝
    ██████╔╝██║   ██║███████╗███████╗██║███████║██║   ██║    ██████╔╝██║   ██║██║     █████╗     ██║   
    ██╔══██╗██║   ██║╚════██║╚════██║██║██╔══██║╚██╗ ██╔╝    ██╔══██╗██║   ██║██║     ██╔══╝     ██║   
    ██║  ██║╚██████╔╝███████║███████║██║██║  ██║ ╚████╔╝     ██║  ██║╚██████╔╝███████╗███████╗   ██║   
    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚═╝╚═╝  ╚═╝  ╚═══╝      ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝   ╚═╝   
    """)
    time.sleep(2)
    print(Fore.WHITE + "Добро пожаловать в русскую рулетку!")
    print(Fore.YELLOW + "Ты готов испытать судьбу?")
    time.sleep(1)

def main():
    show_intro()
    revolver = Revolver()
    alive = True
    
    while alive:
        choice = get_player_choice()
        
        if choice == 1:
            revolver.spin()
        elif choice == 2:
            alive = revolver.trigger_pull()
        elif choice == 3:
            print(Fore.GREEN + "Ты выбрал жизнь. До свидания!")
            break
    
    print(Fore.RED + "\nИгра завершена. Спасибо за игру!")

if __name__ == "__main__":
    main()
```

## Особенности этой реализации:

1. **Сочная графика** - используется цветной вывод, псевдографика и анимации
2. **Реалистичная механика**:
   - Барабан револьвера крутится перед каждым раундом
   - Пуля размещается случайным образом
   - Есть имитация задержки перед выстрелом

3. **Драматические эффекты**:
   - Кровавая анимация при проигрыше
   - Звуковые эффекты (если добавите файлы shot.wav и click.wav)
   - Эмоциональные текстовые сообщения

4. **Интерактивное меню**:
   - Возможность крутить барабан
   - Возможность нажать курок
   - Возможность выйти в любой момент

Для работы кода потребуются библиотеки:
```
pip install colorama pygame
```

Если хотите еще больше "сочности", можно добавить:
- Больше анимаций
- Систему ставок
- Мультиплеер
- Статистику выживания
- Разные уровни сложности

Хотите, чтобы я добавил что-то из этого? 😈