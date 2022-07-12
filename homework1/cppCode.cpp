#include <iostream>
std::string reverse(std::string);
int strLen(char* n);
int main(){
   char wrd[6] = "hello";
   std::cout << strLength(wrd) <<std::endl;
   std::cout << reverse("hello world") << std:: endl;
}
std::string reverse(std::string word){
    char ch;
 for (int i = 0; i < word.length()/2; i++) {
      ch = word[i];
      word[i] = word[word.length()-1-i];
      word[word.length()-1-i] = ch;
   }
   return word;
};
int strLength(char* n)
{
   int count = 0;
   while(*(n+count)!= '\0'){
       count++;
   }
   return count;
};
