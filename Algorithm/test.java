import java.util.ArrayList;
import java.util.List;

public class test {
    public void miniMaxSum(int[] arr) {

        long sum = 0;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        List <Integer> evenList = new ArrayList<>();
        List <Integer> oddList = new ArrayList<>();

        for (int j : arr) {
            sum += j;
            if( j % 2 == 0){
                evenList.add(j);
            }
            else{
                oddList.add(j);
            }

            if (j < min) {
                min = j;
            }
            if (j > max) {
                max = j;
            }
        }

        long minSum = sum - max;
        long maxSum = sum - min;

        System.out.println(minSum + " " + maxSum);
    }

    public static void main(String[] args) {
        int [] a = {1,2,3,4,5};
        test t = new test();
        t.miniMaxSum(a);
    }
}
