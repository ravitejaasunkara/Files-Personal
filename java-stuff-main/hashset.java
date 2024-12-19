import java.util.HashSet;

class Person{
    String name;
    int age;
    Person(String name,int age){
        this.name = name;
        this.age = age;
    }
}
public class hashset {
    public static void main(String[] args) {
        HashSet<Person> person = new HashSet<>();
        Person p1 = new Person("Ravi", 23);
        Person p2 = new Person("teja", 25);
        Person p3 = new Person("teja", 25);
        person.add(p1);
        person.add(p2);
        person.add(p3);
        for(Person p:person){
            System.out.println(p.name+"/"+p.age);
        }
    }
}
