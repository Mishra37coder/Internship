import java.util.Scanner;
public class SumOfNNaturalNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        int sum = 0;
        //Iterating till n and adding to sum
        for (int i = 1; i <= n; i++) {
            sum += i;
        }

        System.out.print("Sum : " + sum);

        sc.close();
    }
}
