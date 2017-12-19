/*
SYSTEM VARIABLES:
answer :: answer | Stores the answer from latest input

COMMANDS:
;$ :: ; | End of line
println "string" :: cout << "string" << endl | Prints Text
print :: GRAPHICS
goto_line :: NUL
push :: ERRESE
if{bool} command :: if(bool){command} | If Statement
then :: ERRESE
input :: getline(cin, answer)
play_sound
mark mark_name :: mark_name:do {}
goto_mark
Sprite
image
del_sprite
run_lightning
stop_lightning
sleep
import
wait
clear
printcolor
del_sprites
clearLast
stop
*/

#include <iostream>
#include <algorithm>
#include <map>
#include <vector>
#include <sstream>
//#include <windows.h> //Windows Only
#include <iterator>
#include <string>
#include <math.h>
#include <cmath>

using namespace std;

class SYSTEM
{
  public:
    int code_i = 0;
    map<string, string> vars;
    map<int, string> sys_vars;
    map<string, string> files;
    vector<string> tasks;
    vector<string> shell;
};

pair<string, vector<string> > solve(SYSTEM &system, string input, bool info);
vector<string> math_split(string str, string sep, bool include);
void set_var(SYSTEM &system, string varName, string value);
void set_sys_var(SYSTEM &system, int varName, string value);
string get_sys_var(SYSTEM &system, int varName);
vector<string> get_var_vals(SYSTEM &system, vector<string> temp);

//vector<string>
vector<string> split(const string &s, char delim) {
    stringstream ss(s);
    string item;
    vector<string> tokens;
    while (getline(ss, item, delim)) {
        tokens.push_back(item);
    }
    return tokens;
}

vector<string> split_string(string s, string delim) {
    size_t pos = 0;
    string token;
    vector<string> tokens;
    while ((pos = s.find(delim)) != string::npos) {
        token = s.substr(0, pos);
        tokens.push_back(token);
        s.erase(0, pos + delim.length());
    }
    tokens.push_back(s);
    return tokens;
}

/*string join_string(vector<string>  strings, const char* delim) {
    stringstream res;
    copy(strings.begin(), strings.end(), ostream_iterator<string>(res, delim));
    return res.str().erase(res.str().size() - delim, res.str().size());
}*/

string join_string(vector<string> strings, string delim) {
    string join = "";
    for (int i = 0; i < strings.size() - 1; i++) {
        join += strings[i] + delim;
    }
    join += strings[strings.size() - 1];
    return join;
}

int to_int(string instring) {
    stringstream convert(instring);
    int outint = 0;
    convert >> outint;
    return outint;
}

string to_string(int inint) {
    string outstring;
    ostringstream string_convert;
    string_convert << inint;
    outstring = string_convert.str();
    return outstring;
}

string float_to_str(float infloat) {
    ostringstream ss;
    ss << infloat;
    string outstring(ss.str());
    return outstring;
}

//void
void run(SYSTEM &system, vector<string> ccode) {
	//console.log(ccode);
	cout << "running" << endl;
	cout << join_string(ccode, " ") << endl;
	for (int i = 0; i < ccode.size(); i++) {
		system.tasks.push_back(ccode[i]);
	}
	while (system.tasks.size() > 0) {
        cout << system.tasks[0] << endl;
		//Run lightning
		//cout << join_string(system.tasks, ", ") << endl;
		if (system.tasks[0] == "sleep") {
			stringstream convert(system.tasks[1]);
			int time = 0;
			convert >> time;
			//Sleep(time * 1000); //Windows Only
			system.tasks.erase(system.tasks.begin() + 0, system.tasks.begin() + 1);
		}
		else if (system.tasks[0] == "println") {
			string lineJoin = "";
			for (int i = 0; i < system.tasks[1].size(); i++) {
				lineJoin += system.tasks[1][i];
				if (lineJoin.size() >= 47) {
					system.shell.push_back(lineJoin);
					lineJoin = "";
				}
			}
			system.shell.push_back(lineJoin);
			cout << system.tasks[1] << endl;
			system.tasks.erase(system.tasks.begin() + 0, system.tasks.begin() + 2);
		}
		else if (system.tasks[0] == "clearShell") {
			system.tasks.erase(system.tasks.begin() + 0);
			system.shell.clear();
		}
		else if (system.tasks[0] == "editLast") {
			system.shell[-1] = system.tasks[1];
			system.tasks.erase(system.tasks.begin() + 0, system.tasks.begin() + 2);
		}
		else if (system.tasks[0] == "sleep") {

		}
		else {
            system.tasks.erase(system.tasks.begin() + 0);
		}

	}
}

