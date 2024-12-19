
@FunctionalInterface
interface FuncInterf{
    int sum(int a,int b);

}

public class FuncInt {
    public static void main(String[] args) {
        FuncInterf total = (x,y) -> (x+y);
        System.out.println(total.sum(5,10));
    }
}


