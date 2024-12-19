public class Singleton {
    public static void main(String[] args) {
        Abc abc = Abc.getInstance();
        Abc def = Abc.getInstance();
        abc.display();
        def.display();
    }
}

class Abc {
    static Abc abc = new Abc();

    private Abc() {};

    public static Abc getInstance() {
        return abc;
    }

    public void display() {
        System.out.println("created singleton class.");
    }
}
