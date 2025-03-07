class Solution {
    public boolean isMatch(String s, String p) {
        return recurse(s.length(), p.length(), s, p);
    }

    public boolean recurse(int i, int j, String s, String p) {
        if(i<0 && j<0) return true;

        if(j<0) return false;
        if(i<0) {
            for(int k=0;k<=i;k++) {
                if(s.charAt(k)!='*') return false;
            }
            return true;
        } 

        if(s.charAt(i)==p.charAt(j) || p.charAt(j)=='?') {
            return recurse(i-1, j-1, s, p);
        }

        if(p.charAt(j)=='*') {
            return recurse(i-1, j, s, p) || recurse(i, j-1, s, p);
        }

        return false;
    }
}