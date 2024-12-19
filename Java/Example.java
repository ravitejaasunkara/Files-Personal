import java.util.*;
import java.util.function.Consumer;
import java.util.stream.Collectors;

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() { return age; }
}


public class Example {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        List<String> uppercase = names.stream().map(String::toUpperCase).collect(Collectors.toList());
        System.out.println(uppercase);

        //System.out.println(names.stream().peek());

        List<Person> people = Arrays.asList(
                new Person("Alice", 30),
                new Person("Bob", 25),
                new Person("Charlie", 35),
                new Person("David", 40)
        );

        System.out.println(people.stream().map(Person::getName).collect(Collectors.toList()));

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 5, 5, 6, 7, 6);

        List<Integer> squaredNumbers = numbers.stream()
                .filter(num -> num % 2 != 0)
                .map(item -> item * item)
                .sorted()
                .collect(Collectors.toList());

        //List<Integer> collect = numbers.stream().map(this::modify).collect(Collectors.toList());

        System.out.println("multiple operations - " + squaredNumbers);

        System.out.println("distinct() - " + numbers.stream().distinct().collect(Collectors.toList()));

        System.out.println("limit() - " + numbers.stream().limit(4).collect(Collectors.toList()));

        System.out.println("skip() - " + numbers.stream().skip(4).collect(Collectors.toList()));

        names.stream().filter(item -> item.startsWith("A")).forEach(item -> System.out.println(item));

        System.out.println(numbers.stream().noneMatch(n -> n > 0));

        System.out.println(numbers.stream().allMatch(n -> n > 0));

        System.out.println(numbers.stream().anyMatch(n -> n == 4));

        System.out.println(names.stream().count());

        List<Integer> numberss = Arrays.asList(1, 2, 3, 4, 5);

        Optional<Integer> product = numberss.stream().reduce((a, b) -> a * b);

        product.ifPresent(result -> System.out.println("Product: " + result));


        List<Double> orderAmounts = Arrays.asList(100.50, 200.75, 300.00, 150.25, 400.10);

        // Using reduce to calculate the total revenue
        Optional<Double> totalRevenue = orderAmounts.stream()
                .reduce((subtotal, amount) -> {
                    System.out.println("amount:"+amount+"| subtotal:"+subtotal);
                    return (subtotal + amount);
                }); // Starting with 0.0 as the identity value

        System.out.println("Total Revenue: " + totalRevenue);  // Output: Total Revenue: 1151.60


        //System.out.println(collect);

        List<Integer> ravi = Arrays.asList(1, 2, 3, 4, 5, 6);

        Integer max = ravi.stream().reduce(Integer::max).orElse(null);

        Integer min = ravi.stream().reduce(Integer::min).orElse(null);

        System.out.println("max:"+max+"|min:"+min);

        List l = new Vector();

        Consumer<Integer> m = (n) -> {
            System.out.println(n);
        };

        ravi.forEach(m);

        List<Person> peoples = new ArrayList<>();
        peoples.add(new Person("Alice", 30));
        peoples.add(new Person("Bob", 25));
        peoples.add(new Person("Charlie", 35));

        peoples.stream()
                .sorted(Comparator.comparingInt(Person::getAge))
                .toList()
                .forEach(System.out::println);

        List<Integer> list = new Stack<>();
    }

    public int modify(Integer i) {
        return i + i;
    }
}
