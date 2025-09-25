import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-indigo-500/10 dark:from-indigo-900/30 dark:via-blue-900/20 dark:to-indigo-900/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-pulse"></span>
            <span className="hidden sm:inline">Powered by AI Technology</span>
            <span className="sm:hidden">AI Technology</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Your intelligent companion for tracking expenses and managing your finances with
            cutting-edge AI-powered insights.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <Link
              href="/sign-up"
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-500 hover:from-indigo-700 hover:via-blue-600 hover:to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-indigo-500/20 dark:border-indigo-400/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 dark:from-indigo-900/20 dark:via-gray-900 dark:to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'AI-Powered Insights', emoji: '🤖', desc: 'Get intelligent recommendations based on your spending habits and financial goals.' },
              { title: 'Smart Categorization', emoji: '✨', desc: 'Automatically categorize expenses with advanced machine learning algorithms.' },
              { title: 'Analytics Dashboard', emoji: '📊', desc: 'Visualize your financial journey with clear, actionable dashboards and reports.' },
             
            ].map((f, i) => (
              <div
                key={i}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100/50 dark:border-gray-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-xl">{f.emoji}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Call To Action */}
      <section className="relative overflow-hidden text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-500 dark:from-indigo-700 dark:via-blue-600 dark:to-indigo-700 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to take control of your finances?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-indigo-100 leading-relaxed">
            Join thousands of users already experiencing the future of financial management with
            ExpenseTracker AI.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-white text-indigo-600 hover:bg-indigo-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Started For Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
