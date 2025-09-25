import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-indigo-500/10 dark:from-indigo-900/30 dark:via-blue-900/20 dark:to-indigo-900/30">
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-pulse"></span>
            AI-Powered Expense Tracking
          </div>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Track expenses, manage budgets, and get smart insights — all in one clean, modern dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <SignInButton>
              <button className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-500 hover:from-indigo-700 hover:via-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-200">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free <span className="text-lg">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
            </SignInButton>

            <button className="border-2 border-indigo-400/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200">
              Learn More
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow mb-4 mx-auto">
                <span className="text-white text-lg">🤖</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
                AI Insights
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Get smart analysis of spending patterns
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow mb-4 mx-auto">
                <span className="text-white text-lg">✨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
                Auto Categories
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Automatic expense categorization
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center shadow mb-4 mx-auto">
                <span className="text-white text-lg">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
                Smart Dashboard
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Clean, intuitive financial overview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white/80 dark:bg-gray-800/80 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
            Frequently Asked{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                What is ExpenseTracker AI?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                It’s a financial tracking tool that uses AI to simplify expense management, auto-categorize spending, and give insights.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Is it free to use?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
              Yes, it’s completely free. This project is built mainly for development
        and learning purposes — feel free to try it out without any charges.

              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;