//string
string open_file(SYSTEM &system, string file) {
	if (system.files.find(file) == system.vars.end()) {
		return "println \"404: FileNotFoundError\";";
	}
	else {
        return system.files[file];
	}
}
//vector<string> parse(SYSTEM &system, string codeToParse, vector<string> args);
//vector<string>
vector<string> parse(SYSTEM &system, string codeToParse, vector<string> args) {
	//console.log(codeToParse);
	if (codeToParse == "input;") {
		getline(cin, system.vars["answer"]);
		return args;
	}
	else if (codeToParse[0] == '@') {
		//TODO
	}
	else {
		string ctp = codeToParse;
		string compileJoin = "";
		vector<string> booleans;
		string type = "none";
		int cVar = 0;
		int par_count = 1;
		vector<string> temp;
		vector<string> mtemp;
		while (cVar < ctp.size()) {
			if (ctp[cVar] == '\\') {
				if (type == "str" && ctp[cVar - 1] == '\\') {
					compileJoin += codeToParse[cVar];
				}
				else {
					compileJoin += codeToParse[cVar];
				}
			}
			else {
				compileJoin += codeToParse[cVar];
			}
			cVar++;
			if (type == "none") {
				if (ctp[cVar] == ' ') {
					if (compileJoin == "if") {
						type = "if";
						compileJoin = "";
						booleans.clear();
					}
					//Commands
					else if (compileJoin == "goto_line") {
						compileJoin = "";
						cVar += 1;
						while (ctp[cVar] != ' ' && ctp[cVar] != ';') {
							compileJoin += ctp[cVar];
							cVar += 1;
						}
						system.code_i = to_int(compileJoin);
						args.clear();
						compileJoin = "";
						cVar = ctp.size() + 1;
					}
					else if (compileJoin == "push") {
						args.clear();
                        args.push_back("!run");
						return args;
					}
					else if (compileJoin == "stop") {
						args.clear();
						args.push_back("!stop");
						return args;
					}
					else if (compileJoin == "run_file") {
						args.clear();
						string f = ctp.substr(ctp.find("run_file") + 9, ctp.size() - 9);
						if (f[0] == '(') {
                            pair<string, vector<string> > resp = solve(system, f, true);
							f = resp.first;
						}
						args.push_back("!run_file-" + f);
						return args;
					}
					else if (compileJoin == "import") {
						args.clear();
						string f = ctp.substr(ctp.find("import") + 7, ctp.size() - 7);
						if (f[0] == '(') {
                            pair<string, vector<string> > resp = solve(system, f, true);
							f = resp.first;
						}
						args.push_back("!import-" + f);
						return args;
					}
					else if (compileJoin == "mark") {
						return args;
					}
					else if (compileJoin == "goto_mark") {
						string f = ctp.substr(ctp.find("goto_mark") + 10, ctp.size() - 10);
						if (f[0] == '(') {
                            pair<string, vector<string> > resp = solve(system, f, true);
							f = resp.first;
						}
						args.push_back("!goto_mark-" + f);
						return args;
					}
					else if (compileJoin == "templ") {

					}


					else {
						args.push_back(compileJoin);
						cVar += 1;
						compileJoin = "";
					}
				}
				if (ctp[cVar] == ';') {
					args.push_back(compileJoin);
					compileJoin = "";
				}
				else if (ctp[cVar] == '"') {
					type = "str";
					cVar += 1;
					compileJoin = "";
				}
				else if (ctp[cVar] == '=') {
					if (ctp[cVar + 1] == ' ' && args.size() == 1) {
						type = "var";
						compileJoin = "";
						par_count = 1;
						cVar += 2;
					}
				}
				else if (ctp[cVar] == '(') {
					type = "math";
					compileJoin = "";
					par_count = 1;
				}
			}
			else if (type == "str") {
				if (ctp[cVar] == '"' && ctp[cVar - 1] != '\\') {
					type = "none";
					args.push_back(compileJoin);
					compileJoin = "";
					cVar += 2;
					if (ctp[cVar] = '(') {
						cVar -= 1;
					}
				}
			}
			else if (type == "math") {
				if (ctp[cVar] == '(') {
					par_count += 1;
				}
				if (ctp[cVar] == ')') {
					par_count -= 1;
					if (par_count == 0) {
						type = "none";
						//note
						pair<string, vector<string> > resp = solve(system, compileJoin + ")", true);
						string a = resp.first;
						mtemp = resp.second;
						args.push_back(a);
						compileJoin = "";
						cVar += 2;
						if (ctp[cVar] == '(') {
							cVar -= 1;
						}

					}
				}
			}
			else if (type == "var") {
				////console.log(par_count);
				if (ctp[cVar] == '(') {
					par_count++;
					////console.log(par_count);
				}
				else if (ctp[cVar] == ')') {
					par_count--;
					////console.log(par_count);
					if (par_count == 0) {
						type = "none";
						string a = "";
						temp.clear();
						//try {
							pair<string, vector<string> > resp = solve(system, compileJoin + ')', true);
							a = resp.first;
							mtemp = resp.second;
						//}
						//catch(err) {//console.log(err);}
						//finally {}
						compileJoin = "";
						math_split(a, " ", false);
						if (mtemp.size() > 1) {
							temp = split_string(a, " | ");
							if (temp.size() > 1) {}
							else {
								a = "\"" + a + "\"";
							}
						}
						set_var(system, args[0], a);
						args.clear();
						compileJoin = "";
						cVar += 2;
						if (ctp[cVar] == '(') {
							cVar -= 1;
						}

					}
				}
			}
			else if (type == "if") {
				if (ctp[cVar] == '{') {
					compileJoin = "";
					cVar += 1;
					set_sys_var(system, 1, "bool");

				}
				if (ctp[cVar] == '}') {
					booleans.push_back(compileJoin);
					compileJoin = "";
					cVar += 1;
					set_sys_var(system, 1, "none");
				}
				if (ctp[cVar] == ' ') {
					if (get_sys_var(system, 1) != "bool") {
						if (compileJoin == "then") {
							for (int var3 = 0; var3 < booleans.size(); var3++) {
								temp = split_string(booleans[var3], " == ");
								if (temp.size() > 1) {
									temp = get_var_vals(system, temp);
									if (temp[0] == temp[1]) {
										booleans[var3] = "True";
									}
									else {
										booleans[var3] = "False";
									}
								}
								else {
									temp = split_string(booleans[var3], " >= ");
									if (temp.size() > 1) {
										temp = get_var_vals(system, temp);
										if (temp[0] >= temp[1]) {
											booleans[var3] = "True";
										}
										else {
											booleans[var3] = "False";
										}
									}
									else {
										temp = split_string(booleans[var3], " <= ");
										if (temp.size() > 1) {
											temp = get_var_vals(system, temp);
											if (temp[0] <= temp[1]) {
												booleans[var3] = "True";
											}
											else {
												booleans[var3] = "False";
											}
										}
										else {
											temp = split_string(booleans[var3], " > ");
											if (temp.size() > 1) {
												temp = get_var_vals(system, temp);
												if (temp[0] > temp[1]) {
													booleans[var3] = "True";
												}
												else {
													booleans[var3] = "False";
												}
											}
											else {
												temp = split_string(booleans[var3], " < ");
												if (temp.size() > 1) {
													temp = get_var_vals(system, temp);
													if (temp[0] < temp[1]) {
														booleans[var3] = "True";
													}
													else {
														booleans[var3] = "False";
													}
												}
												else {
													temp = split_string(booleans[var3], " != ");
													if (temp.size() > 1) {
														temp = get_var_vals(system, temp);
														if (temp[0] != temp[1]) {
															booleans[var3] = "True";
														}
														else {
															booleans[var3] = "False";
														}
													}
													else {

													}
												}
											}
										}
									}
								}
							}
							compileJoin = "";
							cVar += 1;
							if ((find(booleans.begin(), booleans.end(), "False")) != booleans.end()) {
								type = "False";
							}
							else {
								type = "none";
							}
						}
						else {
							compileJoin = "";
							if (ctp[cVar + 1] != '{') {
								cVar += 1;
							}
						}
					}
				}
			}
		}
	}
	return args;
}

