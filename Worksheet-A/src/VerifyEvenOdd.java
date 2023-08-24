import java.util.Scanner;
public class VerifyEvenOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        //Number on dividing by 2 gives remainder as 0 is Even else Odd 
        if (n % 2 == 0) {
            System.out.print("Even");
        }else {
            System.out.print("Odd");
        }
    }
}
