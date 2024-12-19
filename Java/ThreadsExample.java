class A extends Thread {
    public void run() {
        for(int i = 0;i < 100;i++) {
            System.out.println("Class A");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}

class B extends Thread {
    public void run() {
        for(int i = 0;i < 100;i++) {
            System.out.println("Class B");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}



public class ThreadsExample {
    public static void main(String[] args) {
        A a = new A();
        B b = new B();

        a.start();
        b.start();
    }
}
