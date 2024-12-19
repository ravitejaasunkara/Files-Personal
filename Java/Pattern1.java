import java.util.Scanner;
public class Pattern1 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter no.of rows:");
        int count = s.nextInt();
//        for(int i = 0;i < count;i++) {
//            for(int j=0;j<=i;j++){
//                System.out.print("*");
//            }
//            System.out.println();
//        }
//        for(int i = 0;i<=count;i++) {
//            for(int j=i;j<count;j++){
//                System.out.print("x");
//            }
//            for(int j=1;j<=i;j++){
//                System.out.print("*");
//            }
//            System.out.println();
//        }

        for(int i = count;i>0;i--){
            for(int j=i;j>0;j--){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
