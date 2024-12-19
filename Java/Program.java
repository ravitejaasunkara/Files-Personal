public class Program {
    public static void main(String[] args) {
        int[] a = {1,2,3,4,5,6,0};
        int max = Integer.MAX_VALUE;
        for(int i: a){
            if(i < max )
                max = i;
        }
        System.out.println(max);
    }
}