//vector<string>
vector<string> compile_code(SYSTEM &system, string code_in, string file, string sep) {
	//console.log(code_in);
	vector<string> code = split_string(code_in, sep);
	vector<string> ccode;
	ccode.clear();
	string codeToParse;
	system.code_i = 0;
	while (system.code_i < code.size()) {
		codeToParse = code[system.code_i];
		if (codeToParse[codeToParse.size()] == ';' && codeToParse[0] != '#') {
			//cerr << "SyntaxError on line " + to_string(system.code_i) + ": Line must end with ';'" << endl;
		}
		else { //Was "else {" before the if Statement was commented...
            vector<string> inargs;
			vector<string> args = parse(system, codeToParse, inargs);
			if (args.size() == 1) {
                if (args[0][0] == '!') {
                    if (args[0] == "!run") {
                        run(system, ccode);
                        ccode.clear();
                    }
                    else if (args[0] == "!stop") {
                        break;
                    }
                    else if (split(args[0], '-')[0] == "!run_file") {
                        run(system, ccode);
                        system.tasks.push_back("compile_run");
                        system.tasks.push_back(split(args[0], '-')[1]);
                        break;
                    }
                    else if (split(args[0], '-')[0] == "!import") {
                        vector<string> data = split_string(open_file(system, split(args[0], '-')[1]), "$ ");
                        for (int im = 0; im < data.size(); im++) {
                            code.push_back(data[im]);
                        }
                    }
                    else if (split(args[0], '-')[0] == "!goto_mark") {
                        if (find(code.begin(), code.end(), "mark " + split(args[0], '-')[1] + ';') != code.end()) {
                            int ix = find(code.begin(), code.end(), "mark " + split(args[0], '-')[1] + ';') - code.begin();
                            //console.log(ix);
                            //console.log(args.split('-')[1]);
                            system.code_i = ix;
                        } else {
                            system.code_i = code.size();
                        }
                    }
                }
                else {
                    for (int i = 0; i < args.size(); i++) {
                        ccode.push_back(args[i]);
                    }
                }
			}
			else if (args.size() > 1) {
                    for (int i = 0; i < args.size(); i++) {
                        ccode.push_back(args[i]);
                    }
                }
		}
		system.code_i++;
	}
	return ccode;
}

