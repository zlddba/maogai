#include <iostream>
#include <cstdlib>
#include <chrono>
#include <thread>
#include <string>

#ifdef _WIN32
#include <windows.h>
#else
#include <unistd.h>
#endif

using namespace std;

void executeNodeServer() {
    // 执行Node.js服务器命令
    string nodeCmd = ".\\src\\node\\npm start";
    cout << "正在启动Node.js服务器..." << endl;
    
    #ifdef _WIN32
        // Windows下在新窗口中启动Node服务器
        string fullCmd = "start \"Node Server\" cmd /c " + nodeCmd;
    #else
        // Linux/macOS下直接运行
        string fullCmd = nodeCmd;
    #endif
    
    int result = system(fullCmd.c_str());
    if (result != 0) {
        cerr << "启动Node服务器失败，错误码: " << result << endl;
        exit(1);
    }
}

void openBrowser() {
    // 要访问的网址
    const string url = "http://localhost:9000";  // 假设Node服务器运行在3000端口
    
    cout << "正在打开浏览器访问: " << url << endl;
    
    #ifdef _WIN32
        string cmd = "start \"\" \"" + url + "\"";
    #elif __APPLE__
        string cmd = "open \"" + url + "\"";
    #else
        string cmd = "xdg-open \"" + url + "\"";
    #endif
    
    system(cmd.c_str());
}

void countdown() {
    cout << "服务器启动中，倒计时1秒..." << endl;
    this_thread::sleep_for(chrono::seconds(1));
}

int main() {
    // 1. 启动Node.js服务器
    executeNodeServer();
    
    // 2. 等待1秒让服务器初始化
    countdown();
    
    // 3. 打开浏览器访问
    openBrowser();
    
    return 0;
}