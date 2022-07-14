#include <iostream>
char* strcat(char*, char*);
char *strset(char *s, char ch);
char *strmove(char *s, int n);
int main(){

char frst[] ="first";
char scnd[] ="second";
std::cout << strcat(frst,scnd);
std::cout << strset(frst, 's') << std::endl;
std::cout << strmove(scnd, 2) << std::endl;
}
char* strcat(char* s1, char* s2){
    int countOfs1 = 0;
    while(s1[countOfs1] !='\0'){
         countOfs1 ++;
     }
    char* s3 = s1 + countOfs1;
     while(*(s2) !='\0'){
         *s3++ = *s2++;
     }
     *s3 = '\0';
 
  return s1;
}
char *strset(char *s, char ch)
{
    int count = 0;
    while (*(s + count) != '\0')
    {
        *(s + count) = ch;
        count++;
    }
    return s;
}

char *strmove(char *s, int n)
{
    int count = 0;
    while (*(s + count) != '\0')
    {
        count++;
    }

    char* s3 = new char[count+1];

    while (n > count)
    {
        n = n - count;
    }

    for (int i = 0; i < count; i++)
    {
        if (n + i < count)
        {
            s3[n + i] = *(s + i);
        }
        else
        {
            s3[n + i - count] = *(s + i);
        }
    }
    s3[count] = '\0';

    return s3;
}