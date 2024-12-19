import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Example implements Serializable{
    String name;
    String password;
}
public class Serialization {
    public static void main(String[] args) throws FileNotFoundException,IOException {
        Example ex = new Example();
        ex.name = "raviteja.sunkara";
        ex.password = "Raviteja552@";
        FileOutputStream fos = new FileOutputStream("example.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(ex);
        oos.close();
        System.out.println("Serialization done!!");
    }
}
