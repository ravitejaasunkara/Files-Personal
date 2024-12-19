class Thread1 extends Thread{
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Thread #1 : "+i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("Thread1 Finished!!");
    }
}
class Runnable1 implements Runnable{

    @Override
    public void run() {
        for (int i = 10; i > 0; i--) {
            System.out.println("Thread #2 : "+i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(1/0);
        }
        System.out.println("Thread2 Finished!!");
    }
    
}
public class Multithreading {
    public static void main(String[] args) {
        // Normal Thread Creation
        Thread1 thread1 = new Thread1();
        // Thread implemented from runnable interface
        Runnable1 runnable1 = new Runnable1();
        Thread thread2 = new Thread(runnable1);

        thread1.start();
        thread2.start();

    }
}
