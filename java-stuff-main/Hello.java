class Hello{
    public static void main(String[] args){
        int primeLimit = 30;
        int flag = 0;
        float x = 3.14f;
        for(int i = 1;i <= primeLimit;i++){
            for(int j = 2;j <= i/2;j++){
                if(i%j == 0){
                    flag = 1;
                    break;
                }
            }
            if(flag == 0){
                System.out.println(i+" Prime number");
            }else{
                System.out.println(i+" is not prime number");
            }
            flag = 0;
        }
    }
}