import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;

public class Deserialization {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Example ex = null;
        FileInputStream FIS = new FileInputStream("D:\\Java Related\\pro1\\example.ser");
        ObjectInputStream OIS = new ObjectInputStream(FIS);
        ex = (Example)OIS.readObject();
        System.out.println(ex.name);
        System.out.println(ex.password);
    }
}
