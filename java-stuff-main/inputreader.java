import java.util.Scanner;

public class inputreader{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter the value for x : ");
        int x = s.nextInt();
        System.out.println(x);
        s.close();
    }
}