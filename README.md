# MSTY Freedom Calculator

![MSTY Banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)

A powerful calculator application that helps investors plan their path to financial freedom using the YieldMax MSTR Option Income Strategy ETF (MSTY). This tool helps you calculate the required investment to achieve your desired monthly income through MSTY distributions.

## 🌟 Key Features

- **Income Tier Calculator**: Calculate the MSTY shares needed for different income levels
- **Portfolio Optimization**: Balance between BTC, MSTR, and MSTY allocations
- **Tax Planning**: Special considerations for international investors
- **Real-time Updates**: Track current MSTY prices and distributions
- **Interactive Dashboard**: Visualize your path to financial freedom

## 🏆 MSTY Status Levels

| Status | Monthly Expenses Covered | Monthly Income Target | MSTY Shares Needed | Capital Needed @ $20/Share |
|--------|-------------------------|----------------------|-------------------|---------------------------|
| Beginner | Netflix, Subscriptions | $20 | 20 shares | $400 |
| Intermediate | Groceries | $500 | 500 shares | $10,000 |
| Advanced | Rent / Mortgage | $3,000 | 3,000 shares | $60,000 |
| Elite | All Bills + Travel | $6,000 | 6,000 shares | $120,000 |
| Supreme | Replace Working Income | $10,000 | 10,000 shares | $200,000 |
| Legend | "Never heard from again" | $50,000+ | 50,000+ shares | $1,000,000+ |

## 🧠 Strategy Layer

| Asset | Role | Tax Treatment |
|-------|------|---------------|
| MSTY | Income stream | Taxed annually as ordinary income |
| MSTR | Bitcoin yield-on-yield | Capital gains tax only if sold |
| BTC | Long-term savings | Capital gains tax only if sold |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Thirdweb account and API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/msty-freedom-calculator.git
cd msty-freedom-calculator
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file with your environment variables:
```env
CLIENT_ID=your_thirdweb_client_id
```

4. Start the development server:
```bash
yarn dev
```

## 📊 Usage

1. Enter your desired monthly income target
2. Input your current portfolio value
3. The calculator will show:
   - Required MSTY shares
   - Recommended BTC/MSTR allocation
   - Projected monthly income
   - Tax implications

## 🌍 International Tax Considerations

The calculator includes special features for international investors:

- U.S. withholding tax calculations (15% for French residents)
- French tax credit calculations
- Currency conversion tools
- Tax form preparation guidance

## 🛠️ Technical Stack

- Next.js
- Thirdweb
- React
- TypeScript
- Tailwind CSS
- Chart.js

## 📈 Project Structure

```
src/
├── components/     # React components
├── pages/         # Next.js pages
├── services/      # API and calculation services
├── utils/         # Helper functions
└── types/         # TypeScript type definitions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Resources

- [YieldMax ETFs](https://yieldmaxetfs.com/)
- [Thirdweb Documentation](https://portal.thirdweb.com/typescript/v5)
- [Next.js Documentation](https://nextjs.org/docs)

## ⚠️ Disclaimer

This calculator is for educational purposes only. It is not financial advice. Always do your own research and consult with a financial advisor before making investment decisions.

## 📞 Support

For support or questions, please [open an issue](https://github.com/yourusername/msty-freedom-calculator/issues) or contact us at support@example.com.
