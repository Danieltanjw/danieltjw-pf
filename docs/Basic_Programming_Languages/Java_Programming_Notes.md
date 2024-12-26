
# Java Notes

## 1. Introduction to Java

Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used for developing desktop, mobile, and web applications.

### Key Features:
- Platform-independent (`Write Once, Run Anywhere`).
- Object-oriented.
- Strongly typed.
- Robust with automatic garbage collection.
- Secure with a built-in security manager.

---

## 2. Setting Up Java

1. **Download Java Development Kit (JDK)**:
   - Download from [Oracle](https://www.oracle.com/java/technologies/javase-downloads.html).
2. **Install an IDE**:
   - Popular choices: IntelliJ IDEA, Eclipse, NetBeans.
3. **Verify Installation**:
   - Open a terminal and run:
     ```bash
     java -version
     javac -version
     ```

---

## 3. Java Basics

### Hello World Program
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Explanation:
- `public`: Access modifier allowing the method to be accessible everywhere.
- `static`: The method can be called without creating an object of the class.
- `void`: The method doesn't return a value.
- `main`: Entry point of any Java program.

---

## 4. Variables and Data Types

### Variable Declaration:
```java
int age = 25; // Integer
double salary = 45000.50; // Floating-point number
char grade = 'A'; // Single character
String name = "John"; // String
boolean isActive = true; // Boolean
```

### Primitive Data Types:
| Data Type  | Size     | Description           |
|------------|----------|-----------------------|
| `byte`     | 1 byte   | Stores whole numbers. |
| `short`    | 2 bytes  | Smaller integers.     |
| `int`      | 4 bytes  | Regular integers.     |
| `long`     | 8 bytes  | Large integers.       |
| `float`    | 4 bytes  | Single-precision decimals. |
| `double`   | 8 bytes  | Double-precision decimals. |
| `char`     | 2 bytes  | Single character.     |
| `boolean`  | 1 bit    | `true` or `false`.    |

---

## 5. Control Flow

### Conditional Statements
```java
if (age >= 18) {
    System.out.println("You are an adult.");
} else {
    System.out.println("You are not an adult.");
}
```

### Switch Statement
```java
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Invalid day");
}
```

---

## 6. Loops

### For Loop
```java
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}
```

### While Loop
```java
int i = 0;
while (i < 5) {
    System.out.println("Iteration: " + i);
    i++;
}
```

### Do-While Loop
```java
int i = 0;
do {
    System.out.println("Iteration: " + i);
    i++;
} while (i < 5);
```

---

## 7. Object-Oriented Programming (OOP)

### Classes and Objects
```java
class Animal {
    String name;

    void speak() {
        System.out.println(name + " says Hello!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Animal();
        dog.name = "Buddy";
        dog.speak();
    }
}
```

### Inheritance
```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
    }
}
```

---

## 8. Advanced Topics

### Multithreading
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running.");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();
    }
}
```

### Exception Handling
```java
try {
    int divideByZero = 5 / 0;
} catch (ArithmeticException e) {
    System.out.println("Arithmetic Exception: " + e.getMessage());
} finally {
    System.out.println("This block always executes.");
}
```

### Collections Framework
```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        System.out.println(list);
    }
}
```

---

## 9. Conclusion

Java is a versatile programming language with robust features that make it ideal for various applications. Its focus on simplicity, portability, and security ensures that it remains one of the most popular languages today.
