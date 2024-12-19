import java.util.Scanner;

public class inputReading {
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        System.out.println("Please enter a value");
        int x = s.nextInt();
        System.out.println("the value entered is :"+x);
    }
}
