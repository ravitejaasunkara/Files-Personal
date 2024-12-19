class Sample extends Thread{
    @Override
    public void run(){
        System.out.println("Thread is running");
    }
}
public class Threads {
    public static void main(String[] args) {
        // System.out.println(Thread.currentThread().getName());
        // System.out.println(Thread.currentThread().isAlive());
        // System.out.println(Thread.currentThread().getPriority());
        Sample s = new Sample();
        s.start();
        System.out.println(s.isAlive());
        s.setDaemon(true);
        System.out.println(s.isDaemon());
    }
}
