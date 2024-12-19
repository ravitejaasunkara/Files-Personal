class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public synchronized void withdraw(double amount) {
        // Check if sufficient balance is available
        if (amount > balance) {
            System.out.println("Insufficient funds!");
            return;
        }

        // Simulate some delay (for demonstration purposes)
        try {
            Thread.sleep(100); // Simulate processing time
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Deduct the amount from balance
        balance -= amount;
        System.out.println(Thread.currentThread().getName() + " withdrew $" + amount + ", remaining balance: $" + balance);
    }

    // Other methods: deposit, getBalance, etc.
}

class ClientThread extends Thread {
    private BankAccount account;
    private double amount;

    public ClientThread(BankAccount account, double amount) {
        this.account = account;
        this.amount = amount;
    }

    @Override
    public void run() {
        account.withdraw(amount);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);

        // Create multiple client threads to withdraw money
        ClientThread client1 = new ClientThread(account, 300);
        ClientThread client2 = new ClientThread(account, 500);
        ClientThread client3 = new ClientThread(account, 700);

        // Start the threads
        client1.start();
        client2.start();
        client3.start();
    }
}

