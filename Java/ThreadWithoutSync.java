class Counter {
    private int count;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class ThreadWithoutSync {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Runnable task = () -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        };

        // Create two threads
        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);

        // Start threads
        thread1.start();
        thread2.start();

        // Wait for threads to complete
        thread1.join();
        thread2.join();

        // Print final count
        System.out.println("Count without synchronization: " + counter.getCount());
    }
}
