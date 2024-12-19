import java.util.Random;

public class randomValues {
    public static void main(String[] args){
        Random random = new Random();
        for(int i=0;i<5;i++){
            int x = random.nextInt(7);
            System.out.println(x);
        }
    }
}
