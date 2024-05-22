function getGrade (s1, s2, s3) {
    // Code here
    let sum = (s1 + s2 + s3)/3;
    switch (true){
        case sum<60:
        return "F";
        case sum<70:
        return "D";
        case sum<80:
        return "C";
        case sum<90:
        return "B";
        default:
        return "A"
    }
  }