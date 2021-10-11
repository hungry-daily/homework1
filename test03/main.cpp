#include <iostream>
#include "calculator.cpp"
#include "Average.cpp"
#include <stdio.h>
using namespace std;

int main()
{
	int choice;
	cout << "请选择功能：四则运算请按1  均值方差请按2" << endl;
	cin >> choice;
	switch (choice)
	{
	case 1:
	{
		Calculator<double> cal;
		char Infix[MAX_EXP_LEN], Postfix[MAX_EXP_LEN];
		gets_s(Infix);
		double sum;

		cal.Infix2Postfix(Infix, Postfix);
		sum = cal.Calculation(Postfix);
		printf("最终计算结果为：%f\n\n", sum);
		break;
	}

	case 2:
	{
		double v;
		vector <double> data;

		cout << "please enter a list of number ( Enter any character to leave): ";
		while (cin >> v) {
			data.push_back(v);
		}
		double ans = mean(data);
		double ans2 = stddev(data);
		cout << " The mean is " << ans << endl;
		cout << " The standard deviation is " << ans2 << endl;
		break;
	}

	default:
		break;
	}
	
	return 0;
}