import java.util.*;

public class Collections {
    public static void main(String[] args) {
        List<String> linkedList = new LinkedList<>();
        linkedList.add("hello");
        linkedList.add("world");
        System.out.println(linkedList);

        Set<String> hashSet = new HashSet<>();
        hashSet.add("apple");
        hashSet.add("banana");
        hashSet.add("cherry");
        System.out.println(hashSet);

        Map<String,String> map = new Hashtable();

        Iterator it = linkedList.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }

    }
}
