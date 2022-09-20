import java.io.*;
import java.util.Stack;
import java.util.StringTokenizer;
import java.util.LinkedList;
import java.util.Queue;

public class Lab2 {
    // TODO : Silahkan menambahkan struktur data yang diperlukan
    public static Queue<String> q = new LinkedList<>();   // sebagai konveyor

    private static InputReader in;
    private static PrintWriter out;

    static int geserKanan() {
        // TODO : Implementasi fitur geser kanan conveyor belt
       
        String end = q.poll();
        q.add(end);

        if(end.length() == 0  ){
            return -1;
        } else {
            return Integer.parseInt(end.split(", ", 10)[end.split(", ", 10).length -1]);
        }
        
    }

    static int beliRasa(int rasa, int x) {
        // TODO : Implementasi fitur beli rasa, manfaatkan fitur geser kanan
        int index = -1;
        for(int z = 0; z < q.size(); z++){
            geserKanan();
            String myToples = q.peek();
            if(Integer.parseInt((myToples.split(", ", x)[myToples.split(", ", x).length-1])) == rasa){
                index = z;
            }
        } // dapat yang paling dekat

        if(index == -1){
            return -1;
        } else {
            for(int p = 0; p < index; p++){
                geserKanan();
            }

            String[] getToples = (q.poll()).split(", ", x);
            Stack<Integer> newToples = new Stack<>();

            for(int p = 0; p < getToples.length; p++){
                newToples.add(Integer.parseInt(getToples[p]));
            }

            q.add((newToples.toString()).substring(1, newToples.toString().length()-1));

            return Integer.parseInt(getToples[getToples.length -1]);
        }

    }

    public static void main(String[] args) {
        InputStream inputStream = System.in;
        in = new InputReader(inputStream);
        OutputStream outputStream = System.out;
        out = new PrintWriter(outputStream);
        
        int N = in.nextInt();   // banyak toples
        int X = in.nextInt();   // banyak kue per toples
        int C = in.nextInt();   // banyak query yang akan dijalankan 


        for (int i = 0; i < N; ++i) {

            // TODO: Inisiasi toples ke-i
            Stack<Integer> ofToples = new Stack<Integer>();

            for (int j = 0; j < X; j++) {

                int rasaKeJ = in.nextInt();

                // TODO: Inisiasi kue ke-j ke dalam toples ke-i
                ofToples.add(rasaKeJ);
            }
            
            q.add((ofToples.toString()).substring(1, (ofToples.toString().length()) - 1 ));
        }



        for (int i = 0; i < C; i++) {
            String perintah = in.next();
            if (perintah.equals("GESER_KANAN")) {
                out.println(geserKanan());
            } else if (perintah.equals("BELI_RASA")) {
                int namaRasa = in.nextInt();
                out.println(beliRasa(namaRasa, X));
            }
        }
        out.close();
    }
    // taken from https://codeforces.com/submissions/Petr
    // together with PrintWriter, these input-output (IO) is much faster than the usual Scanner(System.in) and System.out
    // please use these classes to avoid your fast algorithm gets Time Limit Exceeded caused by slow input-output (IO)
    static class InputReader {
        public BufferedReader reader;
        public StringTokenizer tokenizer;

        public InputReader(InputStream stream) {
            reader = new BufferedReader(new InputStreamReader(stream), 32768);
            tokenizer = null;
        }

        public String next() {
            while (tokenizer == null || !tokenizer.hasMoreTokens()) {
                try {
                    tokenizer = new StringTokenizer(reader.readLine());
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
            return tokenizer.nextToken();
        }

        public int nextInt() {
            return Integer.parseInt(next());
        }

    }
}