//vector<string>
vector<string> compile_file(SYSTEM &system, string file) {
	vector<string> ccode;
	//try {
		string code = open_file(system, file);
	//}
	//catch(err) {//console.log("Error " + err); ccode = ["println", "Error " + err];}
	//finally {}
	//try {
		ccode = compile_code(system, code, file, "$ ");
	//}
	//catch (err) {//console.log("Error " + err); ccode.push_back("println"); ccode.push_back("CompileError");}
	//finally {}
	return ccode;
}

//vector<string>
vector<string> math_split(string str, string sep, bool include) {
	int var1 = 0;
	int var2;
	string join = "";
	string join2;
	vector<string> temp;
	string splitType = "none";
	while (var1 < str.size()) {
		var2 = 0;
		join2 = "";
		for (var2 = 0; var2 < sep.size(); var2++) {
			if (splitType != "str") {
				if (str[var1 + var2] == '"') {
					if (str[var1 + var2 - 1] == '\\') {
						join2 += str[var1 + var2];
					}
					else {
						if (include) {
							join += str[var1];
						}
						splitType = "str";
						var1++;
					}
				}
				else {
					join2 += str[var1 + var2];
				}
			}
		}
		if (splitType == "str") {
			if (str[var1] == '"') {
				if (str[var1 - 1] == '\\') {
					join += str[var1];
				}
				else {
					if (include) {
						join += str[var1];
					}
					splitType = "none";
				}
			}
			else if (str[var1] == '\\') {
				if (str[var1 - 1] == '\\') {
					join += str[var1];
				}
			}
			else {
				join += str[var1];
			}
		}
		else if (join2 == sep) {
			temp.push_back(join);
			join = "";
			var1 += sep.size() - 1;
		}
		else {
			join += str[var1];
		}
		var1++;
	}
	temp.push_back(join);
	return temp;
}

