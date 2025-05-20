# ANTISCAM
новый проект для поиска мошенников в интернете. 


https://badvino-ctrl.github.io/ANTISCAM/



Вот пример кода на Python, который позволяет отправлять вопросы из консоли в Mistral AI через API и получать ответы обратно в консоль:

---

### ✅ Требования:
1. Установите библиотеку requests (если еще не установлена):
  
   pip install requests
   
2. Замените YOUR_API_KEY на ваш реальный API-ключ от Mistral AI.

---

### 🧠 Пример кода:

import requests
import json

# === Настройки ===
API_KEY = "DlWJGSjUANbZ5tRjXI3nHhA8AC6S44OX"  # <-- замените на свой ключ
API_URL = "https://api.mistral.ai/v1/chat/completions"
MODEL_NAME = "mistral-large-latest"

HEADERS = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

def send_query_to_mistral(prompt: str) -> str:
    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.7
    }

    try:
        response = requests.post(API_URL, headers=HEADERS, data=json.dumps(payload))
        response.raise_for_status()  # Проверка на ошибки HTTP
        result = response.json()
        return result['choices'][0]['message']['content']
    except requests.exceptions.RequestException as e:
        return f"[Ошибка] Не удалось получить ответ от Mistral AI:\n{e}"

def main():
    print("=== Chat с Mistral AI ===")
    print("Введите 'выход' или 'exit', чтобы завершить работу.")
    
    while True:
        user_input = input("\nВы: ")
        if user_input.lower() in ['выход', 'exit', 'quit']:
            print("Завершение работы...")
            break
        
        print("\nMistral думает... 🤔")
        answer = send_query_to_mistral(user_input)
        print(f"\nMistral ({MODEL_NAME}):")
        print(answer)

if __name__ == "__main__":
    main()
---

### 📌 Как работает:
- Вы запускаете скрипт.
- Вводите текст в консоль.
- Программа отправляет запрос к Mistral AI через API.
- Ответ от модели выводится в консоль.

---

### 💡 Пример использования:
Вы: Расскажи мне о теории относительности.

Mistral (mistral-large-latest):
Теория относительности — это физическая теория, разработанная Альбертом Эйнштейном...
---

Если нужно добавить поддержку контекста (чтобы модель помнила предыдущие сообщения), могу показать как расширить этот код.





