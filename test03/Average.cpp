
#include<iostream>
#include"average.h"

using namespace std;

double Average::mean(vector<double>&data)
{
	double ans = 0.0;
	for (int i = 0; i < data.size(); i++) {
		ans += data[i];
	}
	ans = ans / data.size();
	return ans;
}

double Average::stddev(vector<double>&data)
{
	double a1 = mean(data);
	double a2 = 0.0;
	for (int i = 0; i < data.size(); i++) {
		a2 = (a1 - data[i]) * (a1 - data[i]);
	}
	a2 = sqrt(a2 / data.size());
	return a2;	
}