//vector<pair<string, vector<string> > >
pair<string, vector<string> > do_math(SYSTEM &system, string equation) {
	string a;
	vector<string> mtemp = math_split(equation, " ", true);
	for (int t2 = 0; t2 < mtemp.size(); t2++) {
		if (mtemp[t2][0] == '"') {
            mtemp[t2].erase(remove(mtemp[t2].begin(), mtemp[t2].end(), '"'), mtemp[t2].end());
		}
		else if (system.vars.find(mtemp[t2]) != system.vars.end()) {
			mtemp[t2] = system.vars[mtemp[t2]];
		}
	}
	if (mtemp[0] == "round") {
		a = to_string(round(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "abs") {
		a = float_to_str(abs(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "floor") {
		a = float_to_str(floor(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "ceiling") {
		a = float_to_str(ceil(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "sqrt") {
		a = float_to_str(sqrt(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "sin") {
		a = float_to_str(sin(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "cos") {
		a = float_to_str(cos(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "tan") {
		a = float_to_str(tan(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "asin") {
		a = float_to_str(asin(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "acos") {
		a = float_to_str(acos(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "atan") {
		a = float_to_str(atan(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "ln") {
		a = float_to_str(log(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "log") {
		a = float_to_str(log(strtof(mtemp[1].c_str(), 0)));
	}
	else if (mtemp[0] == "read_file") {
		a = open_file(system, mtemp[1]);
	}
	else if (mtemp[0] == "system.files") {
		vector<string> keys;
		for (const pair<string, string>& k : system.files) {
            keys.push_back(k.first);
        }
		a = join_string(keys, " | ");
	}
	else if (mtemp[0] == "len") {
		a = mtemp[1].size();
	}
	else if (mtemp[0] == "rgb") {
		a = (((to_int(mtemp[1]) * 65536) + (to_int(mtemp[2]) * 256)) + to_int(mtemp[3]));
	}
	else if (mtemp[0] == "edit_index") {
		vector<string> temp = split_string(mtemp[2], " | ");
		temp[to_int(mtemp[1]) - 1] = mtemp[3];
		a = join_string(temp, " | ");
	}
	else if (mtemp[0] == "split") {
		if (mtemp[3] == "True") {
			vector<string> temp = math_split(mtemp[1], mtemp[2], (mtemp[4] == "True"));
			a = join_string(temp, " | ");
		}
		else {
            vector<string> temp = split_string(mtemp[1], mtemp[2]);
            a = join_string(temp, " | ");
        }
	}
	/*else if (mtemp[0] == "round") {
		a = 0;
	}
	else if (mtemp[0] == "round") {
		a = 0;
	}
	else if (mtemp[0] == "round") {
		a = 0;
	}*/
	else if (mtemp.size() > 2) {
        if (mtemp[1] == "^") {
            a = float_to_str(pow(strtof(mtemp[0].c_str(), 0), strtof(mtemp[2].c_str(), 0)));
        }
        else if (mtemp[1] == "in") {
            if (find(split_string(mtemp[2], " | ").begin(), split_string(mtemp[2], " | ").end(), mtemp[0]) != split_string(mtemp[2], " | ").end()) {
                a = "True";
            } else {
                a = "False";
            }
        }
        else {
            int mvar = 2;
            a = float_to_str(strtof(mtemp[0].c_str(), 0));
            while (mvar < mtemp.size()) {
                if (mtemp[mvar - 1] == "+") {
                    a = float_to_str(strtof(a.c_str(), 0) + strtof(mtemp[mvar].c_str(), 0));
                }
                if (mtemp[mvar - 1] == "-") {
                    a = float_to_str(strtof(a.c_str(), 0) - strtof(mtemp[mvar].c_str(), 0));
                }
                if (mtemp[mvar - 1] == "/") {
                    a = float_to_str(strtof(a.c_str(), 0) / strtof(mtemp[mvar].c_str(), 0));
                }
                if (mtemp[mvar - 1] == "*") {
                    a = float_to_str(strtof(a.c_str(), 0) * strtof(mtemp[mvar].c_str(), 0));
                }
                if (mtemp[mvar - 1] == "join") {
                    if (mtemp[mvar] == "@spacebr") {
                        a = a + " ";
                    }
                    else {
                        a = a + mtemp[mvar];
                    }
                }
                mvar += 2;
            }
        }
	}
	else if (mtemp[0] == "list") {
		vector<string> temp;
		for (int i = 1; i < mtemp.size(); i++) {
			temp.push_back(mtemp[i]);
			if (split(temp[i - 1], ' ').size() > 1) {
				temp[i - 1] = "\\\"" + temp[i - 1] + "\\\"";
			}
		}
		a = '"' + join_string(temp, " | ") + '"';
	}
	else if (mtemp[0] == "index") {
		//try {
			a = split_string(mtemp[2].substr(1, mtemp[2].size() - 1), " | ")[to_int(mtemp[1]) - 1];
		//}
		//catch(err) {//console.log(err);}
		//finally {}
	}



	else if (mtemp.size() == 1) {
		a = mtemp[0];
	}
	else {
        a = "Error";
	}
	pair<string, vector<string> > ret;
	ret.first = a;
	ret.second = mtemp;
	return ret;
}

//vector<pair<string, vector<string> > >
pair<string, vector<string> > solve(SYSTEM &system, string input, bool info) {
	string str_var = input;
	string a;
	vector<string> mtemp;
	vector<string> ptemp;
	string par_join = "";
	string par_join2 = "";
	int par_count = 0;
	int par_len = 0;
	int par_max = 0;
	for (int i = 0; i < str_var.size(); i++) {
		if (str_var[i] == '(') {
			par_count += 1;
		}
		if (str_var[i] == ')') {
			par_count += -1;
		}
		if (par_count > par_len) {
			par_len = par_count;
		}
	}
	for (int v = 0; v < par_len; v++) {
		par_count = 0;
		par_max = 0;
		for (int i = 0; i < str_var.size(); i++) {
			if (str_var[i] == '(') {
				par_count += 1;
			}
			if (str_var[i] == ')') {
				par_count -= 1;
			}
			if (par_count > par_max) {
				par_max = par_count;
			}
		}
		if (par_count == 0) {
			ptemp.clear();
			par_join = "";
			par_join2 = "";
			par_count = 0;
			for (int par_var = 0; par_var < str_var.size(); par_var++) {
				if (str_var[par_var] == '(') {
					par_count += 1;
					if (str_var[par_var + 1] == '(') {
						par_join += str_var[par_var];
					}
					else if (par_count == par_max && str_var[par_var + 1] != '(') {
						par_join2 = "";
					}
					else if (par_count != par_max && str_var[par_var + 1] != '(') {
						par_join += str_var[par_var];
					}
				}
				else if (str_var[par_var] == ')') {
					if (par_count == par_max && str_var[par_var - 1] != ')') {
						pair<string, vector<string> > resp = do_math(system, par_join2);
						a = resp.first;
						mtemp = resp.second;
						par_join += a;
					}
					else {
						par_join += str_var[par_var];
					}
					par_count -= 1;
				}
				else {
					if (par_count == par_max) {
						par_join2 += str_var[par_var];
					}
					else {
						par_join += str_var[par_var];
					}
				}
			}
			str_var = par_join;
		}
		else {
			cerr << "89: UnbalanceParenthesisError" << endl;
		}
	}
	pair<string, vector<string> > ret;
	ret.first = a;
	ret.second = mtemp;
	return ret;
}

//void
void set_var(SYSTEM &system, string varName, string value) {
	system.vars[varName] = value;
}

//void
void set_sys_var(SYSTEM &system, int varName, string value) {
	system.sys_vars[varName] = value;
}

//string
string get_sys_var(SYSTEM &system, int varName) {
	return system.sys_vars[varName];
}

//vector<string>
vector<string> get_var_vals(SYSTEM &system, vector<string> temp) {
	for (int i = 0; i < temp.size(); i++) {
		if (system.vars.find(temp[i]) != system.vars.end()) {
			temp[i] = system.vars[temp[i]];
		}
		if (temp[i][0] == '"') {
			temp[i].erase(remove(temp[i].begin(), temp[i].end(), '"'), temp[i].end());
		}
		if (temp[i][0] == '(') {
			int par_count = 1;
			string join = "(";
			for (int bv = 1; bv + 1 < temp[i].size(); bv++) {
				join += temp[i][bv];
				if (temp[i][bv] ==  '(') {
					par_count += 1;
				}
				if (temp[i][bv] == ')') {
					par_count -= 1;
					if (par_count == 0) {
						string a = solve(system, join, false).first;
						temp[i] = a;
					}
				}
			}
		}
	}
	return temp;
}

//void
void start(SYSTEM &system, string file) {
    cout << "test" << endl;
	vector<string> ccode = compile_file(system, file);
	run(system, ccode);
}

int main () {
    SYSTEM OS;
    OS.files["startup.exe"] = "println \"Hello World!\";$ var = (1 + (2 - (3 * (4 / (5 ^ 6)))));$ println (var);";
    OS.files["Alps.exe"] = "printcolor 0 0 0;$ println \"Alps Terminal 0.3\";$ #Start mark$ mark start;$ println (\":~\" join dollar);$ push 0;$ input;$ editLast (\":~\" join dollar join \" \" join answer);$ CommandsList = (split answer \" \" true true);$ if {(index 1 CommandsList) == \"echo\"} then goto_mark echo;$ if {(index 1 CommandsList) == \"playsound\"} then goto_mark playsound;$ if {(index 1 CommandsList) == \"run\"} then goto_mark run;$ if {(index 1 CommandsList) == \"help\"} then goto_mark help;$ if {(index 1 CommandsList) == \"exit\"} then goto_mark exit;$ if {(index 1 CommandsList) == \"stats\"} then goto_mark stats;$ if {(index 1 CommandsList) == \"set_var\"} then goto_mark set_var;$ println ((index 1 CommandsList) join \" is not a command\");$ goto_mark start;$ #echo mark$ mark echo;$ println (\">>> \" join (index 2 CommandsList));$ goto_mark start;$ #set_var mark$ mark set_var;$ @set_var \"(index 2 CommandsList)\" \"(index 3 CommandsList)\";$ goto_mark start;$ #playsound mark$ mark playsound;$ play_sound (index 2 CommandsList);$ goto_mark start;$ #run mark$ mark run;$ push 0;$ run_file (index 2 CommandsList);$ stop 0;$ #exit mark$ mark exit;$ push 0;$ run_file (\"home\\taskbar.exe\");$ stop 0;$ #stats mark$ mark stats;$ println (\">>> Math and List handler speed test:\");$ println (\">>> Calculating...\");$ push 0;$ resetTimer;$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ t = (timer / 10);$ println (\">>> Average speed: \" join t join \" seconds\");$ println (\">>> Printer speed test:\");$ resetTimer;$ println (\">>> |\");$ editLast (\">>> ||\");$ editLast (\">>> |||\");$ editLast (\">>> ||||\");$ editLast (\">>> |||||\");$ editLast (\">>> ||||||\");$ editLast (\">>> |||||||\");$ editLast (\">>> ||||||||\");$ editLast (\">>> |||||||||\");$ editLast (\">>> ||||||||||\");$ editLast (\">>> |||||||||||\");$ editLast (\">>> ||||||||||||\");$ editLast (\">>> |||||||||||||\");$ editLast (\">>> ||||||||||||||\");$ editLast (\">>> |||||||||||||||\");$ editLast (\">>> ||||||||||||||||\");$ editLast (\">>> |||||||||||||||||\");$ editLast (\">>> ||||||||||||||||||\");$ editLast (\">>> |||||||||||||||||||\");$ editLast (\">>> ||||||||||||||||||||\");$ push 0;$ mark wait1;$ if {(len tasks) > 0} then goto_mark wait1;$ t = (timer / 20);$ println (\">>> Average speed: \" join t join \" seconds\");$ goto_mark start;$ #help mark$ mark help;$ println (\">>> type 'echo [string]' to print text into the terminal\");$ println (\">>> type 'playsound [file]' to play a sound\");$ println (\">>> type 'run [file]' to execute a file\");$ println (\">>> type 'exit' to return to the desktop\");$ println (\">>> type 'stats' to wiew system statistics\");$ println (\">>> type 'set_var' to set a variable\");$ goto_mark start;";

    string startup_file;
    //in >> startup_file;
    start(OS, "Alps.exe");
}
