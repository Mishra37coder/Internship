import java.util.Scanner;
public class AddTwoNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter A: ");
        int a = sc.nextInt();
        System.out.print("Enter B: ");
        int b = sc.nextInt();
        //Adding a & b and Storing in c
        int c = a + b;
        System.out.println("Sum = " + c);
        sc.close();
    }
}
