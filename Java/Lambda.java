@FunctionalInterface
interface Add {
    int sum(int x,int y);
}
public class Lambda {
    public static void main(String[] args) {
        Add add = (x,y) -> x+y;
        int sum = add.sum(2, 3);
        System.out.println(sum);
//        String[] arr = new String[4];
//        main(arr);
    }

}
