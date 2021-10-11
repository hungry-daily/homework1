#ifndef Average_H
#define Average_H

#include<vector>;
using namespace std;

class Average
{
public:
	double mean(vector<double>&data);
	double stddev(vector <double>& data);

private:
	vector<double>data;

};



#endif // !Average



